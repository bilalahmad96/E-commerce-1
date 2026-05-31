/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare, ArrowUp, Send, Check } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BusinessCards from './components/BusinessCards';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import InstaTestimonials from './components/InstaTestimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [showWaHint, setShowWaHint] = useState<boolean>(true);

  // Initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Update dark mode class on HTML document
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // High conversion scroll and prefill handler
  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsAppFloatingClick = () => {
    const text = encodeURIComponent("Hello Bilal Ahmad, I would like to discuss a design project.");
    window.open(`https://wa.me/919119527287?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-[#C5A880]/30 antialiased overflow-x-hidden">
      
      {/* 1. INITIAL LOADING BANNER SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black"
          >
            <div className="space-y-4 text-center">
              {/* Premium abstract ring */}
              <motion.div
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-12 h-12 border-2 border-dashed border-[#C5A880] rounded-full mx-auto"
              />
              <div className="space-y-1">
                <h1 className="font-sans text-lg font-bold uppercase tracking-widest text-[#121212] dark:text-white">
                  Bilal Ahmad
                </h1>
                <p className="font-mono text-[9px] uppercase tracking-widest text-[#C5A880] font-semibold">
                  Creative Design Portfolio
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Layout Wrapper */}
      {!loading && (
        <motion.div
          id="app-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 2. NAVIGATION BAR */}
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            openContactModal={() => handleServiceSelect('General Design Inquiry')}
          />

          {/* 3. HERO CONTENT */}
          <Hero openContactModal={() => handleServiceSelect('General Design Inquiry')} />

          {/* 4. ABOUT INFORMATION SECTION */}
          <About />

          {/* 5. SERVICE GRID SECTIONS */}
          <Services onServiceSelect={handleServiceSelect} />

          {/* 6. PORTFOLIO SHOWCASE */}
          <Portfolio />

          {/* 7. BUSINESS CARD PERSPECTIVES SHOWCASE */}
          <BusinessCards onQuoteTrigger={() => handleServiceSelect('Custom Business Card')} />

          {/* 8. CLIENT WORK TIMELINE & ADVANTAGES */}
          <WhyChooseUs />

          {/* 9. PRICING SECTIONS */}
          <Pricing onPlanSelect={handleServiceSelect} />

          {/* 10. TESTIMONIALS & INSTAGRAM CAROUSEL slider */}
          <InstaTestimonials />

          {/* 11. CENTRAL REGISTRATION FORM */}
          <ContactForm
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />

          {/* 12. DESIGNER FOOTER */}
          <Footer />

          {/* 13. FLOATING WHATSAPP ACTION BUTTON widget */}
          <div
            id="floating-whatsapp-widget"
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 pointer-events-none"
          >
            {/* Pop-up Greeting bubble helper hint */}
            <AnimatePresence>
              {showWaHint && (
                <motion.div
                  initial={{ opacity: 0, y: 15, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="pointer-events-auto bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 max-w-[210px]"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <div className="text-left">
                    <p className="font-sans font-bold text-[10px] text-zinc-800 dark:text-zinc-200">Chat with Bilal</p>
                    <p className="font-sans text-[8.5px] text-zinc-400 mt-0.5">Online • Indian Standard Time</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowWaHint(false); }}
                    className="text-zinc-405 hover:text-zinc-800 font-bold ml-1 cursor-pointer text-[10px]"
                    title="Close message"
                  >
                    ×
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bouncing WhatsApp Main Controller Trigger */}
            <motion.button
              id="btn-whatsapp-floating"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsAppFloatingClick}
              className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl cursor-pointer relative z-40 animate-bounce-slow"
              title="Speak on WhatsApp"
            >
              <MessageSquare size={22} className="fill-white" />
            </motion.button>
          </div>

        </motion.div>
      )}

    </div>
  );
}
