/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Award, Heart, Shield } from 'lucide-react';

export default function About() {
  const customCapabilities = [
    { label: 'Professional Websites', desc: 'Sleek, high performance websites designed to load lightning fast.' },
    { label: 'Business Cards', desc: 'Luxurious layout mockups matching premium international styles.' },
    { label: 'Greeting Cards', desc: 'Heartfelt digital messages of pure creativity and custom tone.' },
    { label: 'Invitation Cards', desc: 'Stunning premium digital invitation suites and physical mockups.' },
    { label: 'Social Media Designs', desc: 'Engaging, clean, high conversion assets and banners.' },
    { label: 'Custom Graphic Designs', desc: 'Tailor-made posters, logos, and high value corporate printouts.' }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-orange-100/30 dark:bg-amber-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Visual Column: Modern Luxury Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              id="about-card-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 shadow-xl overflow-hidden group"
            >
              {/* Card visual background patterns */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A880]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold font-sans text-xl shadow-md">
                    BA
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-zinc-900 dark:text-white text-lg">Bilal Ahmad</h4>
                    <p className="font-mono text-xs text-[#C5A880] uppercase tracking-wider font-semibold">Designer & Developer</p>
                  </div>
                </div>

                <div className="h-px bg-zinc-200/60 dark:bg-zinc-800" />

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="p-1 rounded-full bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 h-fit mt-1">
                      <Flame size={14} />
                    </div>
                    <p className="font-sans text-sm text-zinc-600 dark:text-zinc-300">
                      Based in India, delivering premier designs to local & global brands.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 h-fit mt-1">
                      <Award size={14} />
                    </div>
                    <p className="font-sans text-sm text-zinc-600 dark:text-zinc-300">
                      High precision user experience balanced with agency-tier layouts.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 font-mono text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  "Every pixel holds a purpose. Simple elegance isn&apos;t about adding more elements—it&apos;s about removing everything until only perfection remains."
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 font-mono pt-2">
                  <span>EST. 2021</span>
                  <span>INDIA REGION</span>
                </div>
              </div>
            </motion.div>

            {/* Behind grid design badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 dark:bg-rose-950/10 rounded-full blur-[40px] pointer-events-none -z-1" />
          </div>

          {/* Right Column: Narrative Info */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">About The Director</span>
              <h2 id="about-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-creative-text">
                Meet Bilal Ahmad
              </h2>
            </div>

            <p id="about-description" className="font-sans text-base text-creative-muted leading-relaxed">
              Hello, I&apos;m Bilal Ahmad, Creator & Lead Director behind <span className="arc-nova-logo text-xs">Arc Nova</span>. Our ultimate mission is to empower visionaries, brands, and digital-first businesses through exquisite bespoke high-end designs, futuristic interactive layouts, and prestigious physical assets like minimalist business cards and digital identity platforms.
            </p>

            {/* Custom Grid Checklist with icons */}
            <div id="about-capabilities-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {customCapabilities.map((cap, idx) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-zinc-900/40 transition-colors"
                >
                  <div className="p-2 bg-[#C5A880]/15 dark:bg-[#C5A880]/10 rounded-xl text-zinc-800 dark:text-[#C5A880] shrink-0 mt-0.5">
                    <Check size={16} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-zinc-900 dark:text-white">{cap.label}</h4>
                    <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 mt-1 lines-2">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
