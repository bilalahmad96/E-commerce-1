/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ArrowUpRight, MessageSquare, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem, DesignCategory } from '../types';
import BlurredImage from './BlurredImage';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: { label: string; value: DesignCategory }[] = [
    { label: 'All Designs', value: 'all' },
    { label: 'Websites', value: 'websites' },
    { label: 'Business Cards', value: 'business-cards' },
    { label: 'Invitations', value: 'invitations' },
    { label: 'Greetings', value: 'greetings' },
    { label: 'Custom Designs', value: 'custom' },
  ];

  // Filtering Logic
  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const handleWhatsAppEnquiry = (projectTitle: string) => {
    const text = encodeURIComponent(`Hello Bilal Ahmad, I am interested in your design: "${projectTitle}". I would like to get more details.`);
    window.open(`https://wa.me/919119527287?text=${text}`, '_blank');
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-white dark:bg-black transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              Design Gallery
            </span>
            <h2 id="portfolio-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              My Design Collection
            </h2>
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
            Click on any model preview to open the high-fidelity detailed showcase, feature lists, and place custom design inquiries.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div id="portfolio-filters" className="flex flex-wrap gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              id={`filter-tab-${cat.value}`}
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wide font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-black shadow-md'
                  : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Creative Grid */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                id={`portfolio-item-${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-neutral-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80 aspect-[1.25] shadow-xs hover:shadow-xl transition-all"
              >
                {/* Thumbnail Image */}
                <BlurredImage
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Elegant overlay panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold bg-[#C5A880] text-black">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-sans font-bold text-white text-base leading-tight flex items-center gap-2">
                      {item.title} <ZoomIn size={14} className="text-zinc-400" />
                    </h3>
                    <p className="font-sans text-zinc-300 text-xs lines-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom flat bar backup metadata for accessibility when hover is not active (mobile friendliness) */}
                <div className="md:hidden p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                  <div>
                    <h4 className="font-sans font-semibold text-zinc-900 dark:text-white text-xs">{item.title}</h4>
                    <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase mt-0.5">{item.categoryLabel}</p>
                  </div>
                  <Plus size={16} className="text-[#C5A880]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="portfolio-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              {/* Outer clicking listener to close */}
              <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

              <motion.div
                id="lightbox-container"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative z-10 border border-zinc-100 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-12"
              >
                {/* Close Button absolute */}
                <button
                  id="btn-lightbox-close"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-40 p-2.5 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-colors text-zinc-800 dark:text-white"
                >
                  <X size={18} />
                </button>

                {/* Image Section (cols: 7) */}
                <div className="md:col-span-7 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center min-h-[250px] md:min-h-[480px] p-4 relative group overflow-hidden">
                  <BlurredImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-xl max-h-[50vh] md:max-h-[70vh] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Info Text Content Section (cols: 5) */}
                <div className="md:col-span-5 p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[90vh] bg-white dark:bg-zinc-950">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold bg-[#C5A880]/15 text-[#8A6A40] dark:bg-[#C5A880]/10 dark:text-rose-300">
                        {selectedProject.categoryLabel}
                      </span>
                      <h3 className="font-sans font-bold text-2xl text-zinc-900 dark:text-white leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Metadata specs */}
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 space-y-1.5">
                      {selectedProject.details.map((dt) => (
                        <div key={dt} className="flex justify-between border-b border-zinc-200/40 dark:border-zinc-800/50 pb-1.5 last:border-0 last:pb-0">
                          <span>{dt.split(':')[0]}:</span>
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">{dt.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>

                    {/* High values Bullet Features */}
                    <div className="space-y-2.5">
                      <h4 className="font-sans font-bold text-xs text-zinc-900 dark:text-white uppercase tracking-wider">Features Included:</h4>
                      <ul className="space-y-1.5">
                        {selectedProject.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Section */}
                  <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      id="btn-lightbox-whatsapp"
                      onClick={() => handleWhatsAppEnquiry(selectedProject.title)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black rounded-xl font-sans text-xs uppercase tracking-wide font-bold transition-all shadow-md focus:outline-none"
                    >
                      <MessageSquare size={14} /> Send WhatsApp Enquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}
