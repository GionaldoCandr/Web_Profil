import React, { useState, useEffect } from 'react';


import { supabase } from '../../supabaseClient';

export default function CvRequestPage({ onBack }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const [status, setStatus] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack();
    }, 500);
  };

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

    const { error } = await supabase
      .from('form_submissions')
      .insert([
        {
          form_type: 'cv_request',
          name: formData.name || null,
          email: formData.email,
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error("Gagal menyimpan ke database:", error);
      setStatus('error');
      return;
    }

    setStatus('success');
    
    setFormData({ name: '', email: '' });

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0715] text-white font-sans">
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[500px] bg-gradient-to-r from-blue-900/10 via-cyan-500/10 to-blue-900/10 rounded-[100%] blur-3xl transform rotate-12 pointer-events-none transition-opacity duration-700 ${isMounted && !isExiting ? 'opacity-40' : 'opacity-0'}`}></div>
      
      <div className={`relative z-10 w-full max-w-4xl px-4 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform ${
        isMounted && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
      }`}>
        <div className="bg-[#1e1538]/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 tracking-wide">
            My Curriculum Vitae
          </h2>
          <p className="text-teal-400/80 text-sm md:text-base mb-8 max-w-lg mx-auto">
            Please Enter Your Name And Email To Request A Copy Of My CV.<br/>
            This Step Ensures Website Security And Prevents Automated Spam.
          </p>

          {status === 'invalid_email' && (
            <div className="mb-8 p-3 max-w-lg mx-auto bg-red-500/10 border border-red-500/50 rounded-lg animate-pulse">
              <p className="text-red-400 text-sm font-semibold">
                Your email is invalid; it must match the standard email format.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 p-3 max-w-lg mx-auto bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm font-semibold">
                System error occurred while sending your request. Please try again later.
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="mb-8 p-3 max-w-lg mx-auto bg-teal-500/10 border border-teal-500/50 rounded-lg animate-pulse">
              <p className="text-teal-400 text-sm font-semibold">
                 Your request has been sent successfully. Please allow 1-2 business days for a response.
              </p>
            </div>
          )}

          <form className="max-w-2xl mx-auto space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="flex-1">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name (Optional)" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-teal-600/50 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                />
              </div>
              <div className="flex-1">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email (Mandatory)" 
                  required
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-teal-600/50 focus:outline-none transition-colors ${status === 'invalid_email' ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'}`}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-b from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold py-2.5 px-12 rounded-xl transition-all duration-300 transform shadow-[0_0_15px_rgba(34,211,238,0.4)] ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-100' : 'hover:scale-105 active:scale-95'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

      {/* Tombol Back */}
      <button 
        onClick={handleBackClick}
        className={`absolute bottom-8 left-8 md:bottom-12 md:left-12 border border-white/30 text-white hover:bg-white/10 transition-all duration-500 py-2 px-8 rounded-full text-sm font-medium cursor-pointer ${
          isMounted && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        Back
      </button>
    </div>
  );
}