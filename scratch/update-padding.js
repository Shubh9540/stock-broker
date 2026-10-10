const fs = require('fs');

let faqPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\FaqSection.tsx';
let faqContent = fs.readFileSync(faqPath, 'utf8');
faqContent = faqContent.replace(
  'className="bg-[#fdfaf6] py-16 lg:py-24 overflow-hidden"', 
  'className="bg-[#fdfaf6] pt-16 lg:pt-24 pb-4 lg:pb-6 overflow-hidden"'
);
fs.writeFileSync(faqPath, faqContent);

let testPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\TestimonialSection.tsx';
let testContent = fs.readFileSync(testPath, 'utf8');
testContent = testContent.replace(
  'className="bg-[#fcfaf9] py-16 lg:py-12 relative overflow-hidden"', 
  'className="bg-[#fcfaf9] pt-4 lg:pt-6 pb-16 lg:pb-24 relative overflow-hidden"'
);
fs.writeFileSync(testPath, testContent);

console.log('Padding adjusted');
