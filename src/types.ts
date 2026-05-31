/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DesignCategory = 'all' | 'websites' | 'business-cards' | 'invitations' | 'greetings' | 'custom';

export interface PortfolioItem {
  id: string;
  title: string;
  category: DesignCategory;
  categoryLabel: string;
  image: string;
  description: string;
  details: string[];
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  buttonText: string;
  badge?: string;
}

export interface BusinessCardShowcaseItem {
  id: string;
  title: string;
  role: string;
  description: string;
  frontTextList: string[];
  backTextList: string[];
  colors: {
    bgFront: string;
    bgBack: string;
    textFront: string;
    textBack: string;
    accent: string;
    bgImageFront?: string;
    bgImageBack?: string;
  };
  details: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  tag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  popular: boolean;
  buttonText: string;
}

export interface DesignRequestFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  description: string;
  referenceUrl: string;
}
