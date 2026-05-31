/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  DollarSign,
  Zap,
  Sparkles,
  Smartphone,
  MessageSquareText,
  Compass,
  HeartHandshake,
  FileText,
  Palette,
  CheckCircle2,
  Check
} from 'lucide-react';
import { CLIENT_PROCESS, WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  
  // Custom Icon Selector for Advantages
  const getAdvantageIcon = (idx: number) => {
    switch (idx) {
      case 0: // Professional
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 1: // Affordable
        return <DollarSign className="w-5 h-5 text-indigo-500" />;
      case 2: // Fast
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 3: // Unlimited
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 4: // Mobile Friendly
        return <Smartphone className="w-5 h-5 text-sky-500" />;
      case 5: // Direct Comm
        return <MessageSquareText className="w-5 h-5 text-rose-500" />;
      case 6: // Custom Solutions
        return <Compass className="w-5 h-5 text-[#C5A880]" />;
      case 7: // High Satisfaction
        return <HeartHandshake className="w-5 h-5 text-teal-500" />;
      default:
        return <Check className="w-5 h-5" />;
    }
  };

  // Custom Icon Selector for Timeline Step
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-white dark:bg-black transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= WHY CHOOSE BILAL SEGMENT ================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              My Core Philosophy
            </span>
            <h2 id="why-choose-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Why Partner With Me
            </h2>
            <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
              Fusing creative digital layout craftsmanship with clear, responsive client-first priorities.
            </p>
          </div>

          <div id="benefits-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((benefit, idx) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-neutral-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/80 shadow-xs flex flex-col space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-850 shadow-sm flex items-center justify-center">
                  {getAdvantageIcon(idx)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-zinc-900 dark:text-white">
                    {benefit.title}
                  </h4>
                  <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= STEP TIMELINE SEGMENT ================= */}
        <div className="pt-16 border-t border-zinc-100 dark:border-zinc-900">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              Collaboration Lifecycle
            </span>
            <h2 id="process-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              My Design Process
            </h2>
            <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
              A transparent, simple 4-step workflow guiding your project from raw brief to ultimate custom deployment.
            </p>
          </div>

          {/* Interactive Timeline Track */}
          <div id="timeline-track" className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Horizontal running trace line (desktop only) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-zinc-200 dark:bg-zinc-800 pointer-events-none -z-1" />

            {CLIENT_PROCESS.map((proc, idx) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-4 group"
              >
                {/* Visual Step Marker Orb */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-md border border-zinc-100 dark:border-zinc-800 group-hover:border-[#C5A880] group-hover:scale-105 transition-all relative z-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-850">
                    {getStepIcon(proc.icon)}
                  </div>
                </div>

                {/* Narrative step titles */}
                <div className="space-y-1.5 px-4 md:px-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">
                    {proc.step}
                  </span>
                  <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-white">
                    {proc.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed md:max-w-[210px]">
                    {proc.description}
                  </p>
                </div>

                {/* Elegant subtle index floating numbering backdrop */}
                <div className="absolute top-1 right-4 font-mono font-bold text-4xl text-zinc-100/70 dark:text-zinc-800/10 pointer-events-none select-none z-1">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
