import React, { useState } from 'react';

import { supabase } from '../../../supabaseClient'; 

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', timeline: '', details: ''
  });
  
  const [status, setStatus] = useState(null); // 'invalid_email' | 'error' | 'success'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('invalid_email');
      return;
    }

    setIsSubmitting(true);

    const combinedMessage = `Service: ${formData.service || '-'}\nTimeline: ${formData.timeline || '-'}\nDetails: ${formData.details}`;

    const { error } = await supabase
      .from('form_submissions')
      .insert([
        {
          form_type: 'contact_me',
          name: formData.name || null,
          email: formData.email,
          preferred_contact: formData.phone || null,
          message: combinedMessage
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error("Gagal menyimpan ke database:", error);
      setStatus('error');
      return;
    }

    setStatus('success');
    
    setFormData({ name: '', email: '', phone: '', service: '', timeline: '', details: '' });

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="relative z-10 w-full flex flex-col items-center py-20 px-4 md:px-12 mb-10">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl px-12 py-3 mb-16 shadow-lg">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-wider">Contact me</h2>
      </div>

      <div className="w-full max-w-4xl bg-[#1e1538]/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-12 shadow-2xl relative">
        <h3 className="text-3xl md:text-4xl font-bold text-teal-400 mb-3 text-center tracking-wide">Contact me</h3>
        <p className="text-teal-400/80 text-sm md:text-base mb-8 text-center font-medium">
          Cultivating Connections: Reach Out And Connect With Me 
        </p>

        {/* AREA NOTIFIKASI */}
        {status === 'invalid_email' && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-center animate-pulse">
            <p className="text-red-400 text-sm md:text-base font-semibold">
              Your email is invalid; it must match the standard email format.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-center">
            <p className="text-red-400 text-sm md:text-base font-semibold">
              System error occurred while sending your message. Please try again later.
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="mb-8 p-4 bg-teal-500/10 border border-teal-500/50 rounded-lg text-center animate-pulse">
            <p className="text-teal-400 text-sm md:text-base font-semibold">
              Your message has been sent successfully. Please allow 1-2 business days for a response.
            </p>
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name (Optional)" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-teal-300 placeholder-teal-600/70 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors" 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email (Mandatory)" 
              required
              className={`w-full bg-white/5 border rounded-lg px-5 py-4 text-teal-300 placeholder-teal-600/70 focus:outline-none transition-colors ${status === 'invalid_email' ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'}`} 
            />
            <input 
              type="text" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-teal-300 placeholder-teal-600/70 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors" 
            />
            
            <div className="relative w-full">
               <select 
                 name="service"
                 value={formData.service}
                 onChange={handleChange}
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-teal-600/70 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors appearance-none cursor-pointer"
               >
                 <option value="" disabled hidden>Service Of Interest</option>
                 <option value="web" className="bg-[#1e1538] text-teal-300">Web Development</option>
                 <option value="ai" className="bg-[#1e1538] text-teal-300">AI / Machine Learning</option>
                 <option value="other" className="bg-[#1e1538] text-teal-300">Other</option>
               </select>
               <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-teal-600/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
               </div>
            </div>

            <input 
              type="text" 
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="Timeline (Optional)" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-teal-300 placeholder-teal-600/70 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors" 
            />
            <textarea 
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Project Details..." 
              rows="4" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-teal-300 placeholder-teal-600/70 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-gradient-to-b from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold py-2.5 px-14 rounded-xl transition-all duration-300 transform shadow-[0_0_15px_rgba(34,211,238,0.4)] ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-100' : 'hover:scale-105 active:scale-95'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}