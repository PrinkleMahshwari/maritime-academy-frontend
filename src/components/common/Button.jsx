import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = "px-6 py-2 rounded-lg font-medium transition duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-gold text-navyBlue font-bold hover:opacity-90",
    secondary: "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navyBlue",
    outline: "border border-darkGray text-darkGray hover:bg-lightBlue"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;