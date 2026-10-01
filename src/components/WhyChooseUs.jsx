import React from 'react';
import { Sparkles, Cpu, Award, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

const ICON_MAP = {
  Sparkles: Sparkles,
  Cpu: Cpu,
  Award: Award,
  ShieldCheck: ShieldCheck
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F4F9FB] relative overflow-hidden" id="why-us">
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4FB8C9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1E3A5F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>The Jerush Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-4">
            Why Patients Trust Jerush Clinic
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            We combine high-precision clinical excellence with compassionate, warm patient care for an extraordinary dental experience.
          </p>
        </div>

        {/* 4 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLINIC_CONFIG.whyChooseUs.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F9FB] text-[#4FB8C9] group-hover:bg-[#4FB8C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-inner border border-[#4FB8C9]/20">
                    <IconComponent className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1E3A5F] mb-3 group-hover:text-[#4FB8C9] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#4FB8C9] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
