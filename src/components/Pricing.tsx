/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-24 bg-[#FEFBF9] dark:bg-zinc-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
            Transparent Pricing
          </span>
          <h2 id="pricing-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Simple, No-Fuss Packages
          </h2>
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
            Fair and competitive investments mapped to standard layout delivery scopes. Scale your brand aesthetic seamlessly.
          </p>
        </div>

        {/* Pricing Cards Core Grid */}
        <div id="pricing-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-zinc-900 border ${
                  plan.popular
                    ? 'border-[#C5A880] dark:border-[#C5A880]/50 shadow-xl scale-102 z-10'
                    : 'border-zinc-200/60 dark:border-zinc-800 shadow-xs'
                } transition-all`}
              >
                {/* Popularity Badge */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold bg-[#C5A880] text-black shadow-sm">
                    <Sparkles size={10} className="fill-black" /> {plan.billing}
                  </span>
                )}

                <div className="space-y-6">
                  {/* Package Meta */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 dark:text-zinc-500">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className="flex items-baseline gap-1 text-zinc-900 dark:text-white">
                    <span className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">{plan.price}</span>
                    {!plan.popular && (
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        / {plan.billing}
                      </span>
                    )}
                  </div>

                  <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                  {/* Bullet features list */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Selection Action Trigger Button */}
                <div className="mt-8 pt-4">
                  <button
                    id={`btn-select-plan-${plan.id}`}
                    onClick={() => onPlanSelect(`${plan.name} (${plan.price})`)}
                    className={`w-full text-center px-5 py-4 rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-xs ${
                      plan.popular
                        ? 'bg-[#121212] dark:bg-white text-white dark:text-black hover:opacity-90'
                        : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-zinc-850 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Custom Quote Banner info */}
        <div id="pricing-custom-quote" className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Info size={14} className="text-[#C5A880] shrink-0" />
          <span>Have unique specs or multi-page digital catalog needs? </span>
          <a
            id="link-pricing-custom"
            onClick={() => onPlanSelect('Custom Project Scope')}
            className="font-bold underline text-zinc-800 dark:text-zinc-200 hover:text-black cursor-pointer"
          >
            Contact for a Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
}
