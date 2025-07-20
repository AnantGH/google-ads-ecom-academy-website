import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SuccessStories from "@/components/SuccessStories";
import ProcessSteps from "@/components/ProcessSteps";
import WhatIncluded from "@/components/WhatIncluded";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SuccessStories />
      <ProcessSteps />
      <WhatIncluded />
    </div>
  );
};

export default Index;
