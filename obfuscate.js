const fs = require('fs');
const path = require('path');
const obfuscator = require('javascript-obfuscator');

const sourceDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Recursive obfuscation function
function obfuscateDirectory(dir, outputDir) {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const sourcePath = path.join(dir, file);
        const outputPath = path.join(outputDir, file);
        const stats = fs.statSync(sourcePath);

        if (stats.isDirectory()) {
            // Recursively obfuscate subdirectories
            obfuscateDirectory(sourcePath, outputPath);
        } else if (path.extname(file) === '.js') {
            // Obfuscate JavaScript files
            const code = fs.readFileSync(sourcePath, 'utf8');
            const obfuscationResult = obfuscator.obfuscate(code, {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.75,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.4,
                debugProtection: false,
                identifierNamesGenerator: 'hexadecimal',
                rotateStringArray: true,
                selfDefending: true,
                shuffleStringArray: true,
                splitStrings: true,
                splitStringsChunkLength: 10,
                stringArray: true,
                stringArrayEncoding: ['base64'],
                stringArrayThreshold: 0.75
            });

            fs.writeFileSync(outputPath, obfuscationResult.getObfuscatedCode());
            console.log(`Obfuscated: ${sourcePath} -> ${outputPath}`);
        } else {
            // Copy non-JS files as-is
            fs.copyFileSync(sourcePath, outputPath);
        }
    });
}

// Start obfuscation
obfuscateDirectory(sourceDir, distDir);

// Copy package.json and other necessary files
fs.copyFileSync(
    path.join(__dirname, 'package.json'), 
    path.join(distDir, 'package.json')
);
