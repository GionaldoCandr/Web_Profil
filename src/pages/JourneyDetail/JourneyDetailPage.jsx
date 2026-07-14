import React, { useState, useEffect } from 'react';
import { journeyDetailsData } from '../../data/journeyData';

import gambars1 from '../Home/assets/JourneyGambar/s1.png';
import gambars2 from '../Home/assets/JourneyGambar/s2.png'; 
import gambars3 from '../Home/assets/JourneyGambar/s3.png';
import gambars4 from '../Home/assets/JourneyGambar/s4.png';

import animforS1 from '../../assets/2d/Technology.webm'; 
import animforS2 from '../../assets/2d/blockchain.webm'; 
import animforS3 from '../../assets/2d/aibrain.webm'; 
import animforS4 from '../../assets/2d/Live.webm'; 

export default function JourneyDetailPage({ initialIndex, onBack }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const currentData = journeyDetailsData[activeIndex];

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

  const projectImages = [gambars1, gambars2, gambars3, gambars4];
  
  const circleAnimations = [animforS1, animforS2, animforS3, animforS4];

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-8 pb-12 px-4 md:px-12 bg-[#0a0715] text-white font-sans overflow-hidden">
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[500px] bg-gradient-to-r from-blue-900/10 via-cyan-500/10 to-blue-900/10 rounded-[100%] blur-3xl transform rotate-12 pointer-events-none transition-opacity duration-700 ${isMounted && !isExiting ? 'opacity-40' : 'opacity-0'}`}></div>

      <div className={`w-full max-w-7xl flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform ${
        isMounted && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
      }`}>

        <div className="flex justify-center mb-12 relative z-10 w-full">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl px-16 py-3 shadow-lg">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-wider">Journey</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full relative z-10 h-auto md:h-[calc(100vh-200px)]">
          
          <div className="w-full md:w-1/3 flex flex-col gap-6 overflow-y-auto pb-8 pr-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {journeyDetailsData.map((item, index) => {
              const isSemester5 = index === 4;

              return (
                <div key={item.id} className={`bg-[#1e1538]/60 backdrop-blur-[16px] border ${activeIndex === index ? 'border-cyan-400' : 'border-white/10'} rounded-[32px] p-6 shadow-2xl flex flex-col transition-all duration-300 flex-shrink-0`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{item.title}</h3>
                    <button 
                      onClick={() => setActiveIndex(index)}
                      className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-cyan-300 rounded-full flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.5)] flex-shrink-0 cursor-pointer"
                    >
                      <svg className="w-6 h-6 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="w-full h-32 md:h-40 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden relative group">
                    {isSemester5 ? (
                      <div className="w-full h-full bg-black/20 flex items-center justify-center">
                        <span className="text-cyan-400/80 font-black tracking-widest animate-pulse">COMING SOON</span>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={projectImages[index]} 
                          alt={`Project ${item.title}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                      </>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-8 h-full">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center sm:items-start justify-center">
              
              <div className="w-full sm:w-[350px] bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-[#b07d6a] flex-shrink-0">
                <div className="bg-[#7193a0] py-2 text-center text-xs font-bold text-[#1e1538]">SEMESTER {activeIndex + 1}</div>
                <div className="bg-[#8ab3c1] py-1 text-center text-[10px] font-bold text-[#1e1538] border-b border-gray-400">MATA KULIAH</div>
                <div className="bg-white p-4 h-[180px] overflow-y-auto" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  {activeIndex === 4 ? (
                    <div className="h-full flex items-center justify-center text-gray-500 font-bold tracking-widest text-lg animate-pulse">COMING SOON</div>
                  ) : (
                    <ul className="text-xs text-blue-900 leading-tight space-y-2">
                      {currentData.courses.map((course, idx) => (
                        <li key={idx} className="underline decoration-blue-900/40 underline-offset-2">{course}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex-shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.2)] border-4 border-white/10 overflow-hidden relative bg-[#1e1538]/50 flex items-center justify-center">
                {activeIndex === 4 ? (
                  <span className="text-cyan-400/50 font-bold text-xs animate-pulse tracking-wider">SOON</span>
                ) : (
                  <video 
                    key={activeIndex} 
                    src={circleAnimations[activeIndex]} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-90 scale-110"
                  />
                )}
              </div>

            </div>

            <div className="bg-gradient-to-br from-[#1c324a]/90 to-[#1a2035]/90 backdrop-blur-xl border border-cyan-400/40 rounded-[24px] p-6 md:p-8 shadow-2xl flex-grow flex flex-col min-h-[250px]">
              {activeIndex === 4 ? (
                <div className="flex-grow flex items-center justify-center">
                  <h3 className="text-3xl md:text-5xl font-black text-cyan-400/80 tracking-widest animate-pulse">COMING SOON</h3>
                </div>
              ) : (
                <div className="text-sm md:text-base font-light text-gray-200 leading-relaxed overflow-y-auto" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  <p className="font-semibold text-cyan-300 mb-3 text-lg">{currentData.descTitle}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {currentData.descBullets.map((bullet, idx) => (
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
              )}
              
              <div className="mt-8 flex justify-center mt-auto">
                <button 
                  onClick={handleBackClick} 
                  className="border border-white/30 text-white hover:bg-white/10 transition-colors py-2.5 px-16 rounded-full text-sm font-medium cursor-pointer"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}