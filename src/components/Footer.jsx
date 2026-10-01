import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E3A5F] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/10">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FB8C9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#4FB8C9] text-white flex items-center justify-center shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3 1.5 5.5 3 8 1 1.7 1.8 3.5 2.5 5.5.3.8 1.4.8 1.7 0 .5-1.5 1.2-3 2.1-4.4.5-.8 1.2-1.7 1.7-2.6C16.5 12.5 20 10 20 8c0-3.5-3.5-6-8-6z"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold tracking-tight text-white">JERUSH</div>
                <div className="text-[10px] font-bold tracking-widest text-[#4FB8C9] uppercase">Dental Clinic</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Dedicated to delivering compassionate, gentle, state-of-the-art dental care for you and your family.
            </p>

            <div className="flex items-center space-x-3">
              <a href={CLINIC_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4FB8C9] flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={CLINIC_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4FB8C9] flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={CLINIC_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4FB8C9] flex items-center justify-center text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={CLINIC_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4FB8C9] flex items-center justify-center text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-[#4FB8C9] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#4FB8C9] transition-colors">About Clinic</a></li>
              <li><a href="#doctors" className="hover:text-[#4FB8C9] transition-colors">Meet Doctors</a></li>
              <li><a href="#transformations" className="hover:text-[#4FB8C9] transition-colors">Before & After</a></li>
              <li><a href="#reviews" className="hover:text-[#4FB8C9] transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#4FB8C9] transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-4">Dental Services</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {CLINIC_CONFIG.services.slice(0, 6).map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-[#4FB8C9] transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-xs text-gray-300">
              <p>{CLINIC_CONFIG.address}</p>
              <p>Phone: <a href={`tel:${CLINIC_CONFIG.phoneRaw}`} className="text-[#4FB8C9] font-semibold">{CLINIC_CONFIG.phone}</a></p>
              <p>Email: <a href={`mailto:${CLINIC_CONFIG.email}`} className="text-[#4FB8C9] font-semibold">{CLINIC_CONFIG.email}</a></p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-gray-300 hover:text-[#4FB8C9] transition-colors"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
