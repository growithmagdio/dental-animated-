import React from 'react';
import { Activity } from 'lucide-react';

export default function Loader({ progress, isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F4F9FB] transition-opacity duration-700">
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Tooth Icon with soft teal pulse */}
        <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 text-[#4FB8C9] border border-[#4FB8C9]/20 animate-pulse">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C7.5 2 4 4.5 4 8c0 3 1.5 5.5 3 8 1 1.7 1.8 3.5 2.5 5.5.3.8 1.4.8 1.7 0 .5-1.5 1.2-3 2.1-4.4.5-.8 1.2-1.7 1.7-2.6C16.5 12.5 20 10 20 8c0-3.5-3.5-6-8-6z"/>
          </svg>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-[#1E3A5F] tracking-wide mb-1">
          JERUSH
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#4FB8C9] font-medium mb-8">
          Dental Clinic
        </p>

        {/* Thin Teal Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-[#4FB8C9] transition-all duration-200 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-xs text-[#4A5568]/70 font-medium">
          <span>Preparing experience</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
