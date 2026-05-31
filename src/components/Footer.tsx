/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Instagram, MessageSquare, Mail, Award } from 'lucide-react';

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-zinc-900">
          
          {/* Brand/Slogan Side (cols: 5) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex flex-col">
              <span className="font-sans text-xl font-bold uppercase tracking-widest text-white leading-none">
                Bilal Ahmad
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#C5A880] uppercase mt-1">
                Creative Design Studio
              </span>
            </a>
            <p className="font-sans text-xs text-zinc-500 max-w-sm leading-relaxed">
              Crafting premium high-conversion website templates, luxury tactile business cards, and bespoke celebration invitation assets designed to command ultimate offline and digital authority.
            </p>
          </div>

          {/* Quick Category Links (cols: 4) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-sans">
            <div className="space-y-3">
              <h4 className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2">
                <li><a id="footer-link-home" href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a id="footer-link-about" href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a id="footer-link-services" href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a id="footer-link-portfolio" href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-semibold">Deliverables</h4>
              <ul className="space-y-2">
                <li><a id="footer-link-pricing" href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a id="footer-link-faq" href="#faq" className="hover:text-white transition-colors">FAQs Check</a></li>
                <li><a id="footer-link-contact" href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li>
                  <a
                    id="footer-link-insta"
                    href="https://www.instagram.com/bilalahmad51_?igsh=MWh1NXYzYmtrNG4wOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    id="footer-link-wa"
                    href="https://wa.me/919119527287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Stamp/Top CTA (cols: 3) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4">
            <button
              id="btn-footer-totop"
              onClick={scrolltoTop}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-full text-white transition-colors shadow-md flex items-center justify-center self-start md:self-auto cursor-pointer"
              title="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
            <div className="text-left md:text-right space-y-1 font-mono text-[9px] text-zinc-650">
              <p>DESIGN REGION: INDIA</p>
              <p>STATUS: BOOKINGS OPEN</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] font-mono text-zinc-600 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>© {currentYear} Bilal Ahmad Design Studio. All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Design</span>
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
