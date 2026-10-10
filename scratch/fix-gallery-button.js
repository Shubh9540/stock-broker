const fs = require('fs');

// 1. Update templates.types.ts
const typesPath = 'd:\\\\wedding-planner\\\\types\\\\templates.types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');
if (typesContent.includes('export interface GalleryData {') && !typesContent.includes('button: {')) {
  // Add button property to GalleryData
  typesContent = typesContent.replace(
    'images: GalleryItem[];',
    'images: GalleryItem[];\n  button: { text: string; url: string };'
  );
  fs.writeFileSync(typesPath, typesContent);
  console.log('Updated templates.types.ts');
}

// 2. Update templates.json
const jsonPath = 'd:\\\\wedding-planner\\\\data\\\\templates.json';
let jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
if (jsonData.categories.WedBliss.sections.Gallery.variants.WedBlissGallery1 && !jsonData.categories.WedBliss.sections.Gallery.variants.WedBlissGallery1.button) {
  jsonData.categories.WedBliss.sections.Gallery.variants.WedBlissGallery1.button = {
    text: 'View More Gallery',
    url: '/gallery'
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log('Updated templates.json');
}

// 3. Update GallerySection.tsx
const componentPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\GallerySection.tsx';
let componentContent = fs.readFileSync(componentPath, 'utf8');
if (componentContent.includes('href="/portfolio"')) {
  componentContent = componentContent.replace('href="/portfolio"', 'href={data.button.url}');
  componentContent = componentContent.replace('View More Gallery', '{data.button.text}');
  
  // Need to make sure button object exists before rendering
  if (!componentContent.includes('data.button &&')) {
    componentContent = componentContent.replace(
      '{/* View More Button */}',
      '{/* View More Button */}\n        {data.button && ('
    );
    // Find the end of the div and close the curly brace
    // It looks like:
    //         <div className="mt-12 flex justify-center">
    //           <Link href={data.button.url} ...>
    //             {data.button.text}
    //             <FaArrowRight />
    //           </Link>
    //         </div>
    
    componentContent = componentContent.replace(
      '          </Link>\n        </div>',
      '          </Link>\n        </div>\n        )}'
    );
  }

  fs.writeFileSync(componentPath, componentContent);
  console.log('Updated GallerySection.tsx');
}
