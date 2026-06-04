/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, ShieldCheck, MapPin, Eye, Zap, HelpCircle } from 'lucide-react';
import BlurredImage from './BlurredImage';

interface BannerItem {
  id: string;
  type: 'hoarding' | 'hanging' | 'pole' | 'rollup';
  typeLabel: string;
  title: string;
  client: string;
  location: string;
  description: string;
  dayImage: string;
  nightImage: string;
  dimensions: string;
  material: string;
  features: string[];
}

const DELIVERABLE_BANNERS: BannerItem[] = [
  {
    id: 'banner-hoarding',
    type: 'hoarding',
    typeLabel: 'Real Estate Holding & Hoarding',
    title: 'Valkyria Premium Residences',
    client: 'Valkyria Properties Ltd',
    location: 'Worli Sea Face, Mumbai',
    description: 'An exquisite high-dpi construction holding wall and perimeter barricade banner designed to evoke ultimate elite curiosity prior to grand launch.',
    dayImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    nightImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dimensions: '60ft x 12ft (Seamless Overlap)',
    material: 'Matt Premium Blockout Vinyl (340 GSM)',
    features: [
      'Stretched frame edge-to-edge alignment',
      'Atmospheric sand-gold serif typography scale',
      'Dual-contrast golden line vectors',
      'Waterproof, wind-resistant eyelet slots',
      'Perfect color calibration for direct sunlight'
    ]
  },
  {
    id: 'banner-hanging',
    type: 'hanging',
    typeLabel: 'Atrium Hanging Flag Banner',
    title: 'Maison de Amour Autumn Launch',
    client: 'Amour Luxury Apparel',
    location: 'High Street Phoenix, Mall Atrium',
    description: 'A grand hanging ceiling banner designed for multi-tier visual command inside premium shopping malls and grand exhibition galleries.',
    dayImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    nightImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    dimensions: '10ft x 25ft (Vertical Double-Sided)',
    material: 'Premium Coated Canvas with Brass Dowels',
    features: [
      'Self-weighted brass downbars to prevent curl',
      'Double-sided anti-opaque silver core layer',
      'Custom fine-art oil paint vector overlay',
      'Reinforced top pocket loops',
      'Vibrant color fastness under indoor halogen spots'
    ]
  },
  {
    id: 'banner-pole',
    type: 'pole',
    typeLabel: 'Street Light Pole Banner Set',
    title: 'Aethelgard Cultural Fairway',
    client: 'Municipal Art & Heritage Circle',
    location: 'Marine Drive Arteries, Mumbai',
    description: 'Repetitive street-side pole banners creating a majestic rhythm. Styled with clean high-contrast iconography and balanced negative space.',
    dayImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    nightImage: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=1200&q=80',
    dimensions: '3ft x 8ft (Dual-Sided Bracket)',
    material: 'Super-Tough Mesh Banner (380 GSM Wind-Shield)',
    features: [
      'Wind-shunts for high velocity maritime gust',
      'Heavy-duty double lock-stitch hems',
      'Corrosion resistant aluminum bracket pair',
      'Extreme high exposure color pigments',
      'Aesthetic geometric alignment markers'
    ]
  },
  {
    id: 'banner-rollup',
    type: 'rollup',
    typeLabel: 'Exhibition Roll-up & Backdrop',
    title: 'Nova Labs Summit Backdrop',
    client: 'Arc Nova Labs',
    location: 'JW Marriott Grand Ballroom',
    description: 'An elite luxury backdrop designed for international technology symposia, media interviews, and press event stages.',
    dayImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    nightImage: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80',
    dimensions: '8ft x 8ft (Tension Fabric Pop-Up)',
    material: 'Wrinkle-Free Polyester Backlit Stretch Fabric',
    features: [
      'Anodized aluminum scissor expansion frame',
      'Non-glare studio matte reflection treatment',
      'Interlocking velcro perimeter wrap',
      'Padded canvas travel flight-case included',
      'Eco-friendly sublimation color-fast dyes'
    ]
  }
];

interface BannersProps {
  onQuoteTrigger: (selectedService: string) => void;
}

export default function Banners({ onQuoteTrigger }: BannersProps) {
  const [selectedBanner, setSelectedBanner] = useState<BannerItem>(DELIVERABLE_BANNERS[0]);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [isFeatureHovered, setIsFeatureHovered] = useState<string | null>(null);

  const handleWhatsAppEnquiry = (title: string) => {
    const text = encodeURIComponent(`Hello Bilal Ahmad, I am interested in your Exquisite Banner Design for: "${title}". Can we discuss the specs?`);
    window.open(`https://wa.me/919119527287?text=${text}`, '_blank');
  };

  return (
    <section
      id="banners-showcase"
      className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decorative Polygons */}
      <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#C5A880]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-8%] w-[450px] h-[450px] rounded-full bg-rose-50/10 dark:bg-zinc-950/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A880]/15 dark:bg-[#C5A880]/10 rounded-full">
            <Sparkles size={11} className="fill-[#C5A880] text-[#C5A880]" /> Grand Signage
          </span>
          <h2 id="banners-heading" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Exquisite Banner & Holding Deliverables
          </h2>
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Meticulously planned large-format outdoor hoarding, construct holding walls, and luxury exhibition banner mockups. Engage interactive light toggles to simulate day and night luminosity.
          </p>
        </div>

        {/* Master Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT SELECTOR RAIL - Span 4 */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                Select Deliverable Type
              </h3>
              
              <div className="space-y-3.5">
                {DELIVERABLE_BANNERS.map((banner) => {
                  const isSelected = selectedBanner.id === banner.id;
                  return (
                    <button
                      key={banner.id}
                      onClick={() => setSelectedBanner(banner)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all relative flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? 'bg-[#FAF6F0] border-[#C5A880]/30 shadow-md dark:bg-zinc-900/40 dark:border-[#C5A880]/20'
                          : 'bg-neutral-50 hover:bg-neutral-100/80 border-transparent dark:bg-zinc-900/25 dark:hover:bg-zinc-900/50'
                      }`}
                    >
                      <div className="space-y-1 pr-4">
                        <span className={`font-mono text-[9px] uppercase tracking-wider font-semibold ${
                          isSelected ? 'text-[#8A6A40] dark:text-[#E2C59F]' : 'text-zinc-400'
                        }`}>
                          {banner.typeLabel}
                        </span>
                        <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                          {banner.title}
                        </h4>
                      </div>
                      
                      <div className={`p-2 rounded-xl transition-all ${
                        isSelected 
                          ? 'bg-[#C5A880]/20 text-[#8A6A40] dark:text-[#E2C59F]' 
                          : 'bg-zinc-200/50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'
                      }`}>
                        <Layers size={14} />
                      </div>

                      {/* Small golden bar indicator */}
                      {isSelected && (
                        <motion.div
                          layoutId="selectedBannerVerticalBar"
                          className="absolute left-0 top-4 bottom-4 w-1 bg-[#C5A880] rounded-r-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Context Tip Box */}
            <div className="p-5 rounded-2xl bg-[#C5A880]/5 border border-dashed border-[#C5A880]/20 text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-[#8A6A40] dark:text-[#E2C59F] uppercase tracking-wide font-mono text-[10px]">
                <ShieldCheck size={12} /> True-To-Print Guarantee
              </div>
              <p className="leading-relaxed">
                All mock hoarding and sign banners are exported using native Adobe vector vectors or 300+ DPI layouts to maintain clarity on vast physical structures.
              </p>
            </div>
          </div>

          {/* RIGHT PREVIEW & SPEC PANEL - Span 8 */}
          <div className="lg:col-span-8 flex flex-col bg-neutral-50 dark:bg-zinc-900/30 border border-zinc-150 dark:border-zinc-800/80 rounded-3xl overflow-hidden p-6 sm:p-8 justify-between gap-8 shadow-xs">
            
            {/* Header Metadata area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200/50 dark:border-zinc-800/60 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold bg-[#C5A880]/20 text-[#8A6A40] dark:text-rose-300">
                    {selectedBanner.typeLabel}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400 flex items-center gap-1">
                    <MapPin size={9} /> {selectedBanner.location}
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-zinc-900 dark:text-white">
                  {selectedBanner.title}
                </h3>
              </div>

              {/* Day/Night Interaction Slider Toggle */}
              <div className="flex items-center gap-2 bg-white dark:bg-zinc-950 p-1.5 rounded-full border border-zinc-150 dark:border-zinc-800 shadow-inner self-start sm:self-center shrink-0">
                <button
                  onClick={() => setIsNightMode(false)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold transition-all relative flex items-center gap-1 cursor-pointer ${
                    !isNightMode
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-650'
                  }`}
                >
                  ☀️ Day
                </button>
                <button
                  onClick={() => setIsNightMode(true)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold transition-all relative flex items-center gap-1 cursor-pointer ${
                    isNightMode
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-650'
                  }`}
                >
                  🌙 Night
                </button>
              </div>
            </div>

            {/* Immersive Photo Preview Canvas (Responsive layout container) */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-200/60 dark:bg-zinc-950 group/preview border border-zinc-200/40 dark:border-zinc-800">
              
              {/* Day/Night Image Switch Layer with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isNightMode ? 'night' : 'day'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <BlurredImage
                    src={isNightMode ? selectedBanner.nightImage : selectedBanner.dayImage}
                    alt={selectedBanner.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/preview:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Day/Night Ambience Overlay Banner */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-[9.5px] font-mono text-white flex items-center gap-1.5 border border-white/10 uppercase tracking-widest font-bold">
                <Eye size={11} className={isNightMode ? 'text-indigo-300' : 'text-amber-300'} />
                Simulated {isNightMode ? 'Ambient Spot Night' : 'Direct Daylight'} Glow
              </div>

              {/* Technical Blueprint Stats Watermark */}
              <div className="absolute bottom-4 right-4 z-20 p-2.5 bg-zinc-950/80 backdrop-blur-xs rounded-xl border border-zinc-800 text-[8.5px] font-mono text-zinc-400 space-y-0.5 pointer-events-none">
                <div className="flex justify-between gap-4">
                  <span>SCALE:</span>
                  <span className="text-zinc-150 font-bold">1:1 HIGH RES</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>RATIO:</span>
                  <span className="text-zinc-150 font-bold">{selectedBanner.dimensions.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Content Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              
              {/* Left Column: Description & Spec Metadata */}
              <div className="space-y-5">
                <p className="font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {selectedBanner.description}
                </p>

                {/* Technical Materials Matrix Table */}
                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-zinc-900/60 border border-zinc-250/50 dark:border-zinc-800/60 text-[10.5px] font-mono space-y-2">
                  <div className="flex justify-between pb-1.5 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-400">Client:</span>
                    <span className="text-zinc-700 dark:text-zinc-200 font-semibold">{selectedBanner.client}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-400">Print Size:</span>
                    <span className="text-zinc-700 dark:text-zinc-200 font-semibold">{selectedBanner.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Material Spec:</span>
                    <span className="text-zinc-700 dark:text-zinc-200 font-semibold truncate max-w-[150px]">{selectedBanner.material}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High Quality Technical Deliverables Features Bullet list */}
              <div className="space-y-4">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                  <Zap size={11} className="text-[#C5A880]" /> Technical Print Quality
                </h4>
                
                <ul className="space-y-2.5">
                  {selectedBanner.features.map((feat) => {
                    const isHovered = isFeatureHovered === feat;
                    return (
                      <motion.li
                        key={feat}
                        onMouseEnter={() => setIsFeatureHovered(feat)}
                        onMouseLeave={() => setIsFeatureHovered(null)}
                        className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-sans cursor-help relative"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${
                          isHovered ? 'bg-[#C5A880] scale-125' : 'bg-[#C5A880]/60'
                        }`} />
                        <span className={`transition-colors leading-relaxed ${isHovered ? 'text-zinc-900 dark:text-white font-medium' : ''}`}>
                          {feat}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* CTA action cluster button floor */}
            <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                onClick={() => handleWhatsAppEnquiry(selectedBanner.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-150 text-white dark:text-black rounded-xl font-sans text-xs uppercase tracking-wide font-extrabold transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Request Custom Signage / Banner Design
              </button>
              
              <button
                onClick={() => onQuoteTrigger(`Custom ${selectedBanner.typeLabel}`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 bg-transparent hover:bg-zinc-150/10 border border-zinc-350 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
              >
                Send Design Spec Form
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
