/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, MessageSquare, MapPin, User, Phone, Layers, Pocket, AlignLeft, Image, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';
import { DesignRequestFormData } from '../types';

interface ContactFormProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
}

export default function ContactForm({ selectedService, setSelectedService }: ContactFormProps) {
  // Local Form state
  const [formData, setFormData] = useState<DesignRequestFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    description: '',
    referenceUrl: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Sync selectedService prop with local state when it updates from external packages clicks
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService
      }));
    }
  }, [selectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleFaq = (faqId: string) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };

  // Compile information and format standard shareable WhatsApp string
  const compileWhatsAppMessage = () => {
    const space = ' \n';
    const msg = `*NEW DESIGN REQUEST* ${space}` +
                `--------------------------------- ${space}` +
                `👤 *Name:* ${formData.name} ${space}` +
                `📱 *Phone:* ${formData.phone} ${space}` +
                `📧 *Email:* ${formData.email} ${space}` +
                `🎨 *Service:* ${formData.service} ${space}` +
                `💰 *Budget:* ${formData.budget} ${space}` +
                `💬 *Description:* ${formData.description} ${space}` +
                `🔗 *Reference URL:* ${formData.referenceUrl || 'None provided'}`;
    return encodeURIComponent(msg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      alert('Please fill out all required fields marked with *');
      return;
    }
    setSubmitted(true);
  };

  const launchWhatsAppSubmission = () => {
    const encoded = compileWhatsAppMessage();
    window.open(`https://wa.me/919119527287?text=${encoded}`, '_blank');
    setSubmitted(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      budget: '',
      description: '',
      referenceUrl: ''
    });
    setSelectedService('');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black transition-colors duration-300 relative">
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-pink-150/20 dark:bg-rose-950/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= DESIGN REQUEST FORM GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Narrative Contact Details & Accordion FAQs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Details Panel */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                  Get In Touch
                </span>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Let&apos;s Create Together
                </h2>
                <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                  Have a specific question? Speak directly or map your project parameters using the quick submission form.
                </p>
              </div>

              {/* Core Information Stack */}
              <div id="contact-info-stack" className="space-y-4 pt-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-zinc-900 border border-zinc-150/50 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <User size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">CREATIVE LEAD</p>
                    <p className="font-sans text-sm font-bold text-zinc-850 dark:text-white">Bilal Ahmad</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-zinc-900 border border-zinc-150/50 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">WHATSAPP CHAT</p>
                    <a href="https://wa.me/919119527287" target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-bold text-zinc-850 dark:text-white hover:text-[#C5A880] transition-colors">
                      +91 91195 27287
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-zinc-900 border border-zinc-150/50 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">INSTAGRAM PROFILE</p>
                    <a href="https://www.instagram.com/bilalahmad51_?igsh=MWh1NXYzYmtrNG4wOQ==" target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-bold text-zinc-850 dark:text-white hover:text-[#C5A880] transition-colors">
                      @bilalahmad51_
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-zinc-900 border border-zinc-150/50 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">DIRECT EMAIL</p>
                    <a href="mailto:bilalmohd9919@gmail.com" className="font-sans text-sm font-bold text-zinc-850 dark:text-white hover:text-[#C5A880] transition-colors">
                      bilalmohd9919@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-zinc-900 border border-zinc-150/50 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">LOCATION</p>
                    <p className="font-sans text-sm font-bold text-zinc-855 dark:text-white">India</p>
                  </div>
                </div>

              </div>

              {/* Layout Button Suite */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919119527287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-emerald-100 hover:bg-emerald-100 dark:border-emerald-900 transition-colors cursor-pointer"
                >
                  Message WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/bilalahmad51_?igsh=MWh1NXYzYmtrNG4wOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-pink-50 text-pink-700 dark:bg-pink-950/20 dark:text-pink-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-pink-100 hover:bg-pink-100 dark:border-pink-900 transition-colors cursor-pointer"
                >
                  Follow Instagram
                </a>
                <a
                  href="mailto:bilalmohd9919@gmail.com"
                  className="px-5 py-3 rounded-full bg-neutral-50 text-zinc-750 dark:bg-zinc-900 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-zinc-200/50 hover:bg-zinc-100 dark:border-zinc-800 transition-colors cursor-pointer"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Accent FAQ Accordion block */}
            <div id="faq" className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-950">
              <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-zinc-150/40 dark:border-zinc-800/80 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex justify-between items-center p-4 text-left font-sans text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-neutral-50/55 dark:bg-zinc-900/10 hover:bg-zinc-100/30 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="p-4 pt-2 font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-850">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Container Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-zinc-900/40 border border-zinc-150/50 dark:border-zinc-800/80 shadow-md">
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-sans font-bold text-xl text-zinc-900 dark:text-white">
                    Request Creative Proposal
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 mt-1">
                    Fill the scope detail form. We will form the custom layout.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Sparkles size={16} />
                </div>
              </div>

              {/* Native Form Setup */}
              <form id="design-request-form" onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99000 00000"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed Selection */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
                      Service Required *
                    </label>
                    <div className="relative">
                      <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-250 dark:border-zinc-800 rounded-xl font-sans text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-[#C5A880] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select Service...</option>
                        <option value="Website Design">🌐 Website Design</option>
                        <option value="Business Card Design">💳 Business Card Design</option>
                        <option value="Invitation Card Design">🎉 Invitation Card Design</option>
                        <option value="Greeting Card Design">🎁 Greeting Card Design</option>
                        <option value="Custom Design Services">✨ Custom Graphic Project</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Budget Choice selector */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
                      Budget Range
                    </label>
                    <div className="relative">
                      <Pocket className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-250 dark:border-zinc-800 rounded-xl font-sans text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-[#C5A880] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select Budget Choice...</option>
                        <option value="Under ₹5,000">Under ₹5,000 (Starter Elements)</option>
                        <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000 (Standard Setup)</option>
                        <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000 (Professional Suite)</option>
                        <option value="Over ₹30,000">Over ₹30,000+ (Elite branding)</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Reference Design Link Input */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-[#C5A880] font-bold block flex items-center gap-1">
                      <Image size={10} /> Reference Link / Idea URL
                    </label>
                    <input
                      type="url"
                      name="referenceUrl"
                      value={formData.referenceUrl}
                      onChange={handleInputChange}
                      placeholder="e.g. https://pinterest.com/design"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
                    Project Description
                  </label>
                  <div className="relative">
                    <AlignLeft className="absolute left-3.5 top-3 text-zinc-400" size={14} />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="List key elements, reference notes, colors preferred, or deadline specs..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Panel Action */}
                <button
                  id="btn-form-submit"
                  type="submit"
                  className="w-full text-center py-4 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md focus:outline-none active:scale-98 cursor-pointer"
                >
                  Generate & Send Request
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* SUCCESS CONFIRMATION MODAL LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            id="success-form-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-3xl max-w-md w-full shadow-2xl space-y-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center mx-auto text-3xl">
                <CheckCircle2 size={32} className="stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-bold text-xl text-zinc-900 dark:text-white">
                  Proposal Compiled!
                </h3>
                <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed px-2">
                  Your project requirements have been successfully structured. Click the button below to directly launch WhatsApp and instantly submit these parameters to Bilal.
                </p>
              </div>

              {/* Action grid */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  id="btn-success-launch-whatsapp"
                  onClick={launchWhatsAppSubmission}
                  className="w-full py-4 rounded-xl bg-[#121212] dark:bg-white text-white dark:text-black font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} /> Send WhatsApp Message
                </button>
                <button
                  id="btn-success-close"
                  onClick={() => { setSubmitted(false); resetForm(); }}
                  className="w-full py-3 rounded-xl bg-neutral-50 dark:bg-zinc-800 hover:bg-neutral-100 dark:hover:bg-zinc-750 text-zinc-600 dark:text-zinc-300 font-sans text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-200 dark:border-zinc-700"
                >
                  Submit Locally Only
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
