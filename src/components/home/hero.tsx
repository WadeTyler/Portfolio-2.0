import React from 'react';
import {AuroraBackground} from "@/components/ui/aurora-background";
import JumpToExpertiseButton from "@/components/JumpToExpertiseButton";

const Hero = () => {

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <AuroraBackground className="gap-8 relative flex items-center justify-center min-h-screen px-4 lg:p-16 md:p-8 p-4">
          <h1 className="lg:text-9xl md:text-6xl text-5xl text-foreground font-bold animate-fade-in text-center">TYLER WADE</h1>
          <p className="md:text-2xl text-xl font-bold animate-fade-in text-center">SOFTWARE ENGINEER & WEB DEVELOPER</p>
        <JumpToExpertiseButton />

      </AuroraBackground>
    </div>
  );
};

export default Hero;