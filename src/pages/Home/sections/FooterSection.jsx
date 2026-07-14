import React from 'react';

export default function FooterSection({ onLogoClick }) {
  return (
    <section className="relative z-10 w-full flex flex-col items-center pt-10 mt-10">
      <div className="w-full max-w-5xl px-4 md:px-12 mb-24">
        <div className="bg-[#1e1538]/40 backdrop-blur-xl border border-white/10 rounded-[24px] p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide">Let's Connect</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Thanks for exploring my portfolio. If you'd like to collaborate, discuss ideas, or just say hello, feel free to reach out.
          </p>
        </div>
      </div>

      <footer className="w-full bg-[#030208]/90 border-t border-white/5 pt-16 pb-8 flex flex-col items-center z-20">
        
        <div 
          className="flex items-center gap-3 mb-6 cursor-pointer group"
          onClick={onLogoClick}
          title="Back to Intro Page"
        >
          <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-indigo-900 text-xl shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10 transition-transform duration-500 group-hover:rotate-12 flex-shrink-0">
            GC
          </div>
          
          <div className="relative h-7 flex items-center transition-[width] duration-500 ease-in-out w-[40px] group-hover:w-[245px] overflow-hidden">
            <span className="absolute left-0 font-bold text-xl tracking-wider text-white transition-all duration-500 transform group-hover:-translate-y-8 opacity-100 group-hover:opacity-0">
              GIO
            </span>
            <span className="absolute left-0 font-bold text-[18px] tracking-wide text-white transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap">
              Gionaldo Chandrawansah
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-sm font-medium mb-6">Check out my socials below!</p>

        <div className="flex gap-4 mb-16">
          <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        <p className="text-gray-500 text-xs text-center font-medium">
          &copy; {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Gionaldo Chandrawansah</span> All Rights Reserved
        </p>
      </footer>
    </section>
  );
}