import React from "react";
import HeroSection from "../../components/home/HeroSection";
import StatsSection from "../../components/home/StatsSection";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section (YACHT Branding) */}
      <HeroSection />

      {/* 2. Stats Section (150+ Projects, etc.) */}
      <StatsSection />
    </div>
  );
};

export default HomePage;