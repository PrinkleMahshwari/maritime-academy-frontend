import React from 'react';

const StatsSection = () => {
  const statsData = [
    { number: "150+", label: "PROJECTS DELIVERED" },
    { number: "50+", label: "HAPPY CLIENTS" },
    { number: "1,000 M", label: "SOCIAL MEDIA BASE" },
    { number: "25+", label: "YEARS EXPERIENCE" }
  ];

  return (
    <div className="bg-[#021526] text-white py-16 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Official Typography Mapping */}
        <div className="flex items-center gap-4 mb-12 select-none">
          <h2 className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white uppercase whitespace-nowrap">
            LET'S NUMBERS SPEAK!
          </h2>
          <div className="h-[1.5px] bg-cyan-400 w-full max-w-[250px] opacity-70"></div>
        </div>

        {/* Minimalist Grid Layout - Light & Elegant Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left pt-2">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start select-none">
              
              {/* Numbers with Inter font-sans fallback */}
              <span className="text-4xl md:text-5xl font-sans font-medium tracking-wide text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {stat.number}
              </span>
              
              {/* Distinctive Neon Cyan Small Text Label */}
              <span className="text-[10px] md:text-xs font-sans font-semibold text-cyan-400 tracking-[0.2em] uppercase opacity-90">
                {stat.label}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StatsSection;