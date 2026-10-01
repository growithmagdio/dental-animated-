import React from 'react';
import { Calendar, Award, GraduationCap } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function Doctors() {
  return (
    <section className="py-24 bg-white relative" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Clinical Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-4">
            Meet Our Specialist Dentists
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            Compassionate experts dedicated to delivering painless treatments and world-class dental aesthetics.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_CONFIG.doctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="bg-[#F4F9FB] rounded-3xl overflow-hidden border border-teal-100/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/70 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#4FB8C9] mb-1">
                      {doctor.specialty}
                    </div>
                    <h3 className="font-serif text-2xl font-bold">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <div className="flex items-start space-x-2 text-xs font-medium text-[#1E3A5F] mb-4 bg-white p-3 rounded-xl border border-gray-100">
                    <GraduationCap className="w-4 h-4 text-[#4FB8C9] shrink-0 mt-0.5" />
                    <span>{doctor.qualification}</span>
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#appointment"
                  className="w-full btn-outline py-3 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 bg-white"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {doctor.name.split(' ')[1]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
