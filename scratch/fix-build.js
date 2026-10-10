const fs = require('fs');
const path = require('path');

// 1. Fix app/about/page.tsx
const aboutPath = 'd:\\\\wedding-planner\\\\app\\\\about\\\\page.tsx';
if (fs.existsSync(aboutPath)) {
  let content = fs.readFileSync(aboutPath, 'utf8');
  content = content.replace(/import \{ WhyChooseUsSection \} from '@\/components\/sections\/WhyChooseUsSection';\n?/g, '');
  content = content.replace(/\{\/\* Why Choose Us Section \*\/\}\n\s*<WhyChooseUsSection[\s\S]*?\/>\n?/g, '');
  fs.writeFileSync(aboutPath, content);
  console.log('Fixed about/page.tsx');
}

// 2. Remove app/blog directory
const blogDir = 'd:\\\\wedding-planner\\\\app\\\\blog';
if (fs.existsSync(blogDir)) {
  fs.rmSync(blogDir, { recursive: true, force: true });
  console.log('Removed app/blog directory');
}

