import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function Navbar({ isPastHero }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close mobile menu on link click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isPastHero 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-gray-100 text-[#1E3A5F]' 
          : 'bg-gradient-to-b from-black/40 via-black/10 to-transparent py-4 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo - ONLY visible when past hero! (Because frame already bakes in top-left logo) */}
        <div className="flex items-center space-x-3 min-w-[200px]">
          {isPastHero ? (
            <a href="#" className="flex items-center space-x-2.5 group transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-10 h-10 rounded-xl bg-[#4FB8C9] text-white flex items-center justify-center shadow-md group-hover:bg-[#3ca3b4]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3 1.5 5.5 3 8 1 1.7 1.8 3.5 2.5 5.5.3.8 1.4.8 1.7 0 .5-1.5 1.2-3 2.1-4.4.5-.8 1.2-1.7 1.7-2.6C16.5 12.5 20 10 20 8c0-3.5-3.5-6-8-6z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-[#1E3A5F] leading-none">
                  JERUSH
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#4FB8C9] mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </a>
          ) : (
            /* Spacer to keep navbar layout balanced without blocking the frame's top-left baked logo */
            <div className="w-10 h-10 invisible" />
          )}
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#4FB8C9] ${
                isPastHero 
                  ? 'text-[#1E3A5F]' 
                  : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] hover:text-[#4FB8C9]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: CTA Pill Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#appointment"
            onClick={(e) => handleNavClick(e, '#appointment')}
            className={`hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              isPastHero
                ? 'btn-primary text-white shadow-md'
                : 'bg-white text-[#1E3A5F] hover:bg-[#4FB8C9] hover:text-white shadow-lg backdrop-blur-sm'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 mr-2" />
            Book Appointment
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isPastHero ? 'text-[#1E3A5F] hover:bg-gray-100' : 'text-white bg-black/30 backdrop-blur-sm'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-50 bg-[#1E3A5F]/95 backdrop-blur-xl text-white flex flex-col justify-between p-6 animate-fadeIn">
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#4FB8C9] text-white flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3 1.5 5.5 3 8 1 1.7 1.8 3.5 2.5 5.5.3.8 1.4.8 1.7 0 .5-1.5 1.2-3 2.1-4.4.5-.8 1.2-1.7 1.7-2.6C16.5 12.5 20 10 20 8c0-3.5-3.5-6-8-6z"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold tracking-tight text-white">JERUSH</div>
                <div className="text-xs font-semibold tracking-widest text-[#4FB8C9]">DENTAL CLINIC</div>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-gray-200 hover:text-[#4FB8C9] transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6">
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, '#appointment')}
              className="w-full btn-primary text-center py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
            
            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="w-full bg-white/10 text-center py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#4FB8C9]" />
              <span>Call Clinic: {CLINIC_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
