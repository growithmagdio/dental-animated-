import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function FloatingWhatsApp() {
  const waMessage = encodeURIComponent(
    "Hello Jerush Dental Clinic! I would like to inquire about dental services or book an appointment."
  );
  const waUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${waMessage}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl pulse-whatsapp transition-transform duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
}
