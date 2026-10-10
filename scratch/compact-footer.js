const fs = require('fs');

let footerPath = 'd:\\\\wedding-planner\\\\components\\\\common\\\\Footer.tsx';
let content = fs.readFileSync(footerPath, 'utf8');

// Container margins and paddings
content = content.replace('mt-16 bg-[#2d171b]', 'mt-8 bg-[#2d171b]');
content = content.replace('pt-16 pb-12 relative z-10', 'pt-8 pb-6 relative z-10');
content = content.replace('gap-12 lg:gap-8 lg:divide-x', 'gap-8 lg:gap-4 lg:divide-x');

// Logo
content = content.replace('className="h-16 object-contain mb-4"', 'className="h-12 object-contain mb-3"');

// Rings Divider under logo
content = content.replace('className="mb-6 w-[80%]"', 'className="mb-4 w-[80%]"');

// Description
content = content.replace('className="text-gray-300 text-sm leading-relaxed mb-8"', 'className="text-gray-300 text-xs leading-relaxed mb-5"');

// Contact list
content = content.replace(/gap-6/g, 'gap-3');
content = content.replace(/w-10 h-10/g, 'w-8 h-8 text-[10px]');
content = content.replace(/text-gray-300 text-sm leading-snug/g, 'text-gray-300 text-xs leading-tight');
content = content.replace(/text-gray-300 text-sm/g, 'text-gray-300 text-xs');

// Column headers
content = content.replace(/text-xl font-serif text-white mb-4/g, 'text-lg font-serif text-white mb-3');
content = content.replace(/w-8 h-\[2px\] bg-\[#c49250\] mb-8/g, 'w-6 h-[2px] bg-[#c49250] mb-5');

// Links
content = content.replace(/gap-4/g, 'gap-2.5');
content = content.replace(/text-gray-300 text-sm hover:text-white/g, 'text-gray-300 text-xs hover:text-white');

// Bottom Divider
content = content.replace('mt-16 mb-8', 'mt-10 mb-6');

// Copyright
content = content.replace(/w-9 h-9/g, 'w-8 h-8 text-[10px]');
content = content.replace('text-gray-300 text-sm text-center', 'text-gray-300 text-xs text-center');

fs.writeFileSync(footerPath, content);
console.log('Footer compacted successfully');
