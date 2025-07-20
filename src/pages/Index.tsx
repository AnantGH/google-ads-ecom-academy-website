import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SuccessStories from "@/components/SuccessStories";
import Reviews from "@/components/Reviews";
import OurStudents from "@/components/OurStudents";
import ProcessSteps from "@/components/ProcessSteps";
import WhatIncluded from "@/components/WhatIncluded";
import OurMentor from "@/components/OurMentor";
import Podcast from "@/components/Podcast";
import FAQs from "@/components/FAQs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SuccessStories />
      <Reviews />
      <OurStudents />
      <ProcessSteps />
      <WhatIncluded />
      <OurMentor />
      <Podcast />
      <FAQs />
    </div>
  );
};

export default Index;
