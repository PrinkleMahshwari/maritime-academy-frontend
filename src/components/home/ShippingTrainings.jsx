import React from 'react';
import trainingYacht from '../../assets/02.png'; 

const ShippingTrainings = () => {
  const trainingDays = [
    {
      day: "Day 1",
      title: "Maritime & Training",
      points: [
        "THIS ENCOMPASSES TRAINING PROGRAMS FOR INDIVIDUAL",
        "THIS INVOLVES SPECIALIZED TRAINING FOR INDIVIDUALS WHO OPERATE SHIPS,"
      ]
    },
    {
      day: "Day 2",
      title: "Ship & Handling",
      points: [
        "THIS REFERS TO TRAINING FOR SAILORS, COVERING SKILLS LIKE KNOT TYING, SAIL.",
        "CONDITIONS, DOCKING AND UNDOCKING PROCEDURES HANDLING EMERGENCIES,"
      ]
    },
    {
      day: "Day 3",
      title: "Drying and Milling",
      points: [
        "THIS REFERS TO TRAINING FOR SAILORS, COVERING SKILLS LIKE KNOT TYING, SAIL.",
        "SUCH TRAINING IS ESSENTIAL FOR THOSE INVOLVED IN SAILING VESSELS LIKE YACHTS."
      ]
    },
    {
      day: "Day 4",
      title: "Sailor & Training",
      points: [
        "THIS INCLUDES COURSES AND DRILLS RELATED TO SAFETY PROCEDUR ONBOARD SHIPS.",
        "THIS FOCUSES ON TEACHING INDIVIDUALS HOW TO AND NAVIGATE SHIPS USING SHIPS."
      ]
    },
    {
      day: "Day 5",
      title: "Maritime & Safety",
      points: [
        "THIS INVOLVES TRAINING FOR ENGINEERS AND TECHNICIANS RESPONSIBLE.",
        "MACHINERY, INCLUDING ENGINES, PROPULSION SYSTEMS, ELECTRICAL SYSTEMS, AND"
      ]
    }
  ];

  return (
    <div 
      className="relative w-full min-h-screen lg:h-[105vh] lg:min-h-[800px] text-white pt-12 pb-12 lg:pb-0 px-6 md:px-16 bg-cover bg-center bg-no-repeat flex flex-col justify-between overflow-hidden select-none"
      style={{ backgroundImage: `url(${trainingYacht})` }}
    >
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-widest text-white uppercase whitespace-nowrap">
            SHIPPING TRANNINGS
          </h2>
          <div className="h-[2px] bg-cyan-400 w-full max-w-[280px]"></div>
        </div>
      </div>

      {/* ⚓ 🌊 Timeline Tracker: Mobile par static spacing, Desktop par absolute bottom position */}
      <div className="relative mt-12 lg:mt-0 lg:absolute lg:bottom-2 lg:left-0 lg:right-0 w-full lg:px-16 z-20">
        <div className="max-w-7xl mx-auto w-full relative">
          
          {/* Main Horizontal Timeline Line (Only on Desktop) */}
          <div className="absolute top-[34px] left-8 right-8 h-[1.5px] bg-slate-300/60 hidden lg:block pointer-events-none"></div>

          {/* 5 Cards Grid: Mobile par 1 column, Tablets par 2, Laptops par 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
            {trainingDays.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                
                {/* Day Label */}
                <span className="text-slate-200 font-sans font-semibold text-xs md:text-sm mb-2 text-center block">
                  {item.day}
                </span>

                {/* Node Dot */}
                <div className="flex justify-center items-center w-full mb-5 relative">
                  <div className="h-[14px] w-[14px] rounded-full bg-white border-[3px] border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-30"></div>
                </div>

                {/* Description Card with Responsive Auto-Height */}
                <div className="bg-[#04121f]/95 lg:bg-[#04121f]/90 border border-slate-800/80 p-4 rounded-sm shadow-2xl w-full min-h-[180px] lg:min-h-[230px] max-w-[320px] sm:max-w-none flex flex-col justify-start backdrop-blur-sm">
                  
                  {/* Card Title */}
                  <h3 className="text-sm md:text-base font-sans font-bold text-white mb-4 tracking-wide text-left">
                    {item.title}
                  </h3>
                  
                  {/* Points Content */}
                  <div className="space-y-3 flex-1 pt-2 border-t border-slate-800/50">
                    {item.points.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-[5px] shrink-0"></span>
                        <p className="text-slate-400 text-[10px] font-sans font-medium leading-relaxed tracking-wide uppercase">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShippingTrainings;