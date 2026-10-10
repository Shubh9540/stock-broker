const fs = require('fs');

// 1. Update templates.json
const jsonPath = 'd:\\\\wedding-planner\\\\data\\\\templates.json';
let jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

if (jsonData.common && jsonData.common.Footer) {
  jsonData.common.Footer.brandTitle = "WedBliss";
  jsonData.common.Footer.copyrightText = "Copyright © 2024 WedBliss. All rights reserved.";
  jsonData.common.Footer.description = "Turning your special moments into unforgettable celebrations with creativity, care and perfection.";
  jsonData.common.Footer.faqLinks = [
    { id: "fq1", label: "How Can I Set An Event?", url: "/faq" },
    { id: "fq2", label: "What Venues Do You Use?", url: "/faq" },
    { id: "fq3", label: "Event Catalogue", url: "/services" },
    { id: "fq4", label: "Shipping & Delivery", url: "/contact" },
    { id: "fq5", label: "What's your dream job?", url: "/about" }
  ];
  
  // Also fix services links to match screenshot roughly
  jsonData.common.Footer.servicesLinks = [
    { id: "sl1", label: "Wedding Planning", url: "/services" },
    { id: "sl2", label: "Corporate Events", url: "/services" },
    { id: "sl3", label: "Birthday Planning", url: "/services" },
    { id: "sl4", label: "Destination Weddings", url: "/services" },
    { id: "sl5", label: "Event Decoration", url: "/services" },
    { id: "sl6", label: "Venue Selection", url: "/services" }
  ];
  
  // Fix quick links to match screenshot
  jsonData.common.Footer.quickLinks = [
    { id: "ql1", label: "Home", url: "/" },
    { id: "ql2", label: "About Us", url: "/about" },
    { id: "ql3", label: "Our Gallery", url: "/gallery" },
    { id: "ql4", label: "Event Guides", url: "/services" },
    { id: "ql5", label: "Latest News", url: "/blog" },
    { id: "ql6", label: "Pricing & Terms", url: "/contact" }
  ];

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
}

// 2. Update templates.types.ts
const typesPath = 'd:\\\\wedding-planner\\\\types\\\\templates.types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');

if (!typesContent.includes('faqLinks: { id: string; label: string; url: string }[];')) {
  typesContent = typesContent.replace(
    'instagram: string[];',
    'instagram: string[];\n  faqLinks?: { id: string; label: string; url: string }[];'
  );
  fs.writeFileSync(typesPath, typesContent);
}

console.log('Updated Footer data in json and types.');
