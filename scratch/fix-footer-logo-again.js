const fs = require('fs');

let footerPath = 'd:\\\\wedding-planner\\\\components\\\\common\\\\Footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');

const textLogo = `<h2 className="text-[40px] font-serif font-bold mb-3 tracking-tight">
                <span className="text-white">Wed</span><span className="text-[#d9a8b1]">Bliss</span>
              </h2>`;

const imgLogo = `<img src="/main logo/logo.webp" alt={data.logoAlt || 'WedBliss Logo'} className="h-14 object-contain mb-5" />`;

if (footerContent.includes('span className="text-white">Wed</span>')) {
  footerContent = footerContent.replace(textLogo, imgLogo);
  fs.writeFileSync(footerPath, footerContent);
  console.log('Replaced text logo with image logo correctly');
} else {
  console.log('Text logo not found!');
}
