import React, { useState, useEffect } from 'react';
import { aboutDetailsData } from '../../data/aboutData';

// import core skill image
import gambarCoreSkill1 from '../Home/assets/AboutMeGambar/CoreSkill/cpp.png';
import gambarCoreSkill2 from '../Home/assets/AboutMeGambar/CoreSkill/java.png';
import gambarCoreSkill3 from '../Home/assets/AboutMeGambar/CoreSkill/py.png';
import gambarCoreSkill4 from '../Home/assets/AboutMeGambar/CoreSkill/sql.png';
import gambarCoreSkill5 from '../Home/assets/AboutMeGambar/CoreSkill/supabase.png';

// area image
import gambarArea1 from '../Home/assets/AboutMeGambar/area/cloudflare.png';
import gambarArea2 from '../Home/assets/AboutMeGambar/area/Vector.png';
import gambarArea3 from '../Home/assets/AboutMeGambar/area/vs.png';

// edukasi image
import gambarEdukasi1 from '../Home/assets/AboutMeGambar/edukasi/pf.png';
import gambarEdukasi2 from '../Home/assets/AboutMeGambar/edukasi/uper.png';

// Organisasi
import gambarOrgan1 from '../Home/assets/AboutMeGambar/Organisasi/hmik.png';
import gambarOrgan2 from '../Home/assets/AboutMeGambar/Organisasi/sobi.png';

export default function AboutDetailPage({ initialIndex, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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

  const cardImages = [
    [gambarCoreSkill1, gambarCoreSkill2, gambarCoreSkill3, gambarCoreSkill4, gambarCoreSkill5], // Index 0
    [gambarEdukasi1, gambarEdukasi2], 
    [gambarOrgan1, gambarOrgan2], 
    [gambarArea1, gambarArea2, gambarArea3] 
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutDetailsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aboutDetailsData.length) % aboutDetailsData.length);
  };

  const currentData = aboutDetailsData[currentIndex];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 overflow-x-hidden bg-[#0a0715] text-white font-sans">
      
      {/* efek fade in out*/}
      <div className={`fixed top-1/2 left-[-20%] w-[150%] h-[300px] border-t-2 border-cyan-400/20 rounded-[100%] origin-center transform -translate-y-1/2 -rotate-12 blur-[3px] pointer-events-none transition-opacity duration-700 ${isMounted && !isExiting ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`fixed bottom-1/4 right-[-10%] w-[120%] h-[200px] border-b-[2px] border-cyan-300/20 rounded-[100%] origin-center transform rotate-[5deg] blur-[2px] pointer-events-none transition-opacity duration-700 ${isMounted && !isExiting ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* animasi geser */}
      <div className={`w-full max-w-4xl flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform ${
        isMounted && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
      }`}>

        <div className="flex justify-center mb-8 relative z-10 w-full">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl px-12 py-3 shadow-lg">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-wider">About me</h2>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-12 w-full mb-8 relative z-10">
          <button 
            onClick={handlePrev}
            className="w-16 h-10 md:w-24 md:h-12 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)] flex-shrink-0 cursor-pointer"
          >
            <span className="text-white text-xl md:text-2xl">&larr;</span>
          </button>

          <div className="bg-[#1e1538]/60 backdrop-blur-[16px] border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl flex flex-col items-center w-full max-w-[400px]">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">{currentData.title}</h3>
            
            <div className="flex justify-center gap-4 flex-wrap mb-8 w-full">
              {cardImages[currentIndex] && cardImages[currentIndex].map((imgSrc, idx) => (
                <img 
                  key={idx} 
                  src={imgSrc} 
                  alt={`${currentData.title} icon ${idx + 1}`} 
                  className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>

            <button 
              onClick={handleBackClick} 
              className="border border-white/30 text-white hover:bg-white/10 transition-colors py-2 px-12 rounded-full text-sm font-medium cursor-pointer"
            >
              Back
            </button>
          </div>

          <button 
            onClick={handleNext}
            className="w-16 h-10 md:w-24 md:h-12 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)] flex-shrink-0 cursor-pointer"
          >
            <span className="text-white text-xl md:text-2xl">&rarr;</span>
          </button>
        </div>

        <div className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-[#1c324a]/90 to-[#1a2035]/90 backdrop-blur-xl border border-cyan-400/30 rounded-[24px] p-6 md:p-10 shadow-2xl">
          <h4 className="text-lg md:text-xl font-semibold text-white mb-4">{currentData.header}</h4>
          <ul className="list-disc pl-5 space-y-3 text-gray-200 text-sm md:text-base font-light leading-relaxed">
            {currentData.bullets.map((bullet, idx) => (
              <li key={idx}>
                {bullet.includes(':') ? (
                  <>
                    <span className="font-semibold text-white">{bullet.split(':')[0]}:</span>
                    {bullet.substring(bullet.indexOf(':') + 1)}
                  </>
                ) : (
                  bullet
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}