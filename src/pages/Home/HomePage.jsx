import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import JourneySection from './sections/JourneySection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function HomePage({ onLogoClick, onDownloadCvClick, onViewDetail, onViewJourneyDetail }) {
  const scrollToAboutMe = () => {
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0715] text-white font-sans flex flex-col">
      <nav className="relative z-20 w-full bg-gradient-to-r from-indigo-600/90 via-purple-700/90 to-amber-900/90 backdrop-blur-md rounded-b-[40px] px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg border-b border-white/10">
        
        <div 
          className="flex items-center gap-3 mb-4 md:mb-0 cursor-pointer group"
          onClick={onLogoClick}
        >
          <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-indigo-900 text-lg shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10 transition-transform duration-500 group-hover:rotate-12 flex-shrink-0">
            GC
          </div>
          
          <div className="relative h-6 flex items-center transition-[width] duration-500 ease-in-out w-[35px] group-hover:w-[220px] overflow-hidden">
            <span className="absolute left-0 font-bold text-lg tracking-wider text-white transition-all duration-500 transform group-hover:-translate-y-8 opacity-100 group-hover:opacity-0">
              GIO
            </span>
            <span className="absolute left-0 font-bold text-[17px] tracking-wide text-white transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap">
              Gionaldo Chandrawansah
            </span>
          </div>
        </div>

        <div className="flex gap-6 md:gap-10 text-sm font-medium">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-cyan-400 transition-colors">Home</button>
          <button onClick={scrollToAboutMe} className="hover:text-cyan-400 transition-colors">About me</button>
          <button onClick={scrollToJourney} className="hover:text-cyan-400 transition-colors">Journey</button>
          <button onClick={scrollToContact} className="hover:text-cyan-400 transition-colors">Contact me</button>
        </div>

        <button 
          onClick={onDownloadCvClick}
          className="mt-4 md:mt-0 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md shadow-cyan-500/20"
        >
          Download CV
        </button>
      </nav>

      <HeroSection />

      <div className="absolute top-1/3 left-0 w-full h-[300px] border-t-[3px] border-cyan-400/30 rounded-[100%] origin-center transform -rotate-[10deg] blur-[2px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-[300px] border-t-[3px] border-blue-500/20 rounded-[100%] origin-center transform rotate-[5deg] blur-[2px] pointer-events-none"></div>

      <AboutSection onViewDetail={onViewDetail} />
      <JourneySection onViewJourneyDetail={onViewJourneyDetail} />
      <ContactSection />
      <FooterSection onLogoClick={onLogoClick} />
    </div>
  );
}