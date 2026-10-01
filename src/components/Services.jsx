import React, { useState } from 'react';
import { 
  Stethoscope, 
  Smile, 
  Crown, 
  Activity, 
  Grid, 
  Sparkle, 
  HeartHandshake, 
  Scissors, 
  ArrowRight, 
  Check, 
  X,
  Calendar
} from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

const ICON_MAP = {
  Stethoscope: Stethoscope,
  Smile: Smile,
  Crown: Crown,
  Activity: Activity,
  Grid: Grid,
  Sparkle: Sparkle,
  HeartHandshake: HeartHandshake,
  Scissors: Scissors
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-24 bg-white relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Comprehensive Dental Care</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight">
              Our Specialized Treatments
            </h2>
          </div>
          <p className="text-base text-[#4A5568] max-w-md mt-4 md:mt-0">
            From routine preventive checkups to complex aesthetic restorations, we offer state-of-the-art procedures tailored for you.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_CONFIG.services.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Smile;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-[#F4F9FB] rounded-2xl p-7 border border-teal-100/60 hover:border-[#4FB8C9] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-[#1E3A5F] group-hover:bg-[#4FB8C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1E3A5F] mb-2 group-hover:text-[#4FB8C9] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4A5568] line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#1E3A5F] group-hover:text-[#4FB8C9]">
                  <span>Explore treatment</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#4FB8C9] group-hover:text-white flex items-center justify-center shadow-sm transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#4FB8C9]/10 text-[#4FB8C9] flex items-center justify-center mb-6">
              {React.createElement(ICON_MAP[selectedService.icon] || Smile, { className: 'w-7 h-7' })}
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1E3A5F] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
              {selectedService.description} At Jerush Dental Clinic, each procedure is executed with meticulous care, utilizing digital imaging and minimal incision methods for pain-free comfort and speedy recovery.
            </p>

            <div className="space-y-2 mb-8 text-xs text-[#1E3A5F]">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#4FB8C9]" />
                <span>Painless & gentle procedure standard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#4FB8C9]" />
                <span>FDA-approved medical grade materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#4FB8C9]" />
                <span>Personalized follow-up consultation</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#appointment"
                onClick={() => setSelectedService(null)}
                className="flex-1 btn-primary text-center py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[#4A5568] hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
