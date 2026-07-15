const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\HRDPRO\\Documents\\profile\\project-management-admin.html';
const content = fs.readFileSync(filePath, 'utf8');

// Extract script content
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    const scriptContent = scriptMatch[1];
    fs.writeFileSync('C:\\Users\\HRDPRO\\Documents\\profile\\scratch\\temp_script.js', scriptContent);
    console.log('Script extracted successfully!');
} else {
    console.log('No script tag found!');
}
