import React from "react";
import HeroSection from "../../components/home/HeroSection";
import StatsSection from "../../components/home/StatsSection";
import ShippingTrainings from "../../components/home/ShippingTrainings";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section (YACHT Branding) */}
      <HeroSection />

      
  <ShippingTrainings />
      <StatsSection />
    </div>
  );
};

export default HomePage;