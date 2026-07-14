import React, { useState, useEffect } from 'react';
import profilImg from './assets/poto-profil.png';

export default function IntroPage({ onNavigate }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigateClick = () => {
    setIsExiting(true); 
    setTimeout(() => {
      onNavigate(); 
    }, 500); 
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0715] text-white font-sans">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[500px] bg-gradient-to-r from-blue-900/20 via-cyan-500/20 to-blue-900/20 rounded-[100%] blur-3xl opacity-50 transform -rotate-12 pointer-events-none"></div>
      
      <div className="absolute top-1/3 left-0 w-full h-[300px] border-t-[3px] border-cyan-400/30 rounded-[100%] origin-center transform -rotate-[10deg] blur-[2px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-[300px] border-t-[3px] border-blue-500/20 rounded-[100%] origin-center transform rotate-[5deg] blur-[2px] pointer-events-none"></div>

      <div 
        className={`relative z-10 w-full max-w-2xl px-4 mt-20 transition-all duration-500 ease-in-out transform ${
          isMounted && !isExiting 
            ? 'opacity-100 translate-y-0 scale-100'
            : isExiting 
            ? 'opacity-0 -translate-y-12 scale-95' 
            : 'opacity-0 translate-y-12 scale-95'  
        }`}
      >
        <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-[32px] p-8 pt-24 text-center relative shadow-2xl">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-56 bg-gray-500 rounded-t-[100px] rounded-b-3xl overflow-hidden border border-white/10 shadow-lg flex items-center justify-center">
             <div className="relative z-20 w-full h-full">
              <img 
                src={profilImg} 
                alt="Foto Gionaldo Candrawansah" 
                className="w-full h-full object-cover rounded-t-[100px] border border-white/10 shadow-lg"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mt-8 mb-4 tracking-wide">
            Hi, I'm Gionaldo Candrawansah
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium mb-8 max-w-xl mx-auto leading-relaxed">
            As a computer science student, I am deeply exploring the true meaning and impact of technology.
          </p>
          
          <button 
            onClick={handleNavigateClick} 
            className="bg-gradient-to-b from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            More Information
          </button>
        </div>
      </div>
    </div>
  );
}