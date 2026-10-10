const fs = require('fs');
let file = 'd:\\wedding-planner\\components\\sections\\TestimonialSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Increase avatar size
content = content.replace('w-14 h-14 rounded-full', 'w-20 h-20 rounded-full');

// Remove stars
let starsStr = `<div className="flex text-[#dfa342] text-sm gap-1">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                          </div>`;
content = content.replace(starsStr, '');

// Reduce gap below text
content = content.replace('className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow"', 'className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow"');

fs.writeFileSync(file, content);
console.log('Updated TestimonialSection');
