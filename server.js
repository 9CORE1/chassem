const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// API to save updated data back to data.json
app.post('/api/save', (req, res) => {
    let { portfolioData, journeyData, competenciesData, popupConfig } = req.body;
    
    if (!portfolioData || !journeyData || !competenciesData) {
        return res.status(400).json({ error: '필수 데이터 항목이 누락되었습니다.' });
    }
    
    // Base64 형태의 이미지 데이터를 추출하여 images 폴더에 JPEG 파일로 저장 후 상대경로로 치환
    let updatedPortfolioData = portfolioData.map(item => {
        let updatedItem = { ...item };
        const dirPath = path.join(__dirname, 'images');
        
        // images 디렉토리가 없으면 생성
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        
        // 이미지 1 저장 (기존 필드)
        if (updatedItem.imageUrl && updatedItem.imageUrl.startsWith('data:image/')) {
            try {
                const matches = updatedItem.imageUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
                if (matches && matches.length === 3) {
                    const base64Data = matches[2];
                    const buffer = Buffer.from(base64Data, 'base64');
                    const filename = `project-${item.id}.jpg`;
                    const filePath = path.join(dirPath, filename);
                    fs.writeFileSync(filePath, buffer);
                    console.log(`[${new Date().toLocaleTimeString()}] 이미지 1 저장 완료: ${filePath}`);
                    updatedItem.imageUrl = `images/${filename}`;
                }
            } catch (err) {
                console.error('이미지 1 파일 저장 오류:', err);
            }
        }
        
        // 이미지 2 저장 (신규 필드)
        if (updatedItem.imageUrl2 && updatedItem.imageUrl2.startsWith('data:image/')) {
            try {
                const matches = updatedItem.imageUrl2.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
                if (matches && matches.length === 3) {
                    const base64Data = matches[2];
                    const buffer = Buffer.from(base64Data, 'base64');
                    const filename = `project-${item.id}-2.jpg`;
                    const filePath = path.join(dirPath, filename);
                    fs.writeFileSync(filePath, buffer);
                    console.log(`[${new Date().toLocaleTimeString()}] 이미지 2 저장 완료: ${filePath}`);
                    updatedItem.imageUrl2 = `images/${filename}`;
                }
            } catch (err) {
                console.error('이미지 2 파일 저장 오류:', err);
            }
        }
        
        return updatedItem;
    });
    
    // 팝업 이미지 저장
    let updatedPopupConfig = popupConfig ? { ...popupConfig } : null;
    if (updatedPopupConfig && updatedPopupConfig.imageUrl && updatedPopupConfig.imageUrl.startsWith('data:image/')) {
        try {
            const dirPath = path.join(__dirname, 'images');
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
            const matches = updatedPopupConfig.imageUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                const base64Data = matches[2];
                const buffer = Buffer.from(base64Data, 'base64');
                const filename = 'popup-image.jpg';
                const filePath = path.join(dirPath, filename);
                fs.writeFileSync(filePath, buffer);
                console.log(`[${new Date().toLocaleTimeString()}] 팝업 이미지 저장 완료: ${filePath}`);
                updatedPopupConfig.imageUrl = `images/${filename}`;
            }
        } catch (err) {
            console.error('팝업 이미지 파일 저장 오류:', err);
        }
    }
    
    const filePath = path.join(__dirname, 'data.json');
    const fileContent = JSON.stringify({ 
        portfolioData: updatedPortfolioData, 
        journeyData, 
        competenciesData, 
        popupConfig: updatedPopupConfig 
    }, null, 2);
    
    fs.writeFile(filePath, fileContent, 'utf8', (err) => {
        if (err) {
            console.error('데이터 저장 실패:', err);
            return res.status(500).json({ error: '서버 파일 쓰기 중 오류가 발생했습니다.' });
        }
        console.log(`[${new Date().toLocaleTimeString()}] 데이터가 성공적으로 data.json 파일에 저장되었습니다.`);
        res.json({ 
            success: true, 
            message: '서버 데이터 및 이미지 파일 저장 완료',
            portfolioData: updatedPortfolioData,
            popupConfig: updatedPopupConfig
        });
    });
});

// API to receive course applications
app.post('/api/apply', (req, res) => {
    const appData = req.body;
    if (!appData.name || !appData.phone || !appData.email) {
        return res.status(400).json({ error: '필수 항목(이름, 연락처, 이메일)이 누락되었습니다.' });
    }
    
    const filePath = path.join(__dirname, 'applications.json');
    let applications = [];
    if (fs.existsSync(filePath)) {
        try {
            applications = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.error('Error reading applications file:', e);
        }
    }
    applications.push(appData);
    
    fs.writeFile(filePath, JSON.stringify(applications, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: '신청 정보 저장 실패' });
        }
        console.log(`[${new Date().toLocaleTimeString()}] 신규 수강 신청 등록 완료: ${appData.name}`);
        res.json({ success: true, message: '수강 신청이 완료되었습니다.' });
    });
});

// API to retrieve all applications (Admin only)
app.get('/api/applications', (req, res) => {
    const filePath = path.join(__dirname, 'applications.json');
    let applications = [];
    if (fs.existsSync(filePath)) {
        try {
            applications = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.error('Error reading applications file:', e);
        }
    }
    res.json(applications);
});

// API to delete an application (Admin only)
app.post('/api/applications/delete', (req, res) => {
    const { index } = req.body;
    const filePath = path.join(__dirname, 'applications.json');
    if (fs.existsSync(filePath)) {
        try {
            let applications = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (index >= 0 && index < applications.length) {
                const deleted = applications.splice(index, 1);
                fs.writeFileSync(filePath, JSON.stringify(applications, null, 2), 'utf8');
                console.log(`[${new Date().toLocaleTimeString()}] 수강 신청 삭제 완료: ${deleted[0].name}`);
                return res.json({ success: true, message: '신청 정보가 삭제되었습니다.' });
            }
        } catch (e) {
            console.error(e);
        }
    }
    res.status(400).json({ error: '삭제 처리에 실패했습니다.' });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Get local IPv4 addresses to show local network URLs
function getLocalIpAddresses() {
    const interfaces = os.networkInterfaces();
    const addresses = [];
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                addresses.push(iface.address);
            }
        }
    }
    return addresses;
}

app.listen(PORT, () => {
    console.log('\n==================================================');
    console.log('🚀 차은정 포트폴리오 웹 서버 가동 중...');
    console.log(`🏠 로컬 접속 주소: http://localhost:${PORT}`);
    
    const localIps = getLocalIpAddresses();
    if (localIps.length > 0) {
        console.log('📱 동일한 와이파이(공유기) 네트워크 내 다른 기기 접속 주소:');
        localIps.forEach(ip => {
            console.log(`   👉 http://${ip}:${PORT}`);
        });
    }
    console.log('==================================================\n');
});
