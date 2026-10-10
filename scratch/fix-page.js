const fs = require('fs');
let pagePath = 'd:\\wedding-planner\\app\\page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

if (!content.includes('GallerySection')) {
  content = content.replace(
    "import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';",
    "import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';\nimport { GallerySection } from '@/components/sections/GallerySection';"
  );
  
  content = content.replace(
    "<WhatWeDoSection data={sectionData.WhatWeDo?.variants?.WedBlissWhatWeDo1} />",
    "<WhatWeDoSection data={sectionData.WhatWeDo?.variants?.WedBlissWhatWeDo1} />\n      <GallerySection data={sectionData.Gallery?.variants?.WedBlissGallery1} />"
  );
  
  fs.writeFileSync(pagePath, content);
  console.log('page.tsx updated with Gallery');
} else {
  console.log('Already has GallerySection');
}
