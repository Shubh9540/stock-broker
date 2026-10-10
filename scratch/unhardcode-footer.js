const fs = require('fs');

let footerPath = 'd:\\\\wedding-planner\\\\components\\\\common\\\\Footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');

// Replace description
footerContent = footerContent.replace(
  /Turning your special moments into unforgettable celebrations with creativity, care and perfection\./g,
  '{data.description}'
);

// Replace address
footerContent = footerContent.replace(
  /24 Fifth St\., Los Angeles,<br\/>USA/g,
  '{data.contactInfo.address}'
);

// Replace email
footerContent = footerContent.replace(
  /info@example\.com/g,
  '{data.contactInfo.email}'
);

// Replace phone
footerContent = footerContent.replace(
  /\+1 123 456 7890<br\/>\s*Support: \+1 123 456 7890/g,
  '{data.contactInfo.phone}<br/>Support: {data.contactInfo.phone}'
);

// Replace Services map
const servicesStatic = `{[
                  "Wedding Planning", "Corporate Events", "Birthday Planning", 
                  "Destination Weddings", "Event Decoration", "Venue Selection"
                ].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {item}
                    </Link>
                  </li>
                ))}`;
const servicesDynamic = `{data.servicesLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {link.label}
                    </Link>
                  </li>
                ))}`;
footerContent = footerContent.replace(servicesStatic, servicesDynamic);

// Replace Quick Links map
const quickStatic = `{[
                  "Home", "About Us", "Our Gallery", 
                  "Event Guides", "Latest News", "Pricing & Terms"
                ].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {item}
                    </Link>
                  </li>
                ))}`;
const quickDynamic = `{data.quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {link.label}
                    </Link>
                  </li>
                ))}`;
footerContent = footerContent.replace(quickStatic, quickDynamic);

// Replace FAQ Links map
const faqStatic = `{[
                  "How Can I Set An Event?", "What Venues Do You Use?", "Event Catalogue", 
                  "Shipping & Delivery", "What's your dream job?"
                ].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {item}
                    </Link>
                  </li>
                ))}`;
const faqDynamic = `{(data.faqLinks || []).map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {link.label}
                    </Link>
                  </li>
                ))}`;
footerContent = footerContent.replace(faqStatic, faqDynamic);

// Replace Copyright
footerContent = footerContent.replace(
  /Copyright Ac 2024 WedBliss\. All rights reserved\./g,
  '{data.copyrightText}'
);
footerContent = footerContent.replace(
  /Copyright © 2024 WedBliss\. All rights reserved\./g,
  '{data.copyrightText}'
);

// Replace Social map
const socialStatic = `{[
                { icon: <FaFacebookF size={14} />, id: 'fb' },
                { icon: <FaTwitter size={14} />, id: 'tw' },
                { icon: <FaInstagram size={14} />, id: 'ig' },
                { icon: <FaLinkedinIn size={14} />, id: 'li' }
              ].map(social => (
                <Link 
                  key={social.id} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#4a262a] flex items-center justify-center text-white hover:bg-[#c49250] transition-colors shadow-sm"
                >
                  {social.icon}
                </Link>
              ))}`;
const socialDynamic = `{data.socialLinks.map(social => (
                <Link 
                  key={social.id} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-[#4a262a] flex items-center justify-center text-white hover:bg-[#c49250] transition-colors shadow-sm"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}`;
footerContent = footerContent.replace(socialStatic, socialDynamic);

// Ensure renderSocialIcon uses size={14}
footerContent = footerContent.replace(
  /case 'FaFacebookF': return <FaFacebookF \/>;/g,
  "case 'FaFacebookF': return <FaFacebookF size={14} />;"
);
footerContent = footerContent.replace(
  /case 'FaInstagram': return <FaInstagram \/>;/g,
  "case 'FaInstagram': return <FaInstagram size={14} />;"
);
footerContent = footerContent.replace(
  /case 'FaLinkedinIn': return <FaLinkedinIn \/>;/g,
  "case 'FaLinkedinIn': return <FaLinkedinIn size={14} />;"
);
footerContent = footerContent.replace(
  /case 'FaTwitter': return <FaTwitter \/>;/g,
  "case 'FaTwitter': return <FaTwitter size={14} />;"
);
footerContent = footerContent.replace(
  /case 'FaYoutube': return <FaTwitter \/>;/g,
  "case 'FaYoutube': return <FaYoutube size={14} />;"
);
footerContent = footerContent.replace(
  /default: return <FaFacebookF \/>;/g,
  "default: return <FaFacebookF size={14} />;"
);

fs.writeFileSync(footerPath, footerContent);
console.log('Replaced hardcoded data with JSON data properties.');
