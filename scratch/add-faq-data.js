const fs = require('fs');
const file = 'd:\\wedding-planner\\data\\templates.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.categories.WedBliss.sections.Faq = {
  variants: {
    WedBlissFaq1: {
      subtitle: 'FAQ',
      title1: 'Frequently',
      title2: 'Asked Questions',
      description: "Below you'll find answers to some of the most frequently asked questions. If you have any other questions, feel free to contact us.",
      image: '/about/faq.webp',
      faqs: [
        { id: 'faq1', question: 'What can WedBliss do for an Event?', answer: 'WedBliss specializes in the planning of corporate, social and non-profit events. This includes birthday, celebration parties, employee events, conferences or meetings, weddings, bridal showers and more! We have a creative approach to bring your dreams to a reality.' },
        { id: 'faq2', question: 'How far will you travel for an Event?', answer: 'We are available for travel worldwide depending on the project scope and schedule.' },
        { id: 'faq3', question: 'How Can I Contact You?', answer: 'You can reach us through our contact page, by phone, or by email.' },
        { id: 'faq4', question: 'What happens if an Event is cancelled?', answer: 'We have a detailed cancellation policy outlined in our contract, designed to protect both parties.' },
        { id: 'faq5', question: 'How early should you start planning an event?', answer: 'We recommend starting at least 6-12 months in advance for large events.' },
        { id: 'faq6', question: 'Do you charge separately for your various event services?', answer: 'We offer customized packages based on your specific needs.' },
        { id: 'faq7', question: 'If someone wants to get started planning an event, what should they do?', answer: 'Simply fill out our inquiry form or give us a call to schedule a consultation.' }
      ]
    }
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added FAQ data');
