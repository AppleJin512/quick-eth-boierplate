import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'package', 'package.json');

const pkgJSON = JSON.parse(fs.readFileSync(filePath, 'utf8'));
pkgJSON.main = 'index.js';
pkgJSON.svelte = 'index.js';

fs.writeFileSync(filePath, JSON.stringify(pkgJSON, null, 2));
console.log('rewritten package successfully!');
