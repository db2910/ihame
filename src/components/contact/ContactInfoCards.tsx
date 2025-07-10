'use client';

import { motion, Variants } from 'framer-motion';

const cards = [
  {
    icon: (
      <div className="bg-[#8bc541]/10 p-3 rounded-xl">
        <svg className="w-8 h-8 text-[#8bc541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
    ),
    title: 'Phone',
    subtitle: 'Call us directly for immediate assistance',
    value: '+250 788 693 747'
  },
  {
    icon: (
      <div className="bg-[#8bc541]/10 p-3 rounded-xl">
        <svg className="w-8 h-8 text-[#8bc541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    ),
    title: 'Email',
    subtitle: 'Send us a detailed message',
    value: 'ihamelogisticstosupply@gmail.com'
  },
  {
    icon: (
      <div className="bg-[#8bc541]/10 p-3 rounded-xl">
        <svg className="w-8 h-8 text-[#8bc541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    ),
    title: 'Location',
    subtitle: 'Visit our office in Kigali',
    value: 'Kigali, Rwanda'
  },
  {
    icon: (
      <div className="bg-[#8bc541]/10 p-3 rounded-xl">
        <svg className="w-8 h-8 text-[#8bc541]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    title: 'Business Hours',
    subtitle: `We're here to assist you with all your luxury car rental and tourism needs.`,
    value: (
      <div className="text-sm text-white/70 space-y-1 font-mono">
        <div>Mon–Fri: 8:00AM – 6:00PM</div>
        <div>Sat: 9:00AM – 5:00PM</div>
        <div>Sun: 10:00AM – 4:00PM</div>
      </div>
    )
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: 'easeOut' as const }
  })
};

export default function ContactInfoCards() {
  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative inline-block mb-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Information</h2>
        <span className="block h-1 w-24 bg-gradient-to-r from-[#2470a9] to-[#8bc541] rounded-full mt-2" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-white/70 mb-8 max-w-md"
      >
        We are here to assist you with all your luxury car rental and tourism needs. Reach out to us through any of
        the following channels.
      </motion.p>
      <div className="grid grid-cols-1 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group bg-[#1a1a1a]/50 p-6 rounded-2xl border border-white/10 shadow-lg flex items-start space-x-5 relative overflow-hidden"
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotateZ: '3deg' }}
              transition={{ duration: 0.3 }}
            >
              {card.icon}
            </motion.div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
              <p className="text-white/60 mb-2 text-sm">{card.subtitle}</p>
              <div className="text-base font-medium text-[#8bc541]">{card.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 