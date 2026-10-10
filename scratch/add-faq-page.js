const fs = require('fs');

let pagePath = 'd:\\wedding-planner\\app\\page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

if (!content.includes('FaqSection')) {
  // Add import
  content = content.replace(
    "import { TestimonialSection } from '@/components/sections/TestimonialSection';",
    "import { TestimonialSection } from '@/components/sections/TestimonialSection';\nimport { FaqSection } from '@/components/sections/FaqSection';"
  );
  
  // Add component
  content = content.replace(
    "<TestimonialSection data={sectionData.Testimonials?.variants?.WedBlissTestimonials1} />",
    "<FaqSection data={sectionData.Faq?.variants?.WedBlissFaq1} />\n      <TestimonialSection data={sectionData.Testimonials?.variants?.WedBlissTestimonials1} />"
  );
  
  fs.writeFileSync(pagePath, content);
  console.log('Added FaqSection to page.tsx');
} else {
  console.log('page.tsx already has FaqSection');
}
