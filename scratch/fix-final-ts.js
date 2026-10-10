const fs = require('fs');

// 1. Fix app/about/page.tsx
const aboutPagePath = 'd:\\\\wedding-planner\\\\app\\\\about\\\\page.tsx';
if (fs.existsSync(aboutPagePath)) {
  let content = fs.readFileSync(aboutPagePath, 'utf8');
  content = content.replace(/\{\/\* Why Choose Us Section \*\/\}\s*<WhyChooseUsSection[\s\S]*?\/>/g, '');
  fs.writeFileSync(aboutPagePath, content);
}

// 2. Fix ProcessSection.tsx
const processPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\ProcessSection.tsx';
if (fs.existsSync(processPath)) {
  let content = fs.readFileSync(processPath, 'utf8');
  content = content.replace(/data\.steps\.map/g, '(data.steps || []).map');
  content = content.replace(/data\.steps\.length/g, '(data.steps || []).length');
  fs.writeFileSync(processPath, content);
}

// 3. Fix WhatWeDoSection.tsx
const whatWeDoPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\WhatWeDoSection.tsx';
if (fs.existsSync(whatWeDoPath)) {
  let content = fs.readFileSync(whatWeDoPath, 'utf8');
  content = content.replace(/data\.features\.map/g, '(data.features || []).map');
  content = content.replace(/href=\{feature\.url\}/g, 'href={feature.url || "#"}');
  fs.writeFileSync(whatWeDoPath, content);
}

console.log('Fixed final TS errors');
