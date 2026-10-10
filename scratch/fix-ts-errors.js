const fs = require('fs');

// Fix types in templates.types.ts
const typesPath = 'd:\\\\wedding-planner\\\\types\\\\templates.types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');

// 1. ServicesData -> add optional button
typesContent = typesContent.replace(
  'services: ServiceItem[];\n  button: { text: string; url: string };',
  'services: ServiceItem[];\n  button?: { text: string; url: string };'
);

// 2. ProcessItem -> add number
typesContent = typesContent.replace(
  'export interface ProcessItem {\n  id: string;\n  icon: string;\n  title: string;\n  description: string;\n  url: string;\n}',
  'export interface ProcessItem {\n  id: string;\n  icon: string;\n  number?: string;\n  title: string;\n  description: string;\n  url?: string;\n}'
);

// 3. ProcessData -> add steps, bgImage, make image/features/etc optional
typesContent = typesContent.replace(
  'export interface ProcessData {\n  subtitle: string;\n  title1: string;\n  title2: string;\n  title3: string;\n  description: string;\n  image: string;\n  features: ProcessItem[];\n}',
  'export interface ProcessData {\n  subtitle: string;\n  title1: string;\n  title2: string;\n  title3?: string;\n  description?: string;\n  image?: string;\n  bgImage?: string;\n  features?: ProcessItem[];\n  steps?: ProcessItem[];\n}'
);

// 4. GalleryData -> add button
typesContent = typesContent.replace(
  'images: GalleryItem[];\n}',
  'images: GalleryItem[];\n  button?: { text: string; url: string };\n}'
);

fs.writeFileSync(typesPath, typesContent);

// Fix AboutUsSection props
const aboutPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\AboutUsSection.tsx';
let aboutContent = fs.readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(
  'export const AboutUsSection = ({ data }: { data?: AboutUsData }) => {',
  'export const AboutUsSection = ({ data, hideButton }: { data?: AboutUsData; hideButton?: boolean }) => {'
);
fs.writeFileSync(aboutPath, aboutContent);

// Fix ServicesSection props
const servicesPath = 'd:\\\\wedding-planner\\\\components\\\\sections\\\\ServicesSection.tsx';
let servicesContent = fs.readFileSync(servicesPath, 'utf8');
servicesContent = servicesContent.replace(
  'export const ServicesSection = ({ data }: { data?: ServicesData }) => {',
  'export const ServicesSection = ({ data, hideButton }: { data?: ServicesData; hideButton?: boolean }) => {'
);
fs.writeFileSync(servicesPath, servicesContent);

// Fix app/about/page.tsx (remove WhyChooseUsSection tag that got left behind)
const aboutPagePath = 'd:\\\\wedding-planner\\\\app\\\\about\\\\page.tsx';
let aboutPageContent = fs.readFileSync(aboutPagePath, 'utf8');
aboutPageContent = aboutPageContent.replace(/\{\/\* Why Choose Us Section \*\/\}\n\s*<WhyChooseUsSection data=\{sectionData\.whyChooseUs\?.variants\?.WedBlissWhyChooseUs1\} \/>\n/g, '');
fs.writeFileSync(aboutPagePath, aboutPageContent);

console.log('Fixed TS errors.');
