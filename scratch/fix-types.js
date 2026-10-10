const fs = require('fs');
let typesPath = 'd:\\wedding-planner\\types\\templates.types.ts';
let content = fs.readFileSync(typesPath, 'utf8');

if (!content.includes('GalleryData')) {
  const galleryTypes = `
export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryItem[];
}
`;

  content = content.replace('export interface VideoItem', galleryTypes + 'export interface VideoItem');
  
  if (content.includes('Quote?: { variants?: { WedBlissQuote1?: QuoteData } };')) {
    content = content.replace(
      'Quote?: { variants?: { WedBlissQuote1?: QuoteData } };',
      'Quote?: { variants?: { WedBlissQuote1?: QuoteData } };\n        Gallery?: { variants?: { WedBlissGallery1?: GalleryData } };'
    );
  }
  
  fs.writeFileSync(typesPath, content);
  console.log('Types updated');
} else {
  console.log('Types already have GalleryData');
}
