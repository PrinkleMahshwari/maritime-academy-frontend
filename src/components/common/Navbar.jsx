import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Jab user scroll karega to navbar thoda dark ho jayega taake text clear dikhe
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'TRAINING', 'TRIP', 'LOCATION', 'CONTACT US'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-20 py-4 ${
      isScrolled ? 'bg-[#021526]/80 backdrop-blur-md shadow-lg border-b border-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: Yacht Logo Custom Design */}
        <div className="flex flex-col items-start select-none cursor-pointer group">
          <div className="flex items-center gap-1">
            {/* Tiny sleek vector icon line representing yacht */}
            <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-transform duration-300">🛥️</span>
            <span className="text-white font-heading font-black tracking-widest text-lg uppercase">
              YACHT
            </span>
          </div>
          <span className="text-[7px] text-cyan-400 font-bold tracking-[0.4em] uppercase -mt-1 pl-7 opacity-80">
            Academy
          </span>
        </div>

        {/* CENTER/RIGHT: Modern Minimalist Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`relative font-heading text-xs font-semibold tracking-[0.2em] text-white/80 hover:text-cyan-400 transition-colors duration-300 uppercase pb-1 group`}
            >
              {link}
              {/* Image Match: Custom active/hover neon border effect below text */}
              <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#06b6d4] transition-all duration-300 group-hover:w-full ${
                link === 'HOME' ? 'w-full' : ''
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden text-white text-xl cursor-pointer hover:text-cyan-400 transition-colors">
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;