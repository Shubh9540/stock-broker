export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  contactInfoLeft: HeaderContactItem[];
  contactInfoRight: HeaderContactItem[];
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface HeroButtonData {
  text: string;
  url: string;
  icon: string;
}

export interface HeroSlide {
  id: string;
  number: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  titleLine3: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: HeroButtonData;
  secondaryButton?: HeroButtonData;
}

export interface HeroData {
  previousSlideLabel: string;
  nextSlideLabel: string;
  counterSeparator: string;
  autoplayDelay: number;
  slides: HeroSlide[];
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutProgressItem {
  id: string;
  percentage: number;
  label: string;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  label: string;
}

export interface AboutSupportData {
  icon: string;
  label: string;
  value: string;
  url: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary: string;
  imageSecondaryAlt: string;
  experienceValue: string;
  experienceLabel: string;
  progressItems: AboutProgressItem[];
  features: AboutFeatureItem[];
  button: { text: string; url: string };
  support: AboutSupportData;
}

export interface AboutUsSectionProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface AboutProgressCircleProps {
  item: AboutProgressItem;
  isVisible: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface ProcessItem {
  id: string;
  icon: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProcessData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  steps: ProcessItem[];
}

export interface ProcessSectionProps {
  data?: ProcessData;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  linkText: string;
  services: ServiceItem[];
}

export interface ServicesSectionProps {
  data?: ServicesData;
  hideButton?: boolean;
  isSlider?: boolean;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  features: ServiceDetailFeature[];
  overviewTitle: string;
  overviewText: string[];
  overviewImage: string;
  processTitle: string;
  processSteps: ServiceDetailProcessStep[];
  faqTitle: string;
  faqs: { id: string; question: string; answer: string }[];
  sidebar: {
    quoteForm: {
      title: string;
      description: string;
      buttonText: string;
      servicesList: string[];
    };
    servicesList: {
      title: string;
      services: { id: string; label: string; url: string }[];
    };
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  servicesTitle: string;
  contactTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
  legalLinks: { id: string; label: string; url: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  button: { text: string; url: string };
  imageMain: string;
  imageAlt: string;
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface ContactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
  mapUrl: string;
  image?: string;
  infoBoxes?: {
    icon: string;
    title: string;
    desc1: string;
    desc2: string;
  }[];
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}

export interface CtaData {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  button1: { text: string; url: string };
  button2: { text: string; url: string };
  image: string;
  imageAlt: string;
}

export interface CtaSectionProps {
  data?: CtaData;
}

export interface BlogItem {
  id: string;
  image: string;
  imageAlt?: string;
  date: string;
  category: string;
  title: string;
  description: string;
  url: string;
  content?: {
    intro: string;
    sections: {
      heading: string;
      text: string;
    }[];
  };
}

export interface BlogsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  readMoreText: string;
  loadMoreText: string;
  button: { text: string; url: string };
  blogs: BlogItem[];
  sidebarCta?: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface BlogsSectionProps {
  data?: BlogsData;
  isPage?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  icon: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  footerText: string;
  buttonText: string;
  buttonUrl: string;
  isPopular?: boolean;
}

export interface PricingData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  plans: PricingPlan[];
}


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


export interface QuoteFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface QuoteData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: QuoteFeature[];
  image: string;
  floatingBox: {
    icon: string;
    text1: string;
    text2: string;
  };
  form: {
    title: string;
    titleHighlight: string;
    description: string;
    budgets: string[];
    buttonText: string;
  };
}

export interface StockBrokerTemplateData {
  common: {
    aboutBreadcrumb?: any;
    servicesBreadcrumb?: any;
    contactBreadcrumb?: any;
    enquiryBreadcrumb?: any;
    Footer?: FooterData;
  };
  categories: {
    StockBroker: {
      templateComponents?: any;
      sections: {
        TopBar?: { variants?: { StockBrokerTopBar1?: TopBarData } };
        Header?: { variants?: { StockBrokerHeader1?: HeaderData } };
        Hero?: { variants?: { StockBrokerHero1?: HeroData } };
        AboutUs?: { variants?: { StockBrokerAboutUs1?: AboutUsData } };
        Services?: { variants?: { StockBrokerServices1?: ServicesData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        Process?: { variants?: { StockBrokerProcess1?: ProcessData } };
        Testimonials?: { variants?: { StockBrokerTestimonials1?: TestimonialsData } };
        Pricing?: { variants?: { StockBrokerPricing1?: PricingData } };
        Faq?: { variants?: { StockBrokerFaq1?: FaqData } };
        Cta?: { variants?: { StockBrokerCta1?: CtaData } };
        Blogs?: { variants?: { StockBrokerBlogs1?: BlogsData } };
        whyChooseUs?: { variants?: { StockBrokerWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { StockBrokerContact1?: ContactData } };
        Quote?: { variants?: { StockBrokerQuote1?: QuoteData } };
        enquiry?: { variants?: { StockBrokerEnquiry1?: EnquiryData } };
      };
    };
  };
}
