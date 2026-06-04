/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
  openContactModal: (service?: string) => void;
}

export default function Navbar({ theme, setTheme, openContactModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    { id: 'minimalist', name: 'Sand Gold Minimalist', icon: '🍦' },
    { id: 'dark', name: 'Onyx Stealth Dark', icon: '🕶️' },
    { id: 'cosmic', name: 'Midnight Nebula Glow', icon: '🌌' },
    { id: 'matrix', name: 'Acid Cyber-Matrix', icon: '🟢' },
    { id: 'vaporwave', name: 'Sunset Synthwave', icon: '🔮' },
  ];

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Banners', href: '#banners-showcase' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Exactly compensates for sticky navbar height + aesthetic buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update hash in address bar without scrolling jump
      window.history.pushState(null, '', href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-creative-bg-1/80 backdrop-blur-md border-b border-creative-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <a 
            id="nav-brand" 
            href="#home" 
            onClick={(e) => handleScrollToSection(e, '#home')}
            className="flex flex-col select-none"
          >
            <span className="arc-nova-logo text-lg md:text-2xl">
              Arc Nova
            </span>
            <span className="font-mono text-[8px] md:text-[9px] tracking-widest text-creative-accent uppercase -mt-0.5 font-semibold">
              Creative Design Studio
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                id={`nav-${item.label.toLowerCase()}`}
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="font-sans text-sm font-medium text-creative-muted hover:text-creative-text transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-creative-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* UTILS & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector Cluster */}
            <div className="flex items-center gap-1.5 p-1 bg-creative-bg-2 border border-creative-border rounded-full shadow-inner mr-2">
              {themeOptions.map((opt) => (
                <button
                  key={opt.id}
                  id={`theme-btn-${opt.id}`}
                  onClick={() => setTheme(opt.id)}
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all cursor-pointer ${
                    theme === opt.id 
                      ? 'scale-110 shadow-md bg-creative-bg-1 border border-creative-accent' 
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                  title={opt.name}
                >
                  <span>{opt.icon}</span>
                  {theme === opt.id && (
                    <motion.span
                      layoutId="activeThemeDotOutline"
                      className="absolute inset-0 rounded-full border border-creative-accent pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Quick Consultation CTA */}
            <button
              id="nav-cta-btn"
              onClick={() => openContactModal()}
              className="font-sans text-xs uppercase tracking-wider font-semibold bg-creative-text text-creative-bg-1 border border-creative-border hover:opacity-90 px-5 py-3 rounded-full transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
            >
              Get Started <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="flex gap-1 p-0.5 bg-creative-bg-2 border border-creative-border rounded-full shadow-inner mr-1.5 overflow-x-auto max-w-[130px]">
              {themeOptions.map((opt) => (
                <button
                  key={opt.id}
                  id={`mobile-theme-btn-${opt.id}`}
                  onClick={() => setTheme(opt.id)}
                  className={`relative w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all cursor-pointer ${
                    theme === opt.id 
                      ? 'scale-110 bg-creative-bg-1 border border-creative-accent shadow-xs' 
                      : 'opacity-50'
                  }`}
                  title={opt.name}
                >
                  <span>{opt.icon}</span>
                </button>
              ))}
            </div>
            
            <button
              id="mobile-menu-toggler"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full hover:bg-creative-bg-2 transition-colors text-creative-text"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-creative-bg-1 border-b border-creative-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-creative-muted hover:bg-creative-bg-2 hover:text-creative-text transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-nav-cta"
                  onClick={() => {
                    setIsOpen(false);
                    openContactModal();
                  }}
                  className="w-full text-center font-sans text-xs uppercase tracking-wider font-semibold bg-creative-text text-creative-bg-1 py-4.5 rounded-full transition-all block focus:outline-none"
                >
                  Start My Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
