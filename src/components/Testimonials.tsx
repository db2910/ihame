'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Supply Chain Manager',
    company: 'TechCorp Industries',
    image: '/placeholder-user.svg',
    review: "IHAME has transformed our logistics operations. Their real-time tracking and reliable service have reduced our shipping delays by 90%.",
    rating: 5,
  },
  {
    name: 'Jane Smith',
    title: 'Operations Director',
    company: 'Global Exports',
    image: '/placeholder-user.svg',
    review: 'The cross-border logistics service is seamless. We never have to worry about customs or delays. Truly a five-star experience.',
    rating: 5,
  },
  {
    name: 'Samuel Green',
    title: 'Procurement Lead',
    company: 'Innovate Co.',
    image: '/placeholder-user.svg',
    review: 'Fast, secure, and professional. The team at IHAME is always ready to help and provides excellent support. Our go-to logistics partner.',
    rating: 5,
  },
];

const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
};

const StarIcon = () => (
    <svg className="w-5 h-5 text-[#7AB648]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const QuoteIcon = () => (
    <svg className="absolute top-6 right-6 w-16 h-16 text-[#E0E0E0]/40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
    </svg>
);


export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = useCallback(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, []);

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
      const slideInterval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
  
      return () => {
        clearInterval(slideInterval);
      };
    }, [handleNext]);

    const currentTestimonial = testimonials[index];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                    <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-transparent bg-clip-text">What</span> Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-transparent bg-clip-text">Clients</span> Say
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Don&apos;t just take our word for it. Here&apos;s what industry leaders say about our logistics solutions.
                </p>
                
                <div className="relative h-80 md:h-72">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={sliderVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="absolute w-full h-full"
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col items-center justify-center relative">
                                <QuoteIcon />
                                <div className="flex mb-4">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => <StarIcon key={i} />)}
                                </div>
                                <p className="text-xl font-medium text-gray-700 mb-6 max-w-xl">
                                    &quot;{currentTestimonial.review}&quot;
                                </p>
                                <div className="flex items-center">
                                    <Image
                                        src={currentTestimonial.image}
                                        alt={currentTestimonial.name}
                                        width={56}
                                        height={56}
                                        className="rounded-full mr-4 border-2 border-gray-100"
                                    />
                                    <div>
                                        <p className="font-bold text-[#1A1A1A] text-lg">{currentTestimonial.name}</p>
                                        <p className="font-medium text-[#2875B4]">{currentTestimonial.title}</p>
                                        <p className="text-sm text-gray-500">{currentTestimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-6 mt-8">
                    <motion.button
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonial"
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </motion.button>

                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1);
                                    setIndex(i);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-[#2875B4]' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={handleNext}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonial"
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
