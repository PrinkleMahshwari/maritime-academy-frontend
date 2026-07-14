import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import YachtLogo from '../../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin')) {
    return null;
  }

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

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'TRAINING', sectionId: 'training-section' },
    { name: 'TRIP', sectionId: 'trips-section' },
    { name: 'LOCATION', sectionId: 'locations-section' },
    { name: 'CONTACT US', sectionId: 'contact-section' }
  ];

  const handleNavigation = (link) => {
    if (link.name === 'HOME') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToSection: link.sectionId } });
      } else {
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-20 py-4 ${
      isScrolled ? 'bg-[#021526]/80 backdrop-blur-md shadow-lg border-b border-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: Yacht Logo with Vertical Layout */}
        <div 
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col items-center select-none cursor-pointer group"
        >
          <img 
            src={YachtLogo} 
            alt="Yacht Logo" 
            className="h-8 w-auto filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-white font-heading font-black tracking-widest text-sm uppercase mt-1">
            Yacht
          </span>
        </div>

        {/* CENTER/RIGHT: Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => {
            const isHomeActive = link.name === 'HOME' && location.pathname === '/' && !window.scrollY;
            
            return (
              <button
                key={index}
                onClick={() => handleNavigation(link)}
                className="relative font-heading text-xs font-semibold tracking-[0.2em] text-white/80 hover:text-cyan-400 transition-colors duration-300 uppercase pb-1 group bg-transparent border-none cursor-pointer"
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#06b6d4] transition-all duration-300 group-hover:w-full ${
                  isHomeActive ? 'w-full' : ''
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-xl cursor-pointer hover:text-cyan-400 transition-colors">
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
