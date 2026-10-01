import React, { useState, useRef, useCallback } from 'react';
import { CLINIC_CONFIG } from '../config';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 bg-[#F4F9FB] relative overflow-hidden" id="transformations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Real Patient Transformations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-4">
            {CLINIC_CONFIG.beforeAfter.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            {CLINIC_CONFIG.beforeAfter.subtitle}
          </p>
        </div>

        {/* Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize"
          >
            {/* BEFORE Image (Background layer) */}
            <img
              src={CLINIC_CONFIG.beforeAfter.beforeImage}
              alt="Before Dental Treatment"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* AFTER Image (Clipped overlay layer) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={CLINIC_CONFIG.beforeAfter.afterImage}
                alt="After Dental Treatment"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20">
              {CLINIC_CONFIG.beforeAfter.labelAfter}
            </div>

            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20">
              {CLINIC_CONFIG.beforeAfter.labelBefore}
            </div>

            {/* Vertical Divider Line with Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center transform -translate-x-1/2 z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#4FB8C9] border-2 border-white shadow-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                </svg>
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-[#4A5568]/70 mt-4">
            👈 Drag or swipe left and right to inspect the smile makeover details 👉
          </p>
        </div>

      </div>
    </section>
  );
}
