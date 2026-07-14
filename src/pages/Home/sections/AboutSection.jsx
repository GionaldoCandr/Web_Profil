import React from 'react';

// core skill images
import gambarCoreSkill1 from '../assets/AboutMeGambar/CoreSkill/cpp.png';
import gambarCoreSkill2 from '../assets/AboutMeGambar/CoreSkill/java.png';
import gambarCoreSkill3 from '../assets/AboutMeGambar/CoreSkill/py.png';
import gambarCoreSkill4 from '../assets/AboutMeGambar/CoreSkill/sql.png';
import gambarCoreSkill5 from '../assets/AboutMeGambar/CoreSkill/supabase.png';

// area image
import gambarArea1 from '../assets/AboutMeGambar/area/cloudflare.png';
import gambarArea2 from '../assets/AboutMeGambar/area/Vector.png';
import gambarArea3 from '../assets/AboutMeGambar/area/vs.png';

// edukasi image
import gambarEdukasi1 from '../assets/AboutMeGambar/edukasi/pf.png';
import gambarEdukasi2 from '../assets/AboutMeGambar/edukasi/uper.png';

// Organisasi
import gambarOrgan1 from '../assets/AboutMeGambar/Organisasi/hmik.png';
import gambarOrgan2 from '../assets/AboutMeGambar/Organisasi/sobi.png';

import { aboutDetailsData } from '../../../data/aboutData';

export default function AboutSection({ onViewDetail }) {
  
  const cardImages = [
    [gambarCoreSkill1, gambarCoreSkill2, gambarCoreSkill3, gambarCoreSkill4, gambarCoreSkill5], // Index 0
    [gambarEdukasi1, gambarEdukasi2],
    [gambarOrgan1, gambarOrgan2], 
    [gambarArea1, gambarArea2, gambarArea3]
  ];

  return (
    <section id="about-me" className="relative z-10 w-full flex flex-col items-center py-20 px-4">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl px-12 py-3 mb-16 shadow-lg">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-wider">About me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {aboutDetailsData.map((item, index) => (
          <div key={item.id} className="bg-[#1e1538]/60 backdrop-blur-[12px] border border-white/10 rounded-[32px] p-8 flex flex-col items-center justify-between shadow-2xl h-[280px]">
            <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
            
            <div className="flex justify-center gap-4 flex-wrap flex-grow content-center w-full">
              {/* Mapping gambar aslinya berdasarkan index card */}
              {cardImages[index] && cardImages[index].map((imgSrc, idx) => (
                <img 
                  key={idx} 
                  src={imgSrc} 
                  alt={`${item.title} icon ${idx + 1}`} 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-md hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>

            <button 
              onClick={() => onViewDetail(index)}
              className="mt-6 border border-white/30 text-white hover:bg-white/10 transition-colors py-2 px-6 rounded-full text-sm font-medium flex items-center gap-2"
            >
              View Details &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}