const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const ignoreDirs = ['.git', 'node_modules', '.next', 'images'];

const replacements = [
    { from: /Software Pilot\.store/gi, to: 'softwarepilot.online' },
    { from: /info@Software Pilot\.online/gi, to: 'info@softwarepilot.online' },
    { from: /www\.Software Pilot\.online/gi, to: 'www.softwarepilot.online' },
    { from: /https:\/\/Software Pilot\.online/gi, to: 'https://softwarepilot.online' },
    { from: /Byte<span>Bricks<\/span>/gi, to: 'Software<span>Pilot</span>' },
    { from: /Byte<span className="text-primary">Bricks<\/span>/gi, to: 'Software<span className="text-primary">Pilot</span>' }
];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (ignoreDirs.includes(f)) return;
        
        let isDirectory = false;
        try {
            isDirectory = fs.statSync(dirPath).isDirectory();
        } catch(e) { return; }
        
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(directoryPath, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.json') || filePath.endsWith('.html') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        replacements.forEach(r => {
            newContent = newContent.replace(r.from, r.to);
        });
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
});
console.log('Fix complete.');
