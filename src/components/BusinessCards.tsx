/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCw, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_CARDS_SHOWCASE } from '../data';

interface BusinessCardsProps {
  onQuoteTrigger: () => void;
}

export default function BusinessCards({ onQuoteTrigger }: BusinessCardsProps) {
  // Store cards flip layout indices
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (cardId: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <section
      id="cards-showcase"
      className="py-24 bg-[#FAF6F0] dark:bg-zinc-900/50 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Absolute decorative back rings */}
      <div className="absolute bottom-[-10%] left-[5%] w-[350px] h-[350px] rounded-full border border-zinc-200/40 dark:border-zinc-800/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
            Tactile Deliverables
          </span>
          <h2 id="business-cards-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Premium Business Cards
          </h2>
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
            Interactive prototypes displaying front and back layout structures. Hover or click custom flip buttons to switch perspectives.
          </p>
        </div>

        {/* Business Cards Showcase Row */}
        <div id="business-cards-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {BUSINESS_CARDS_SHOWCASE.map((card) => {
            const isFlipped = !!flippedCards[card.id];
            
            return (
              <div
                key={card.id}
                className="flex flex-col space-y-6 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Visual Flipper Canvas Container */}
                <div className="relative h-[220px] w-full perspective-1000 group">
                  
                  {/* Flip Controller Box */}
                  <motion.div
                    id={`flipper-box-${card.id}`}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                    className="relative w-full h-full transform-style-3d cursor-pointer"
                    onClick={() => toggleFlip(card.id)}
                  >
                    
                    {/* Front Side Viewport */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between border border-black/5 dark:border-white/10 backface-hidden shadow-lg ${card.colors.bgFront} relative overflow-hidden`}
                      style={card.colors.bgImageFront ? { backgroundImage: `url(${card.colors.bgImageFront})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                    >
                      {card.colors.bgImageFront && <div className="absolute inset-0 bg-black/5 dark:bg-black/15 pointer-events-none z-0" />}
                      <div className="flex justify-between items-start relative z-10">
                        <span className="font-mono text-[9px] tracking-widest font-bold text-zinc-400">FRONT</span>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.colors.accent }} />
                      </div>

                      {/* Custom Arc Nova Creative Logo Mark */}
                      {card.id === 'card-arc-nova' && (
                        <div className="absolute right-6 top-8 flex flex-col items-center justify-center opacity-85 pointer-events-none z-15 bg-white/20 dark:bg-black/10 backdrop-blur-xs p-1.5 rounded-full border border-white/30">
                          <div className="w-8 h-8 rounded-full border border-dashed border-[#D4AF37] flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <Sparkles size={11} className="text-[#D4AF37]" />
                          </div>
                        </div>
                      )}

                      <div className="space-y-1 relative z-10">
                        <p className="font-sans text-xs uppercase tracking-widest text-[#C5A880] font-semibold">{card.frontTextList[0]}</p>
                        <h4 className={`font-sans text-xl font-bold tracking-tight ${card.colors.textFront} [text-shadow:_0_1px_3px_rgba(0,0,0,0.15)]`}>
                          {card.frontTextList[1]}
                        </h4>
                        <p className={`font-mono text-[9px] uppercase tracking-wider ${card.colors.textFront} opacity-85 mt-1 font-semibold select-none`}>
                          {card.frontTextList[2]}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-zinc-400 relative z-10">
                        <span>EST 2026</span>
                        <span className="animate-pulse flex items-center gap-1 text-zinc-400">
                          <RotateCw size={9} /> CLICK TO FLIP
                        </span>
                      </div>
                    </div>

                    {/* Back Side Viewport */}
                    <div
                      className={`absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between border border-black/5 dark:border-white/10 backface-hidden shadow-lg rotate-y-180 ${card.colors.bgBack} relative overflow-hidden`}
                      style={card.colors.bgImageBack ? { backgroundImage: `url(${card.colors.bgImageBack})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                    >
                      {card.colors.bgImageBack && <div className="absolute inset-0 bg-black/10 dark:bg-black/25 pointer-events-none z-0" />}
                      <div className="flex justify-between items-center border-b border-zinc-200/15 pb-2.5 relative z-10">
                        <span className="font-mono text-[9px] tracking-widest font-bold text-zinc-400">BACK</span>
                        <span className={`font-sans text-[10px] font-bold tracking-widest ${card.colors.textBack} uppercase`}>{card.frontTextList[0]}</span>
                      </div>

                      {/* Back details text list content layout */}
                      <div className="space-y-1 my-auto relative z-10">
                        {card.backTextList.map((line, lIdx) => (
                          <p
                            key={lIdx}
                            className={`font-mono text-[9.5px] tracking-wider truncate ${card.colors.textBack} leading-relaxed font-semibold`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-[7px] font-mono tracking-wider text-zinc-400 pt-2 border-t border-zinc-200/20 relative z-10">
                        <span>ARC NOVA STUDIOS</span>
                        <span className="text-zinc-400">CLICK TO FLIP BACK</span>
                      </div>
                    </div>

                  </motion.div>
                </div>

                {/* Information content metadata block */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-white">
                        {card.title}
                      </h3>
                      {/* Interactive Trigger to manually initiate flip */}
                      <button
                        onClick={() => toggleFlip(card.id)}
                        className="p-1.5 rounded-lg bg-neutral-100 dark:bg-zinc-800 hover:bg-[#C5A880]/20 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 transition-colors"
                        title="Click to Flip Card Style"
                      >
                        <RotateCw size={13} className="animate-spin-slow" />
                      </button>
                    </div>
                    <p className="font-mono text-[10px] text-[#C5A880] uppercase tracking-wider font-semibold">{card.role}</p>
                    <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Highlight capsule details */}
                  <div className="p-3 bg-neutral-50 dark:bg-zinc-950 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-400">
                    <span>💡 Layout Detail: </span>
                    <span className="text-zinc-600 dark:text-zinc-300 font-sans font-medium">{card.details}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Business Card Pitch Pitch Callout Banner */}
        <motion.div
           id="business-card-callout"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 p-8 sm:p-10 rounded-3xl bg-zinc-950 dark:bg-black text-white text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-zinc-800 shadow-xl relative overflow-hidden"
        >
          {/* Subtle decoration vector */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-[35px] pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Need a unique card for your business?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl">
              Let&apos;s create a stunning luxury card together, packed with responsive scan codes, custom textured templates, and brand fonts.
            </p>
          </div>

          <button
            id="btn-callout-cards"
            onClick={onQuoteTrigger}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4.5 bg-white hover:bg-zinc-100 text-black rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-lg active:scale-95 cursor-pointer relative z-10"
          >
            Create Custom Card <Sparkles size={13} className="text-[#C5A880] fill-[#C5A880]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
