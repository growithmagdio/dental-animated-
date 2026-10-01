import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function ContactLocation() {
  return (
    <section className="py-24 bg-white relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Visit Our Clinic</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-4">
            Location & Operating Hours
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            We are conveniently located with ample dedicated parking and easy accessibility.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact & Hours Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#F4F9FB] rounded-2xl p-6 border border-teal-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#4FB8C9] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1E3A5F] mb-1">Clinic Address</h4>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {CLINIC_CONFIG.address}
                </p>
              </div>
            </div>

            {/* Phone & Email Card */}
            <div className="bg-[#F4F9FB] rounded-2xl p-6 border border-teal-100 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#4FB8C9] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#1E3A5F] tracking-wider">Phone Enquiries</h4>
                  <a href={`tel:${CLINIC_CONFIG.phoneRaw}`} className="text-sm font-semibold text-[#4FB8C9] hover:underline">
                    {CLINIC_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-teal-100 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#4FB8C9] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#1E3A5F] tracking-wider">Email Us</h4>
                  <a href={`mailto:${CLINIC_CONFIG.email}`} className="text-sm font-semibold text-[#4FB8C9] hover:underline">
                    {CLINIC_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Table Card */}
            <div className="bg-[#F4F9FB] rounded-2xl p-6 border border-teal-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#4FB8C9] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1E3A5F]">Working Hours</h4>
              </div>

              <div className="space-y-2.5">
                {CLINIC_CONFIG.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-gray-200/60 last:border-0">
                    <span className="font-semibold text-[#1E3A5F]">{item.days}</span>
                    <span className="text-[#4A5568]">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Iframe */}
          <div className="lg:col-span-7 h-full min-h-[420px]">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white relative bg-gray-100">
              <iframe
                title="Jerush Dental Clinic Google Map Location"
                src={CLINIC_CONFIG.mapEmbedUrl}
                className="w-full h-full min-h-[440px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
