import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: CLINIC_CONFIG.services[0].title,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) newErrors.date = 'Preferred date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Pre-filled WhatsApp link
  const waMessage = encodeURIComponent(
    `Hello Jerush Dental Clinic!\n\nI would like to book an appointment:\n• Name: ${formData.name || '[Your Name]'}\n• Phone: ${formData.phone || '[Your Phone]'}\n• Service: ${formData.service}\n• Date: ${formData.date || 'Soonest available'}\n\nPlease confirm availability. Thank you!`
  );

  const waUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${waMessage}`;

  return (
    <section className="py-24 bg-[#F4F9FB] relative overflow-hidden" id="appointment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Details & WhatsApp Quick CTA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/10 text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Easy Online Reservation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
              Book Your Visit Today
            </h2>

            <p className="text-base text-[#4A5568] leading-relaxed mb-8">
              Take the first step toward your dream smile. Fill out the quick form or connect directly with our patient care desk via WhatsApp.
            </p>

            {/* Instant WhatsApp Booking Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">Need Faster Booking?</h4>
                  <p className="text-xs text-emerald-700">Chat live on WhatsApp for instant confirmation</p>
                </div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp Now</span>
              </a>
            </div>

            <div className="space-y-3 text-xs text-[#4A5568]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4FB8C9]" />
                <span>Zero wait-time policy with scheduled slots</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4FB8C9]" />
                <span>Complimentary initial smile consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4FB8C9]" />
                <span>Strict HIPAA & patient privacy protocol</span>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-[#1E3A5F] mb-3">
                    Appointment Requested!
                  </h3>
                  
                  <p className="text-[#4A5568] text-sm max-w-md mb-8 leading-relaxed">
                    Thank you, <strong className="text-[#1E3A5F]">{formData.name}</strong>. Our receptionist will call you shortly at <strong className="text-[#1E3A5F]">{formData.phone}</strong> to confirm your slot for <strong className="text-[#1E3A5F]">{formData.date}</strong>.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        date: '',
                        service: CLINIC_CONFIG.services[0].title,
                        message: ''
                      });
                    }}
                    className="btn-primary px-8 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider"
                  >
                    Submit Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-[#4FB8C9]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-[#4FB8C9]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-[#4FB8C9]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.date ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-[#4FB8C9]'
                        }`}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.date}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                      Select Required Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#4FB8C9] bg-white"
                    >
                      {CLINIC_CONFIG.services.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                      Additional Notes or Symptoms (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe any tooth pain, cosmetic goals, or preferred times..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#4FB8C9]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 rounded-xl font-semibold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Appointment Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
