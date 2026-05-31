/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Instagram, Heart, MessageCircle, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { TESTIMONIALS, IMAGE_ASSETS } from '../data';

export default function InstaTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Mock Premium Instagram Posts Grid for Bilal Ahmad
  const instaPosts = [
    {
      id: 'i1',
      image: IMAGE_ASSETS.webHero,
      caption: 'Latest agency design concept deployed. Minimal layout, clean grids, high contrast. #webdesign #uiux',
      likes: '1,240',
      comments: '42'
    },
    {
      id: 'i2',
      image: IMAGE_ASSETS.businessCard,
      caption: 'Luxury business card suite complete for Novum. Tactile paper textures, elegant serif pairing. #branding #identity',
      likes: '890',
      comments: '18'
    },
    {
      id: 'i3',
      image: IMAGE_ASSETS.invitation,
      caption: 'Classic foliage gold foil wedding set. Designed for a serene spring celebration. #weddinginvite #typography',
      likes: '1,560',
      comments: '53'
    },
    {
      id: 'i4',
      image: IMAGE_ASSETS.greeting,
      caption: 'Warm digital artist series greetings. Simple brushwork textures on premium paper stock. #greetingcard #artistic',
      likes: '710',
      comments: '12'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % instaPosts.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + instaPosts.length) % instaPosts.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual top blur element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TESTIMONIALS SEGMENT ================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              Client Appraisals
            </span>
            <h2 id="testimonials-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Endorsed by Fast-Growing Brands
            </h2>
            <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
              Read real feedback on website builds, luxury cards, and custom graphics by Bilal.
            </p>
          </div>

          <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/80 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Star Rating & Category Label */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-450" />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest bg-zinc-200/50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded-full font-bold">
                      {test.tag}
                    </span>
                  </div>

                  {/* Review Text Body */}
                  <p className="font-sans text-[13px] sm:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed italic">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-zinc-900 dark:text-white">
                      {test.name}
                    </h4>
                    <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase">
                      {test.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= INSTAGRAM SLIDER SEGMENT ================= */}
        <div className="pt-16 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                Social Presence
              </span>
              <h2 id="insta-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <Instagram className="text-[#C5A880]" /> @bilalahmad51_ Feed
              </h2>
            </div>

            <button
              id="btn-insta-follow"
              onClick={() => window.open('https://www.instagram.com/bilalahmad51_?igsh=MWh1NXYzYmtrNG4wOQ==', '_blank')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#121212] hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black font-sans text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md active:scale-95 cursor-pointer self-start md:self-auto"
            >
              Follow on Instagram
            </button>
          </div>

          {/* Instagram Slider Viewport Container */}
          <div id="insta-slider-viewport" className="relative max-w-lg mx-auto bg-neutral-50 dark:bg-zinc-900 p-4 sm:p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl overflow-hidden group">
            
            {/* Header branding simulation */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-zinc-200/50 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border-2 border-[#C5A880] p-0.5">
                  <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center font-bold text-[9px] text-white">
                    BA
                  </div>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-zinc-900 dark:text-white font-semibold">bilalahmad51_</h4>
                  <p className="font-mono text-[8px] text-zinc-400">Design Studio • India</p>
                </div>
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-red-500 text-[8px] font-mono tracking-widest font-bold text-white uppercase select-none animate-pulse">
                • LIVE MOCK
              </span>
            </div>

            {/* Slider frame image container */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-200">
              <AnimatePresence mode="wait">
                <motion.img
                  id={`insta-slide-img-${instaPosts[activeSlide].id}`}
                  key={activeSlide}
                  src={instaPosts[activeSlide].image}
                  alt={instaPosts[activeSlide].caption}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Interaction controllers left/right */}
              <button
                id="btn-insta-prev"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/85 backdrop-blur-xs rounded-full text-white transition-all cursor-pointer opacity-80 group-hover:opacity-100"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                id="btn-insta-next"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/85 backdrop-blur-xs rounded-full text-white transition-all cursor-pointer opacity-80 group-hover:opacity-100"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Simulated actions panel likes/captions */}
            <div className="mt-4 space-y-2.5 px-1.5 text-zinc-800 dark:text-zinc-200">
              <div className="flex gap-4">
                <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer text-xs">
                  <Heart size={16} className="fill-red-500 text-red-500" /> <span>{instaPosts[activeSlide].likes}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-[#C5A880] transition-colors cursor-pointer text-xs">
                  <MessageCircle size={16} /> <span>{instaPosts[activeSlide].comments}</span>
                </button>
              </div>

              <p className="font-sans text-xs text-zinc-650 dark:text-zinc-350 leading-relaxed">
                <span className="font-bold mr-1.5 text-zinc-900 dark:text-white">bilalahmad51_</span>
                {instaPosts[activeSlide].caption}
              </p>

              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400 mt-2 pt-1 border-t border-zinc-150/10">
                <span>SLIDE {activeSlide + 1} OF {instaPosts.length}</span>
                <span className="underline hover:text-[#C5A880] cursor-pointer" onClick={() => window.open('https://www.instagram.com/bilalahmad51_?igsh=MWh1NXYzYmtrNG4wOQ==', '_blank')}>VIEW POST ON APP</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
