'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.15, duration: 0.6, ease: 'easeOut' as const }
  })
};

export default function QuoteForm({ initialInquiryType = 'general' }: { initialInquiryType?: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', inquiryType: initialInquiryType });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    if (form.phone.trim() && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(form.phone))
      errs.phone = 'Invalid phone number.';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const service = form.inquiryType === 'quote' ? 'Quote Request' : 'General Inquiry';
      const res = await fetch('/api/send-form-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', message: '', inquiryType: 'general' });
        setTimeout(() => setSuccess(false), 4000);
      } else {
        const data = await res.json();
        setErrors({ message: data.error || 'Failed to send. Please try again.' });
      }
    } catch {
      setErrors({ message: 'Network error. Please try again.' });
    }
    setLoading(false);
  };

  const fieldProps = (i: number) => ({
    custom: i,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.8 },
    variants: inputVariants,
    className: 'relative'
  });

  return (
    <div className="bg-[#1a1a1a]/50 p-8 rounded-2xl border border-white/10 shadow-lg">
              <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative inline-block mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Us</h2>
          <span className="block h-1 w-24 bg-gradient-to-r from-[#2470a9] to-[#8bc541] rounded-full mt-2" />
        </motion.div>
      <form onSubmit={handleSubmit} className="space-y-7 mt-4">
        <motion.div key="name" {...fieldProps(0)}>
          <label htmlFor="name" className="text-white/60 text-sm mb-1 block">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g., Jane Doe"
            className={`w-full px-4 py-3 rounded-lg bg-[#101010] text-white border-2 focus:outline-none transition-colors duration-300 ${
              errors.name ? 'border-red-500' : 'border-white/20 focus:border-[#8bc541]'
            }`}
            autoComplete="name"
          />
          {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name}</span>}
        </motion.div>
        <motion.div key="email" {...fieldProps(1)}>
          <label htmlFor="email" className="text-white/60 text-sm mb-1 block">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g., jane.doe@example.com"
            className={`w-full px-4 py-3 rounded-lg bg-[#101010] text-white border-2 focus:outline-none transition-colors duration-300 ${
              errors.email ? 'border-red-500' : 'border-white/20 focus:border-[#8bc541]'
            }`}
            autoComplete="email"
          />
          {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
        </motion.div>
        <motion.div key="phone" {...fieldProps(2)}>
          <label htmlFor="phone" className="text-white/60 text-sm mb-1 block">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g., +250 788 123 456"
            className={`w-full px-4 py-3 rounded-lg bg-[#101010] text-white border-2 focus:outline-none transition-colors duration-300 ${
              errors.phone ? 'border-red-500' : 'border-white/20 focus:border-[#8bc541]'
            }`}
            autoComplete="tel"
          />
          {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone}</span>}
        </motion.div>
        <motion.div key="inquiryType" {...fieldProps(3)}>
          <label htmlFor="inquiryType" className="text-white/60 text-sm mb-1 block">
            Type of Inquiry *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#101010] text-white border-2 border-white/20 focus:border-[#8bc541] focus:outline-none transition-colors duration-300"
          >
            <option value="general">General Inquiry</option>
            <option value="quote">Request a Quote</option>
          </select>
        </motion.div>
        <motion.div key="message" {...fieldProps(4)}>
          <label htmlFor="message" className="text-white/60 text-sm mb-1 block">
            What do you need? *
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your inquiry or logistics needs..."
            rows={5}
            className={`w-full px-4 py-3 rounded-lg bg-[#101010] text-white border-2 focus:outline-none transition-colors duration-300 ${
              errors.message ? 'border-red-500' : 'border-white/20 focus:border-[#8bc541]'
            }`}
          />
          {errors.message && <span className="text-red-400 text-xs mt-1">{errors.message}</span>}
        </motion.div>
        <motion.button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-4 px-8 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#2470a9] to-[#8bc541] shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span>{form.inquiryType === 'quote' ? 'Request Quote' : 'Send Message'}</span>
            </>
          )}
        </motion.button>
      </form>
      <div className="mt-6 text-sm text-[#8bc541]/80 bg-[#8bc541]/10 border border-[#8bc541]/20 rounded-lg p-3 text-center">
        <strong>Quick Response:</strong> We typically respond to all {form.inquiryType === 'quote' ? 'quote requests' : 'inquiries'} within 2-4 hours during business hours.
      </div>
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#2470a9] to-[#8bc541] text-white px-8 py-4 rounded-xl shadow-2xl font-semibold text-lg flex items-center gap-3"
          >
            <span>✅</span> {form.inquiryType === 'quote' ? 'Quote Request Sent!' : 'Message Sent!'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 