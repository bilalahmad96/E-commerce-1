/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LogIn, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { IMAGE_ASSETS } from '../data';

interface HeroProps {
  openContactModal: (service?: string) => void;
}

export default function Hero({ openContactModal }: HeroProps) {
  // Beautiful prefilled WhatsApp query
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Bilal Ahmad, I would like to discuss a design project.");
    window.open(`https://wa.me/919119527287?text=${text}`, '_blank'); // Bilal's Indian phone formatted
  };

  const handleInstagramClick = () => {
    window.open(`https://www.instagram.com/bilalahmad51_?igsh=MWh1NXYzYmtrNG4wOQ==`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-creative-bg-1 via-creative-bg-2 to-creative-bg-3 text-creative-text transition-colors duration-300"
    >
      {/* Decorative artistic background vectors */}
      <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] rounded-full bg-creative-accent/5 dark:bg-creative-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-creative-accent-sec/5 blur-[150px] pointer-events-none" />
      
      {/* Premium Elegant Studio Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Typographical Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-creative-card border border-creative-border shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-creative-accent animate-ping" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-creative-muted font-semibold">
                Available for Elite Projects • India
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-creative-text leading-[1.08]"
            >
              <span className="arc-nova-logo text-3xl sm:text-4xl lg:text-5xl block mb-3">Arc Nova</span>
              Transforming Ideas <br />
              Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-creative-accent to-creative-accent-sec">Stunning</span> Digital Designs
            </motion.h1>

            <motion.p
              id="hero-subheading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-creative-muted max-w-xl leading-relaxed"
            >
              I help businesses, brands, and individuals create beautiful websites, business cards, invitation cards, greeting cards, and custom designs that leave a lasting impression.
            </motion.p>

            {/* CTA Blocks */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                id="hero-cta-whatsapp"
                onClick={handleWhatsAppClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-4.5 rounded-full bg-creative-text hover:opacity-90 text-creative-bg-1 font-semibold text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5"
              >
                📱 Contact on WhatsApp
              </button>

              <button
                id="hero-cta-insta"
                onClick={handleInstagramClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-4.5 rounded-full bg-creative-bg-2 border border-creative-border hover:bg-creative-bg-3 text-creative-text font-semibold text-sm tracking-wide transition-all shadow-xs hover:-translate-y-0.5"
              >
                📸 Follow on Instagram
              </button>

              <a
                id="hero-cta-portfolio"
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4.5 rounded-full text-creative-text hover:underline font-semibold text-sm transition-all"
              >
                💼 View Portfolio <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Quick trust stamps */}
            <motion.div
              id="hero-stamps"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-creative-border w-full max-w-lg"
            >
              <div>
                <span className="block text-xl font-bold text-creative-text">100%</span>
                <span className="block text-xs text-creative-muted font-mono tracking-wider uppercase mt-1">Satisfaction</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-creative-text">Fast</span>
                <span className="block text-xs text-creative-muted font-mono tracking-wider uppercase mt-1">Delivery</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-creative-text">Elite</span>
                <span className="block text-xs text-creative-muted font-mono tracking-wider uppercase mt-1">Aesthetic</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Interactive Mockups - Layers Showcase */}
          <div className="lg:col-span-5 relative h-[480px] sm:h-[550px] w-full mt-6 lg:mt-0 flex items-center justify-center">
            
            {/* Design Mockup 1: Website Screen */}
            <motion.div
              id="hero-layer-web"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ rotate: 0, scale: 1.03, y: -10, zIndex: 40 }}
              className="absolute w-[280px] sm:w-[350px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl dark:shadow-black/50 border border-zinc-100/50 dark:border-zinc-800 cursor-pointer top-4 left-4 z-20 transition-all p-2 bg-gradient-to-b from-zinc-50 to-white"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-mono text-zinc-400 ml-2">bilalahmad.design/portfolio</span>
              </div>
              <img
                src={IMAGE_ASSETS.webHero}
                alt="Website Portfolio Mockup"
                referrerPolicy="no-referrer"
                className="w-full h-[85%] object-cover rounded-lg"
              />
            </motion.div>

            {/* Design Mockup 2: Luxury Business Card */}
            <motion.div
              id="hero-layer-card"
              initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10, zIndex: 40 }}
              className="absolute w-[200px] sm:w-[260px] aspect-[1.58] rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-black/60 border border-zinc-100 dark:border-zinc-900 cursor-pointer bottom-16 right-4 sm:right-6 lg:-right-4 z-30 transition-all"
            >
              <img
                src={IMAGE_ASSETS.businessCard}
                alt="Business Card Mockup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Design Mockup 3: Invitation Suite */}
            <motion.div
              id="hero-layer-invitation"
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10, zIndex: 40 }}
              className="absolute w-[180px] sm:w-[220px] aspect-[1.4] rounded-xl overflow-hidden bg-white shadow-xl dark:shadow-black/40 border border-zinc-100 dark:border-zinc-800 cursor-pointer bottom-4 left-6 sm:left-12 z-10 transition-all"
            >
              <img
                src={IMAGE_ASSETS.invitation}
                alt="Wedding Invitation Mockup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Design Mockup 4: Premium Greetings (Compact float card) */}
            <motion.div
              id="hero-layer-greeting"
              initial={{ opacity: 0, scale: 0.8, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.1, y: -10, zIndex: 40 }}
              className="absolute w-[130px] sm:w-[170px] aspect-[1.1] rounded-xl overflow-hidden bg-white shadow-lg dark:shadow-black/40 border border-rose-50/50 dark:border-zinc-800 cursor-pointer top-12 right-12 z-25 transition-all"
            >
              <img
                src={IMAGE_ASSETS.greeting}
                alt="Creative Greetings Mockup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative organic leaf shadows container */}
            <div className="absolute inset-0 border border-dashed border-zinc-200/50 dark:border-zinc-800/50 rounded-full scale-95 pointer-events-none -z-1" />
          </div>

        </div>
      </div>
    </section>
  );
}
