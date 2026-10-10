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

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
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

export interface AboutPageParagraph {
  id: string;
  text: string;
}

export interface AboutPageIntroData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary: string;
  imageSecondaryAlt: string;
  experienceValue: string;
  experienceLabel: string;
  paragraphs: AboutPageParagraph[];
}

export interface AboutPageIntroProps {
  data?: AboutPageIntroData;
}

export interface AboutProgressCircleProps {
  item: AboutProgressItem;
  isVisible: boolean;
}

export interface TeamSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  socialLinks: TeamSocialLink[];
}

export interface TeamData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  members: TeamMember[];
}

export interface TeamSectionProps {
  data?: TeamData;
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

export interface ServicesGridData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  linkText: string;
  services: ServiceItem[];
}

export interface ServicesGridProps {
  data?: ServicesGridData;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailText {
  id: string;
  text: string;
}

export interface ServiceDetailPageData {
  id: string;
  breadcrumbTitle: string;
  breadcrumbLabel: string;
  overviewLabel: string;
  title1: string;
  title2: string;
  imageMain: string;
  imageMainAlt: string;
  overviewText: ServiceDetailText[];
  featuresLabel: string;
  featuresTitle1: string;
  featuresTitle2: string;
  features: ServiceDetailFeature[];
  benefitsLabel: string;
  benefitsTitle1: string;
  benefitsTitle2: string;
  benefitsImage: string;
  benefitsImageAlt: string;
  benefits: ServiceDetailText[];
}

export interface ServiceDetailContentProps {
  data?: ServiceDetailPageData;
}

export interface LegacyServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface LegacyServiceDetailProcessStep {
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
  features: LegacyServiceDetailFeature[];
  overviewTitle: string;
  overviewText: string[];
  overviewImage: string;
  processTitle: string;
  processSteps: LegacyServiceDetailProcessStep[];
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

export interface TestimonialGridData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialGridProps {
  data?: TestimonialGridData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
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
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: string[];
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
  showButton: boolean;
  imageMain: string;
  imageAlt: string;
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface ContactHighlightItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    highlights: ContactHighlightItem[];
  };
  form: {
    eyebrow: string;
    helperText: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    privacyText: string;
    successMessage: string;
    servicesList: ContactServiceOption[];
  };
  contactPanel: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
    items: ContactInfoItem[];
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactSectionProps {
  data?: ContactData;
}

export interface EnquiryFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EnquirySelectOption {
  id: string;
  label: string;
  value: string;
}

export interface EnquiryData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    highlights: EnquiryFeatureItem[];
  };
  vision: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
  };
  priority: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    features: EnquiryFeatureItem[];
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    investmentPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    privacyText: string;
    successMessage: string;
    servicesList: EnquirySelectOption[];
    investmentTypes: EnquirySelectOption[];
  };
}

export interface EnquirySectionProps {
  data?: EnquiryData;
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
  pageBlogs: BlogItem[];
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

export interface BlogDetailTextSection {
  id: string;
  title: string;
  text: string;
}

export interface BlogDetailBenefit {
  id: string;
  title: string;
  description: string;
}

export interface BlogDetailTip {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface BlogDetailRecentPost {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  url: string;
}

export interface BlogDetailCategory {
  id: string;
  label: string;
  url: string;
}

export interface BlogDetailPageData {
  id: string;
  breadcrumbTitle: string;
  breadcrumbLabel: string;
  category: string;
  title1: string;
  title2: string;
  description: string;
  authorLabel: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  introText: string;
  articleSections: BlogDetailTextSection[];
  quote: string;
  benefitsTitle: string;
  benefits: BlogDetailBenefit[];
  tipsTitle: string;
  tips: BlogDetailTip[];
  closingText: string;
  recentPostsTitle: string;
  recentPosts: BlogDetailRecentPost[];
  categoriesTitle: string;
  categories: BlogDetailCategory[];
  sidebarCta: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface BlogDetailContentProps {
  data?: BlogDetailPageData;
}

export interface StockBrokerTemplateData {
  common: {
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    enquiryBreadcrumb?: BreadcrumbData;
    teamBreadcrumb?: BreadcrumbData;
    testimonialsBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    StockBroker: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { StockBrokerTopBar1?: TopBarData } };
        Header?: { variants?: { StockBrokerHeader1?: HeaderData } };
        Hero?: { variants?: { StockBrokerHero1?: HeroData } };
        AboutUs?: { variants?: { StockBrokerAboutUs1?: AboutUsData } };
        AboutPageIntro?: { variants?: { StockBrokerAboutPageIntro1?: AboutPageIntroData } };
        Team?: { variants?: { StockBrokerTeam1?: TeamData } };
        Services?: { variants?: { StockBrokerServices1?: ServicesData } };
        ServicesGrid?: { variants?: { StockBrokerServicesGrid1?: ServicesGridData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        ServiceDetails?: { variants?: { [key: string]: ServiceDetailPageData } };
        Process?: { variants?: { StockBrokerProcess1?: ProcessData } };
        Testimonials?: { variants?: { StockBrokerTestimonials1?: TestimonialsData } };
        TestimonialGrid?: { variants?: { StockBrokerTestimonialGrid1?: TestimonialGridData } };
        Cta?: { variants?: { StockBrokerCta1?: CtaData } };
        Blogs?: { variants?: { StockBrokerBlogs1?: BlogsData } };
        BlogDetails?: { variants?: { [key: string]: BlogDetailPageData } };
        whyChooseUs?: { variants?: { StockBrokerWhyChooseUs1?: WhyChooseUsData; StockBrokerAboutWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { StockBrokerContact1?: ContactData } };
        enquiry?: { variants?: { StockBrokerEnquiry1?: EnquiryData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
