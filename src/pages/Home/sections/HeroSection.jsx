import React from 'react';

import profilImg from '../assets/HomePageGambar/poto-profil.png';
import galeri1 from '../assets/HomePageGambar/Gambar-1.png';
import galeri2 from '../assets/HomePageGambar/Gambar-2.png';
import galeri3 from '../assets/HomePageGambar/Gambar-3.png';
import galeri4 from '../assets/HomePageGambar/Gambar-4.png';
import galeri5 from '../assets/HomePageGambar/Gambar-5.png';
import galeri6 from '../assets/HomePageGambar/Gambar-6.png';

export default function HeroSection() {
  const galeriImages = [galeri1, galeri2, galeri3, galeri4, galeri5, galeri6];

  return (
    <>
      <section className="relative flex-grow flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 lg:gap-16 z-10 pt-20">
        <div className="w-[300px] md:w-[350px] shrink-0">
          <div className="bg-[#4b3c75]/80 backdrop-blur-md rounded-[40px] p-4 h-[450px] relative border border-white/10 shadow-2xl flex flex-col items-center justify-end overflow-hidden">
             
             <img 
               src={profilImg} 
               alt="Foto Profil Gionaldo" 
               className="absolute top-8 w-4/5 h-[350px] object-cover rounded-t-[100px] border border-white/10 shadow-lg" 
             />

          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
            Hi, I'm Gionaldo Candrawansah
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-white mb-6 text-center shadow-black drop-shadow-md">
            As a computer science student, I am deeply exploring the true meaning and impact of technology.
          </h2>

          <div className="space-y-4 text-sm md:text-[15px] text-gray-200 leading-relaxed font-light">
            <p>
              I am a fourth-semester Computer Science student at Universitas Pertamina with a strong passion for software development, artificial intelligence, and machine learning. My interest in computer science began in high school, inspired by the rapid advancement of technology and its ability to solve real-world problems. Since then, I have continued to expand my knowledge through academic projects, organizational activities, and continuous self-learning.
            </p>
            <p>
              As a Pertamina Foundation Fully Funded Scholarship Awardee, I strive to maintain academic excellence while actively contributing to student organizations and community initiatives. I have participated in projects related to renewable energy, environmental sustainability, and digital innovation as a member of the Sobat Bumi Awardees community at Universitas Pertamina.
            </p>
            <p>
              I am proficient in Python, C++, Java, and Microsoft Office Suite, with additional experience in data administration, problem-solving, teamwork, and public speaking. I enjoy building practical software solutions, exploring emerging technologies, and continuously improving my technical and interpersonal skills. My goal is to become a software engineer and AI practitioner who develops innovative technologies that create meaningful and sustainable impact for society.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-6 pb-12">
        <div className="flex gap-4 overflow-x-auto pb-4 justify-start md:justify-center" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          
          {galeriImages.map((imgSrc, index) => (
            <img 
              key={index} 
              src={imgSrc}
              alt={`Galeri ${index + 1}`}
              className="min-w-[150px] md:min-w-[200px] h-[100px] md:h-[130px] object-cover rounded-3xl shrink-0 border border-white/10 shadow-lg" 
            />
          ))}

        </div>
      </section>
    </>
  );
}