/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, ServiceItem, BusinessCardShowcaseItem, TestimonialItem, FAQItem, PricingPlan } from './types';

// Paths to the high-quality assets generated
export const IMAGE_ASSETS = {
  webHero: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
  businessCard: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1000&q=80',
  invitation: 'https://images.unsplash.com/photo-1546190255-451a91afc548?auto=format&fit=crop&w=1000&q=80',
  greeting: 'https://images.unsplash.com/photo-1522836924445-4478bdeb860c?auto=format&fit=crop&w=1000&q=80',
  avatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  avatar3: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  customFallback: 'https://images.unsplash.com/photo-1541462608141-27b297b15525?auto=format&fit=crop&w=800&q=80', // elegant design canvas
  brandingFallback: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80' // premium branding
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    subtitle: '🌐 Professional Web Experiences',
    icon: 'Globe',
    description: 'Bespoke website designs that align with your brand, captivate audiences, and convert visitors into loyal clients.',
    features: [
      'Business Websites',
      'Portfolio Websites',
      'Event & RSVP Websites',
      'Personal Portfolios',
      'High-Conversion Landing Pages',
      '100% Responsive & Mobile Friendly'
    ],
    buttonText: 'Get Website',
    badge: 'Popular'
  },
  {
    id: 'business-cards',
    title: 'Business Card Design',
    subtitle: '💳 Luxurious Business ID',
    icon: 'CreditCard',
    description: 'Make a stunning first impression with premium designer business cards inspired by leading creative agencies.',
    features: [
      'Modern, Minimalist Layouts',
      'Integrated Scan-to-Action QR Codes',
      'Custom Brand Typography',
      'Verified Print-Ready PDF Files',
      'Front & Back Designs Included'
    ],
    buttonText: 'Get Business Card'
  },
  {
    id: 'invitation-cards',
    title: 'Invitation Card Design',
    subtitle: '🎉 Elegant Event Invites',
    icon: 'Sparkles',
    description: 'Exquisite digital and print invitations tailored for your precious milestones and celebration events.',
    features: [
      'Bespoke Wedding Cards',
      'Birthday Celebration Cards',
      'Corporate & Social Events',
      'High-Quality Digital invitations',
      'Custom Illustrations & Calligraphy'
    ],
    buttonText: 'Get Invitation Design'
  },
  {
    id: 'greeting-cards',
    title: 'Greeting Card Design',
    subtitle: '🎁 Heartfelt Custom Greetings',
    icon: 'Gift',
    description: 'Charming, custom greeting cards designed to express warm sentiments with artful modern layouts.',
    features: [
      'Birthday & Anniversary greetings',
      'Holiday & Festival wishes',
      'Custom Personalized messages',
      'Ready-to-Print or Shareable Social formats',
      'Elegant watercolor and modern designs'
    ],
    buttonText: 'Get Greeting Card'
  },
  {
    id: 'custom-designs',
    title: 'Custom Design Services',
    subtitle: '✨ Bespoke Digital Art',
    icon: 'Layers',
    description: 'All-in-one graphic design solutions to fulfill your creative marketing or personal branding requirements.',
    features: [
      'Luxury Brand Logos',
      'Engaging Social Media Posts',
      'Promo Posters & Flyers',
      'Corporate Banners & Cover art',
      'Professional Certificates',
      'Personalized Custom Graphic projects'
    ],
    buttonText: 'Request Custom Design',
    badge: 'Creative'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Aethelgard Creative Agency Website',
    category: 'websites',
    categoryLabel: 'Website Design',
    image: IMAGE_ASSETS.webHero,
    description: 'A luxurious interactive agency website built for a premium design consultancy.',
    details: [
      'Role: Lead Web Designer',
      'Timeline: 3 weeks',
      'Client: Aethelgard & Co.',
      'Core Goal: Elevate luxury digital presence'
    ],
    features: [
      'Immersive dark/light dual theme presets',
      'Custom horizontal scroll gallery showcases',
      'Sleek modern typography scale (Space Grotesk + Inter)',
      'Subtle page transitions & high-fidelity floating shadows',
      'High SEO ranking index and fluid layout'
    ]
  },
  {
    id: 'p2',
    title: 'Minimalist Linen Business Card Suite',
    category: 'business-cards',
    categoryLabel: 'Business Card',
    image: IMAGE_ASSETS.businessCard,
    description: 'A premium minimalist corporate card mockup styled with clean geometric layout & linen paper texture.',
    details: [
      'Role: Digital Brand Designer',
      'Timeline: 4 days',
      'Client: Studio Novum Co.',
      'Core Goal: High tactile premium business cards'
    ],
    features: [
      'Custom scan QR technology link generator',
      'Premium paper stock selection guidelines',
      'Sophisticated typographic layout with extreme negative space',
      'Print-ready high-dpi PDF formats',
      'Front/Back design balancing serif & geometric elements'
    ]
  },
  {
    id: 'p3',
    title: 'Verdant Gold Wedding Invitation Suite',
    category: 'invitations',
    categoryLabel: 'Invitation Cards',
    image: IMAGE_ASSETS.invitation,
    description: 'Beautiful digital & print wedding card featuring sophisticated gold serif font, ivory paper, and floral leaf shadow.',
    details: [
      'Role: Graphic Artisan',
      'Timeline: 5 days',
      'Client: Elena & Alexander',
      'Core Goal: Romantic and classy wedding visual identity'
    ],
    features: [
      'Exquisite, organic leaf trace layout patterns',
      'Gold foil print-layer output configuration',
      'Integrated digital RSVP link support',
      'Curated typography hierarchy',
      'Interactive digital invitation web prototype'
    ]
  },
  {
    id: 'p4',
    title: 'Aris & Aura Creative Greeting Set',
    category: 'greetings',
    categoryLabel: 'Greeting Cards',
    image: IMAGE_ASSETS.greeting,
    description: 'Artistic greetings highlighting beautiful brush stroke palettes, sleek layouts, and textured premium elements.',
    details: [
      'Role: Digital Artist',
      'Timeline: 3 days',
      'Client: Aris Boutique',
      'Core Goal: Celebrate anniversary milestones with artisan texture'
    ],
    features: [
      'Textured cotton paper look simulation',
      'Warm golden overlay lighting and shadows',
      'Personalized message containers',
      'Digital direct-share size options (Instagram, WhatsApp story)',
      'High-resolution physical print options'
    ]
  },
  {
    id: 'p5',
    title: 'Luxury Boutique Brand Landing Page',
    category: 'websites',
    categoryLabel: 'Website Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'A high-converting minimalist landing page for a bespoke luxury fashion accessory brand.',
    details: [
      'Role: UX/UI Designer',
      'Timeline: 1 week',
      'Client: Maison De Luxe',
      'Core Goal: Generate warm digital sales leads'
    ],
    features: [
      'Responsive interactive product detail slots',
      'Seamless checkout click triggers',
      'Integrated responsive custom media slider',
      'Subtle parallax soft scroll effects',
      'Optimized lightweight asset load time'
    ]
  },
  {
    id: 'p6',
    title: 'Lumina Cinema Studio Iconography',
    category: 'custom',
    categoryLabel: 'Custom Designs',
    image: IMAGE_ASSETS.customFallback,
    description: 'Full corporate design kit complete with modern logo mark, poster frames, and certificates.',
    details: [
      'Role: Visual Brand Architect',
      'Timeline: 8 days',
      'Client: Lumina Film Studios',
      'Core Goal: Refresh cinema visual language'
    ],
    features: [
      'Vivid, sleek high-contrast logo vector',
      'Custom typography guidelines manual',
      'Ready to edit social post templates',
      'Digital printable certificate of appreciation',
      'Creative geometric posters package'
    ]
  }
];

export const BUSINESS_CARDS_SHOWCASE: BusinessCardShowcaseItem[] = [
  {
    id: 'card-arc-nova',
    title: 'Arc Nova Signature Card',
    role: 'Lead Creator & Director',
    description: 'The ultimate studio flagship card. A pristine high-concept ivory canvas featuring custom gold geometry, embedded logo, and elegant typography.',
    frontTextList: ['ARC NOVA', 'Arc Nova Labs', 'Creative Director & Founder'],
    backTextList: ['WWW.ARCNOVADESIGN.IN', '+91 91195 27287', '@arcnova.studios', 'Mumbai, India'],
    colors: {
      bgFront: 'bg-[#FAFAF9]',
      bgBack: 'bg-[#FAF9F5]',
      textFront: 'text-zinc-900',
      textBack: 'text-zinc-800',
      accent: '#D4AF37',
      bgImageFront: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=650&q=85',
      bgImageBack: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=650&q=85'
    },
    details: 'Luxury minimalist card featuring metallic gold fonts on ivory and white sand matte surfaces.'
  },
  {
    id: 'card-photo',
    title: 'Photography Studio Card',
    role: 'Creative Photographer',
    description: 'Designed for high-fashion and organic street photographers. Highlighted by soft pastel rose pink cards and clean typography.',
    frontTextList: ['ARC_NOVA_STUDIOS', 'Arc Nova Photo', 'Creative Director & Art Lead'],
    backTextList: ['WWW.ARCNOVADESIGN.IN', '+91 91195 27287', 'hello@arcnovadesign.in', 'Mumbai, India'],
    colors: {
      bgFront: 'bg-[#FDF6F5]',
      bgBack: 'bg-[#1a1a1a]',
      textFront: 'text-[#2D1B18]',
      textBack: 'text-[#EEEEEE]',
      accent: '#FFB2A6',
      bgImageFront: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=650&q=85',
      bgImageBack: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=650&q=85'
    },
    details: 'Elegant pastel pink card with rich charcoal branding highlights. Fits premium aesthetic creators.'
  },
  {
    id: 'card-film',
    title: 'Film Studio Card',
    role: 'Cinematographer & Director',
    description: 'Bold, brutalist minimalist card inspired by classic film reel text formatting and premium creative studios.',
    frontTextList: ['ARC NOVA FILM CO.', 'ARC NOVA MOTION', 'DIRECTOR OF PHOTOGRAPHY'],
    backTextList: ['WWW.ARCNOMOTION.CO', 'STUDIO_NOVA@INSTAGRAM', 'NEW DELHI, INDIA'],
    colors: {
      bgFront: 'bg-[#121212]',
      bgBack: 'bg-[#f4f3ef]',
      textFront: 'text-[#E5E5E5]',
      textBack: 'text-[#1a1a1a]',
      accent: '#E6C64C',
      bgImageFront: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=650&q=85',
      bgImageBack: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=650&q=85'
    },
    details: 'High durability high-contrast aesthetic setup. Perfect for producers, creative artists, and cinematographers.'
  },
  {
    id: 'card-fashion',
    title: 'Fashion House Card',
    role: 'Luxury Apparel Designer',
    description: 'Luxury aesthetic card focusing on clean typography matching high-fashion couture collections.',
    frontTextList: ['ARC NOVA COUTURE', 'Arc Nova Atelier', 'Senior Couture Designer'],
    backTextList: ['WWW.ARCNOVACOUTURE.COM', 'COUTURE@ARCNOVA.COM', 'NEW YORK - PARIS - INDIA'],
    colors: {
      bgFront: 'bg-[#F9F6F0]',
      bgBack: 'bg-[#2E3532]',
      textFront: 'text-[#1E2522]',
      textBack: 'text-[#F9F6F0]',
      accent: '#C5A880',
      bgImageFront: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=650&q=85',
      bgImageBack: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=650&q=85'
    },
    details: 'Luxury minimalist card featuring gold tone fonts on ivory and forest green matte canvas bases.'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'wc1',
    title: 'Professional Designs',
    description: 'Meticulously crafted pixel-perfect layouts designed from the ground up to establish elite authority.'
  },
  {
    id: 'wc2',
    title: 'Affordable Pricing',
    description: 'Premium, designer-agency standard output accessible for emerging startups & local brands.'
  },
  {
    id: 'wc3',
    title: 'Fast & Timely Delivery',
    description: 'Rigorous project workflows guaranteeing prompt deliverables without sacrificing quality.'
  },
  {
    id: 'wc4',
    title: 'Unlimited Creativity',
    description: 'We push visual limits on websites, luxury wedding invitations, and sophisticated business cards.'
  },
  {
    id: 'wc5',
    title: 'Mobile Friendly Websites',
    description: 'Your sites perform flawlessly across mobile devices, tablets, and high-DPI desktop screens.'
  },
  {
    id: 'wc6',
    title: 'Direct Communication',
    description: 'Speak directly with Bilal throughout your branding journey. Clear, feedback-driven process.'
  },
  {
    id: 'wc7',
    title: 'Customized Solutions',
    description: 'No boring rigid copy-paste templates. Everything is tailored precisely to your brand guidelines.'
  },
  {
    id: 'wc8',
    title: 'Customer Satisfaction',
    description: 'Every deliverable includes curated revisions sequence to ensure you are 100% thrilled.'
  }
];

export const CLIENT_PROCESS = [
  {
    step: 'Step 1',
    title: 'Contact Me',
    description: 'Connect on WhatsApp or fill the Request Form outlining your project goals.',
    color: 'from-pink-100 to-rose-100',
    icon: 'MessageSquareText'
  },
  {
    step: 'Step 2',
    title: 'Share Requirements',
    description: 'Share design styles you love, references, branding elements, and contents.',
    color: 'from-beige-100 to-orange-500',
    icon: 'FileText'
  },
  {
    step: 'Step 3',
    title: 'Design Creation',
    description: 'I draft highly tailored premium mockups and share them with you for direct feedback.',
    color: 'from-blue-100 to-sky-100',
    icon: 'Palette'
  },
  {
    step: 'Step 4',
    title: 'Final Delivery',
    description: 'Approved files are prepared (print-ready high-dpi files, active live website deployment).',
    color: 'from-emerald-100 to-teal-100',
    icon: 'CheckCircle2'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ananya Sharma',
    role: 'Founder, Lumina Boutique',
    rating: 5,
    text: 'Bilal designed an stunning custom business website and matching greeting invitations. Truly fast execution, direct communication, and beautiful pastel aesthetic. Strongly recommended!',
    avatar: IMAGE_ASSETS.avatar1,
    tag: 'Web Design'
  },
  {
    id: 't2',
    name: 'Rohan Malhotra',
    role: 'Lead Director, Cinema Kraft',
    rating: 5,
    text: 'Our movie studio business cards are a talking point at every film meetup. Bilal delivers actual agency-quality luxury minimalism on raw linen paper. Exceptionally professional designer.',
    avatar: IMAGE_ASSETS.avatar2,
    tag: 'Business Cards'
  },
  {
    id: 't3',
    name: 'Priyanka Sen',
    role: 'Event Director, Blissful Ties',
    rating: 5,
    text: 'Outstanding wedding and digital invitation layouts! The gold details and leafy lighting look amazing. Revisions were prompt, and our guests absolutely loved the layout.',
    avatar: IMAGE_ASSETS.avatar3,
    tag: 'Invitations'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'price-starter',
    name: 'Starter Design Set',
    price: '₹4,999',
    billing: 'Per design project',
    description: 'Perfect for local brands and emerging creators looking to stand out with beautiful basic assets.',
    features: [
      '1 Premium Business Card Design',
      'Print-ready high DPI vector files',
      'Up to 3 revisions rounds',
      'Scan-to-Action QR Code integration',
      'Custom fonts & color palette pairing'
    ],
    popular: false,
    buttonText: 'Order Starter Plan'
  },
  {
    id: 'price-professional',
    name: 'Professional Web & Identity',
    price: '₹14,999',
    billing: 'Most Popular',
    description: 'Complete digital website design with essential matching visual templates for standard setups.',
    features: [
      'Custom single-page responsive Website',
      'Premium Business Card layout (Front + Back)',
      '1 Invitation OR Greeting Card layout',
      'Up to 5 revision iterations',
      'Integrated Contact Form + direct WhatsApp link',
      'Domain integration support'
    ],
    popular: true,
    buttonText: 'Order Professional Plan'
  },
  {
    id: 'price-premium',
    name: 'Elite Studio Pack',
    price: '₹29,999',
    billing: 'Complete Branding package',
    description: 'Bespoke, continuous creative solution ensuring ultimate premium design authority across all mediums.',
    features: [
      'Multi-page luxury responsive Website design',
      '3 Independent Business Card layout versions',
      '2 Custom Event Invitations or Greetings',
      'Full brand Social Media kit (5 post layouts)',
      'Luxury Brand Logo design with guidelines',
      'Unlimited feedback revisions & priority care'
    ],
    popular: false,
    buttonText: 'Order Elite Pack'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a project take to complete?',
    answer: 'Standard business card and greeting card layouts are finalized within 3 to 5 days. Premium responsive websites and complete boutique branding suites take about 1 to 3 weeks depending on feedback loops and feature lists.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide revisions for the designs?',
    answer: 'Absolutely! User satisfaction is key. Every design set comes with standard design reviews (ranging from 3 rounds to unlimited depending on the selected package). We fine-tune spacing, colors, and font layout until it matches your dream.'
  },
  {
    id: 'faq-3',
    question: 'Can I request custom design formats not listed in packages?',
    answer: 'Yes! Simply fill our Custom Design Request Form with details about your requirements (ranging from Certificates, custom flyers, to premium posters) and the preferred budget range. We will formulate a tailored package for your brand.'
  },
  {
    id: 'faq-4',
    question: 'How do the payments and work stages function?',
    answer: 'Usually, projects operate on a standard 50% initial design setup deposit to begin the mockup creation process. Once mockups are approved, and the assets are ready/website goes live, the outstanding 50% is cleared prior to delivering final source files.'
  },
  {
    id: 'faq-5',
    question: 'Will my website design be responsive and edit-friendly?',
    answer: 'Yes, every digital website built is rigorously tested on real mobile, tablet, and widescreen setups. I ensure clean structures and optimal performance. For easy management, I also include standard user guidelines.'
  }
];
