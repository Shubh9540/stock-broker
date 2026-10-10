const fs = require('fs');

let footerPath = 'd:\\\\wedding-planner\\\\components\\\\common\\\\Footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');

const textLogo = `<h2 className="text-4xl font-serif font-bold mb-4">
                <span className="text-white">Wed</span><span className="text-[#d6aeb9]">Bliss</span>
              </h2>`;

const imgLogo = `<img src="/main logo/logo.png" alt={data.logoAlt || 'WedBliss Logo'} className="h-16 object-contain mb-4" />`;

if (footerContent.includes('text-white">Wed</span>')) {
  footerContent = footerContent.replace(textLogo, imgLogo);
  fs.writeFileSync(footerPath, footerContent);
  console.log('Replaced text logo with image logo in Footer.tsx');
} else {
  console.log('Text logo not found in Footer.tsx');
}
