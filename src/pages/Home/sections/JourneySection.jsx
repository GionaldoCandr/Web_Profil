import React from 'react';
import { journeyDetailsData } from '../../../data/journeyData';

// 2d ilustration
import illustration2D from '../../../assets/2d/TEchnology.svg';

// image semester
import gambars1 from '../assets/JourneyGambar/s1.png';
import gambars2 from '../assets/JourneyGambar/s2.png';
import gambars3 from '../assets/JourneyGambar/s3.png';
import gambars4 from '../assets/JourneyGambar/s4.png';
// Gambar s5 tidak di-import karena akan menggunakan teks "COMING SOON"

export default function JourneySection({ onViewJourneyDetail }) {
  
  const projectImages = [gambars1, gambars2, gambars3, gambars4];

  const timelineData = [
    { title: 'Semester 1', desc: 'Foundational Logic, Mathematics, and Computational Thinking', descTop: false },
    { title: 'Semester 2', desc: 'Fundamental Programming and System Operations', descTop: true },
    { title: 'Semester 3', desc: 'Core Software Architecture and Data Management', descTop: false },
    { title: 'Semester 4', desc: 'Advanced Systems, Software Engineering, and Artificial Intelligence', descTop: true },
    { title: 'Semester 5', desc: 'COMING SOON', descTop: false },
  ];

  return (
    <section id="journey" className="relative z-10 w-full flex flex-col items-center py-20 px-4 md:px-12">
      
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl px-12 py-3 mb-16 shadow-lg">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-wider">Journey</h2>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 mb-16">
        
        <div className="w-64 h-64 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shrink-0 flex items-center justify-center p-4 shadow-xl">
           <img 
             src={illustration2D} 
             alt="Technology Illustration" 
             className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500" 
           />
        </div>

        <div className="flex-grow w-full bg-[#836cb1] border border-white/20 rounded-[40px] p-6 shadow-2xl h-[300px] flex flex-col">
          <h3 className="text-white font-black text-center text-xl tracking-widest mb-4">TIMELINE</h3>
          
          <div className="flex-grow bg-[#a496c2] rounded-[24px] w-full relative flex items-center px-4 md:px-8 overflow-hidden">
            
            <div className="absolute left-4 right-4 md:left-8 md:right-8 h-[2px] bg-white/60 z-0"></div>

            <div className="w-full flex justify-between items-center relative z-10">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center w-[100px] group">
                  
                  <span className={`absolute font-black text-blue-600 drop-shadow-md text-sm md:text-lg transition-transform duration-300 group-hover:scale-110 ${item.descTop ? 'top-6' : '-top-10'}`}>
                    {item.title}
                  </span>

                  <div className={`absolute w-[2px] bg-white/70 h-8 md:h-10 transition-all duration-500 ${item.descTop ? 'bottom-3' : 'top-3'}`}>
                    <div className={`absolute w-1.5 h-1.5 rounded-full bg-white left-1/2 -translate-x-1/2 ${item.descTop ? 'top-0' : 'bottom-0'}`}></div>
                  </div>

                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-400 border-[3px] border-[#836cb1] shadow-[0_0_10px_rgba(34,211,238,0.8)] relative z-10 group-hover:scale-125 transition-transform duration-300"></div>

                  <div className={`absolute w-[120px] md:w-[150px] text-center text-[10px] md:text-xs text-gray-800 font-bold ${item.descTop ? 'bottom-12 md:bottom-16' : 'top-12 md:top-16'}`}>
                    {item.desc}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl overflow-x-auto pb-8 pt-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        <div className="flex gap-6 md:gap-8 w-max pr-8">
          {journeyDetailsData.map((item, index) => {
            const isSemester5 = index === 4;

            return (
              <div key={item.id} className="relative w-[300px] md:w-[350px] shrink-0 mt-4 group">
                <div className="bg-[#1e1538]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 pt-16 shadow-2xl h-[250px] flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-2">
                  
                  <div className="absolute top-0 left-0 bg-[#1e1538]/90 backdrop-blur-xl border-t border-l border-white/10 h-16 w-3/5 rounded-tl-[32px] rounded-br-[32px] z-20 flex items-center px-6">
                    <h4 className="text-white font-bold text-lg md:text-xl">{item.title}</h4>
                  </div>
                  
                  {!isSemester5 && (
                    <button 
                      onClick={() => onViewJourneyDetail(index)}
                      className="absolute -top-4 right-4 z-30 w-12 h-12 bg-gradient-to-tr from-cyan-500 to-cyan-300 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    >
                      <svg className="w-6 h-6 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  )}

                  <div className="flex-grow rounded-[20px] w-full mt-2 flex items-center justify-center overflow-hidden relative border border-white/5">
                    {isSemester5 ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-black/20 rounded-[20px]">
                        <span className="text-cyan-400/80 font-black tracking-widest text-xl animate-pulse">COMING SOON</span>
                        <span className="text-gray-400 text-sm mt-2 font-medium">Currently in Progress</span>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={projectImages[index]} 
                          alt={`Proyek ${item.title}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                      </>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}