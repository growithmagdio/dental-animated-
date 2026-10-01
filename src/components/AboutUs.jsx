import React, { useEffect, useRef, useState } from 'react';
import { CLINIC_CONFIG } from '../config';

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(CLINIC_CONFIG.stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 2000; // 2 seconds
          const steps = 50;
          const intervalTime = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setCounts(
              CLINIC_CONFIG.stats.map((stat) => 
                Math.floor(stat.value * Math.min(1, progress))
              )
            );

            if (step >= steps) {
              clearInterval(timer);
              setCounts(CLINIC_CONFIG.stats.map((stat) => stat.value));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-24 bg-[#F4F9FB] relative overflow-hidden" id="about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual / Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="Jerush Dental Clinic Interior"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 text-[#1E3A5F] shadow-lg">
                <div className="font-serif text-lg font-bold">Gentle Touch, Modern Excellence</div>
                <div className="text-xs text-[#4A5568] mt-1">Equipped with 3D Scanners & Digital Smile Design Workstations</div>
              </div>
            </div>

            {/* Decorative Floating Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#4FB8C9] text-white p-5 rounded-2xl shadow-xl flex-col items-center justify-center max-w-[160px] text-center border border-white/20">
              <span className="font-serif text-3xl font-bold">100%</span>
              <span className="text-[11px] uppercase tracking-wider font-semibold mt-1">Sterilized & Safe</span>
            </div>
          </div>

          {/* Right Column: Paragraph Content & Stats */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>About Jerush Dental</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
              Restoring Confidence, One Smile at a Time.
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed mb-6">
              At <strong className="text-[#1E3A5F]">Jerush Dental Clinic</strong>, we believe every patient deserves a healthy, radiant smile without fear or discomfort. Founded on principles of clinical perfection and gentle empathy, our clinic provides a serene, spa-like environment where modern technology meets personal attention.
            </p>

            <p className="text-sm text-[#4A5568] leading-relaxed mb-10">
              Whether you require a delicate aesthetic makeover, tooth replacement, or gentle pediatric care, our multi-specialty team ensures your treatment is tailored precisely to your comfort.
            </p>

            {/* 3 Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-teal-100">
              {CLINIC_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-4xl font-bold text-[#1E3A5F] tracking-tight">
                    {counts[idx].toLocaleString()}{stat.suffix}
                  </span>
                  <span className="text-xs text-[#4A5568] font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
