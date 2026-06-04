/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Globe, CreditCard, Sparkles, Gift, Layers, Check } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  
  // Custom helper mapping icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-rose-500" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-500" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#FEFBF9] dark:bg-zinc-950 transition-colors duration-300 relative"
    >
      {/* Decorative vectors */}
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] rounded-full bg-indigo-50/30 dark:bg-[#C5A880]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
            Curated Services
          </span>
          <h2 id="services-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Exquisite Design Deliverables
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
            Tailor-made design packages matching luxury agency structures to build immediate credibility for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const isWeb = srv.id === 'web-design';
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-zinc-900 border ${
                  isWeb
                    ? 'border-rose-100 dark:border-rose-950/30 shadow-xl'
                    : 'border-zinc-200/50 dark:border-zinc-800 shadow-xs'
                } hover:shadow-2xl dark:hover:shadow-black/40 hover:border-[#C5A880]/30 dark:hover:border-[#C5A880]/20 transition-[box-shadow,border-color] duration-500 ease-out group`}
              >
                {srv.badge && (
                  <span className="absolute top-6 right-6 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold bg-[#C5A880]/10 dark:bg-[#C5A880]/20 text-[#A6885D] dark:text-[#E2C59F]">
                    {srv.badge}
                  </span>
                )}

                <div className="space-y-6">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(srv.icon)}
                  </div>

                  {/* Header Title */}
                  <div className="space-y-1">
                    <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                      {srv.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                  {/* Features Bullet List */}
                  <ul className="space-y-2.5">
                    {srv.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Button */}
                <div className="mt-8 pt-2">
                  <button
                    id={`btn-service-${srv.id}`}
                    onClick={() => onServiceSelect(srv.title)}
                    className="w-full text-center px-5 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-bold border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                  >
                    {srv.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
