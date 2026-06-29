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
    const { portfolioData, journeyData, competenciesData } = req.body;
    
    if (!portfolioData || !journeyData || !competenciesData) {
        return res.status(400).json({ error: '필수 데이터 항목이 누락되었습니다.' });
    }
    
    const filePath = path.join(__dirname, 'data.json');
    const fileContent = JSON.stringify({ portfolioData, journeyData, competenciesData }, null, 2);
    
    fs.writeFile(filePath, fileContent, 'utf8', (err) => {
        if (err) {
            console.error('데이터 저장 실패:', err);
            return res.status(500).json({ error: '서버 파일 쓰기 중 오류가 발생했습니다.' });
        }
        console.log(`[${new Date().toLocaleTimeString()}] 데이터가 성공적으로 data.json 파일에 저장되었습니다.`);
        res.json({ success: true, message: '서버 데이터 저장 완료' });
    });
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
