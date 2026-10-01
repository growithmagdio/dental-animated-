import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC_CONFIG.reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CLINIC_CONFIG.reviews.length) % CLINIC_CONFIG.reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLINIC_CONFIG.reviews.length);
  };

  const currentReview = CLINIC_CONFIG.reviews[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Patient Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-4">
            Words From Our Happy Patients
          </h2>
          <p className="text-xs text-[#4A5568]/60 uppercase tracking-widest font-semibold">
            (Sample patient reviews — edit in src/config.js)
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative bg-[#F4F9FB] rounded-3xl p-8 sm:p-12 border border-teal-100/70 shadow-lg">
          
          <Quote className="w-16 h-16 text-[#4FB8C9]/20 absolute top-6 left-6" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-xl sm:text-2xl text-[#1E3A5F] leading-relaxed italic mb-8 max-w-2xl">
              "{currentReview.comment}"
            </p>

            {/* Patient Details */}
            <div className="flex items-center space-x-4">
              <img
                src={currentReview.avatar}
                alt={currentReview.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#4FB8C9] shadow-md"
              />
              <div className="text-left">
                <div className="font-bold text-[#1E3A5F] text-base">
                  {currentReview.name}
                </div>
                <div className="text-xs text-[#4FB8C9] font-semibold">
                  {currentReview.treatment}
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#1E3A5F] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#4FB8C9] hover:text-white transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#1E3A5F] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#4FB8C9] hover:text-white transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {CLINIC_CONFIG.reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#4FB8C9]' : 'w-2.5 bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
