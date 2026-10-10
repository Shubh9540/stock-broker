const fs = require('fs');

// 1. Update app/page.tsx
let pagePath = 'd:\\\\wedding-planner\\\\app\\\\page.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');

pageContent = pageContent.replace(/import \{ CtaSection \} from '@\/components\/sections\/CtaSection';\n?/g, '');
pageContent = pageContent.replace(/import \{ BlogsSection \} from '@\/components\/sections\/BlogsSection';\n?/g, '');

pageContent = pageContent.replace(/<CtaSection data=\{sectionData\.Cta\?.variants\?.WedBlissCta1\} \/>\n?/g, '');
pageContent = pageContent.replace(/<BlogsSection data=\{sectionData\.Blogs\?.variants\?.WedBlissBlogs1\} \/>\n?/g, '');

fs.writeFileSync(pagePath, pageContent);
console.log('Cleaned page.tsx');


// 2. Update types/templates.types.ts
let typesPath = 'd:\\\\wedding-planner\\\\types\\\\templates.types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');

// Remove CtaData
typesContent = typesContent.replace(/export interface CtaData \{[\s\S]*?\}\n\n/g, '');

// Remove BlogItem
typesContent = typesContent.replace(/export interface BlogItem \{[\s\S]*?\}\n\n/g, '');

// Remove BlogsData
typesContent = typesContent.replace(/export interface BlogsData \{[\s\S]*?\}\n\n/g, '');

// Remove from WedBlissTemplateData sections
typesContent = typesContent.replace(/Cta\?: \{ variants\?: \{ WedBlissCta1\?: CtaData \} \};\n?/g, '');
typesContent = typesContent.replace(/Blogs\?: \{ variants\?: \{ WedBlissBlogs1\?: BlogsData \} \};\n?/g, '');

fs.writeFileSync(typesPath, typesContent);
console.log('Cleaned templates.types.ts');


// 3. Update data/templates.json
let jsonPath = 'd:\\\\wedding-planner\\\\data\\\\templates.json';
let jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

if (jsonData.categories && jsonData.categories.WedBliss && jsonData.categories.WedBliss.sections) {
  if (jsonData.categories.WedBliss.sections.Cta) {
    delete jsonData.categories.WedBliss.sections.Cta;
  }
  if (jsonData.categories.WedBliss.sections.Blogs) {
    delete jsonData.categories.WedBliss.sections.Blogs;
  }
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log('Cleaned templates.json');
}

// 4. Optionally delete the component files
const filesToDelete = [
  'd:\\\\wedding-planner\\\\components\\\\sections\\\\CtaSection.tsx',
  'd:\\\\wedding-planner\\\\components\\\\sections\\\\BlogsSection.tsx',
  'd:\\\\wedding-planner\\\\components\\\\sections\\\\BlogDetailContent.tsx'
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log('Deleted ' + file);
  }
});
