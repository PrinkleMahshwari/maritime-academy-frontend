import React from 'react';
import heroBg from '../../assets/hero-bg.jpg.png'; 

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-[95vh] flex items-center justify-start px-6 md:px-20 overflow-hidden bg-cover bg-[center_top_2%] bg-no-repeat select-none"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background Dark Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/90 via-[#021526]/50 to-transparent pointer-events-none"></div>

      {/* Cyber Neon Glow behind typography */}
      <div className="absolute top-1/3 left-12 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 text-left flex flex-col items-start pt-16 md:pt-0">
          
          {/* Sub-heading exactly matching the screenshot style */}
          <span className="text-cyan-400 text-xs font-sans font-bold uppercase tracking-[0.45em] mb-3 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">
            MOONLIGHT LOUNGE PRESENTS
          </span>
          
          {/* Main Title Layout with Image Overlapping Properties */}
          <div className="relative mb-6">
            {/* Massive YACHT Headline */}
            <h1 className="text-7xl md:text-[9.5rem] font-serif font-black tracking-wider leading-none m-0 text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 via-cyan-400 to-cyan-600 drop-shadow-[0_0_45px_rgba(6,182,212,0.5)]">
    YACHT
  </h1>
     
            {/* Cursive Overlapping "Night" Fluid Asset */}
            <span className="absolute left-[15%] bottom-[-49px] text-5xl md:text-8xl font-cursive text-cyan-200 tracking-widest drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] font-light">
              Night
            </span>
          </div>
          
          {/* Padding adjust to clear space from overlapping cursive text */}
          <p className="text-cyan-50/70 text-sm md:text-base max-w-md mt-8 mb-10 font-sans font-light leading-relaxed tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Explore global maritime training courses, professional yacht handling, and world-class shipping services approved globally[cite: 15, 98].
          </p>
  
          {/* UI Action Triggers */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto z-20">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-[#021526] font-sans font-bold px-8 py-3.5 rounded-md shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:opacity-95 transition-all duration-300 transform active:scale-95 text-xs uppercase tracking-wider cursor-pointer">
              Explore Trainings
            </button>
            <button className="bg-transparent border border-cyan-400/40 text-cyan-300 font-sans font-medium px-8 py-3.5 rounded-md backdrop-blur-sm hover:bg-cyan-500/10 transition-all duration-300 transform active:scale-95 text-xs uppercase tracking-wider cursor-pointer">
              Book Location
            </button>
          </div>
        </div>

        {/* Empty placeholder for yacht alignment block */}
        <div className="lg:col-span-5 hidden lg:block"></div>

      </div>

      {/* 🌊 Bottom Seamless Blend Overlay to merge with StatsSection seamlessly */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#021526] via-[#021526]/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;