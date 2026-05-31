/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  openContactModal: (service?: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, openContactModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <a id="nav-brand" href="#home" className="flex flex-col select-none">
            <span className="font-sans text-xl font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Bilal Ahmad
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#C5A880] uppercase -mt-1 font-medium">
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
                className="font-sans text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-[#C5A880] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* UTILS & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              id="theme-toggler-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-800 dark:text-zinc-200"
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-zinc-700" />}
            </button>

            {/* Quick Consultation CTA */}
            <button
              id="nav-cta-btn"
              onClick={() => openContactModal()}
              className="font-sans text-xs uppercase tracking-wider font-semibold bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black px-5 py-3 rounded-full transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
            >
              Get Started <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-theme-toggler"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-800 dark:text-zinc-300"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
            <button
              id="mobile-menu-toggler"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-white"
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
            className="md:hidden bg-white dark:bg-black border-b border-gray-100 dark:border-zinc-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition-colors"
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
                  className="w-full text-center font-sans text-xs uppercase tracking-wider font-semibold bg-zinc-900 dark:bg-white text-white dark:text-black py-4.5 rounded-full transition-all block focus:outline-none"
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
