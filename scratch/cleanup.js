const fs = require('fs');

// 1. app/page.tsx
const pagePath = 'd:\\\\wedding-planner\\\\app\\\\page.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');
pageContent = pageContent.replace(/import \{ WhyChooseUsSection \} from '@\/components\/sections\/WhyChooseUsSection';\n?/g, '');
pageContent = pageContent.replace(/<WhyChooseUsSection data=\{sectionData\.whyChooseUs\?.variants\?.WedBlissWhyChooseUs1\} \/>\n?/g, '');
fs.writeFileSync(pagePath, pageContent);

// 2. data/templates.json
const jsonPath = 'd:\\\\wedding-planner\\\\data\\\\templates.json';
let jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
if (jsonData.categories && jsonData.categories.WedBliss && jsonData.categories.WedBliss.sections) {
  if (jsonData.categories.WedBliss.sections.whyChooseUs) {
    delete jsonData.categories.WedBliss.sections.whyChooseUs;
  }
}
fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

// 3. types/templates.types.ts
const typesPath = 'd:\\\\wedding-planner\\\\types\\\\templates.types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');

// Remove WhyChooseUs types
typesContent = typesContent.replace(/export interface WhyChooseUsFeature \{[\s\S]*?\}\n\n/g, '');
typesContent = typesContent.replace(/export interface WhyChooseUsData \{[\s\S]*?\}\n\n/g, '');

// Add Faq types if they don't exist
if (!typesContent.includes('export interface FaqData')) {
  const faqTypes = `
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  faqs: FaqItem[];
}

`;
  // Insert before GalleryData or VideoItem
  typesContent = typesContent.replace('export interface GalleryItem', faqTypes + 'export interface GalleryItem');
}

// Fix sections in WedBlissTemplateData
const newSections = `        Header?: { variants?: { WedBlissHeader1?: HeaderData } };
        Hero?: { variants?: { WedBlissHero1?: HeroData } };
        AboutUs?: { variants?: { WedBlissAboutUs1?: AboutUsData } };
        Services?: { variants?: { WedBlissServices1?: ServicesData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        Process?: { variants?: { WedBlissProcess1?: ProcessData } };
        WhatWeDo?: { variants?: { WedBlissWhatWeDo1?: ProcessData } };
        Faq?: { variants?: { WedBlissFaq1?: FaqData } };
        Gallery?: { variants?: { WedBlissGallery1?: GalleryData } };
        Testimonials?: { variants?: { WedBlissTestimonials1?: TestimonialsData } };
        contact?: { variants?: { WedBlissContact1?: ContactData } };
        enquiry?: { variants?: { WedBlissEnquiry1?: EnquiryData } };`;

// Replace the sections block
typesContent = typesContent.replace(
  /Header\?: \{ variants\?: \{ WedBlissHeader1\?: HeaderData \} \};[\s\S]*?enquiry\?: \{ variants\?: \{ WedBlissEnquiry1\?: EnquiryData \} \};/g,
  newSections
);

fs.writeFileSync(typesPath, typesContent);

// 4. Delete the component file
const compPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\WhyChooseUsSection.tsx';
if (fs.existsSync(compPath)) {
  fs.unlinkSync(compPath);
}

console.log('Cleanup completed successfully!');
