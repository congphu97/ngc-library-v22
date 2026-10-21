const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '../node_modules/angular-core');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import\s*\{\s*RouterModule\s*\}\s*from\s*['"]@angular\/router['"];/g, 'import { CommonModule } from "@angular/common";');
  content = content.replace(/imports:\s*\[HttpClientModule,\s*RouterModule,\s*BrowserModule,\s*TranslateModule,\s*BrowserModule,\s*TranslateModule\]/g, 'imports: [CommonModule, TranslateModule]');
  content = content.replace(/imports:\s*\[HttpClientModule,\s*RouterModule,\s*BrowserModule,\s*TranslateModule\]/g, 'imports: [CommonModule, TranslateModule]');
  content = content.replace(/exports:\s*\[\s*BrowserModule,\s*TranslateModule,/g, 'exports: [CommonModule, TranslateModule,');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[patch-angular-core] Patched ${path.relative(targetDir, filePath)}`);
}

if (fs.existsSync(targetDir)) {
  patchFile(path.join(targetDir, 'esm2020/lib/core.module.mjs'));
  patchFile(path.join(targetDir, 'fesm2015/angular-core.mjs'));
  patchFile(path.join(targetDir, 'fesm2020/angular-core.mjs'));
  console.log('[patch-angular-core] Successfully patched angular-core');
} else {
  console.log('[patch-angular-core] angular-core not found, skipping patch.');
}
