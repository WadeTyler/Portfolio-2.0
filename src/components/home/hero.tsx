import React from 'react';
import {AuroraBackground} from "@/components/ui/aurora-background";
import JumpToExpertiseButton from "@/components/JumpToExpertiseButton";

const Hero = () => {

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <AuroraBackground className="gap-8 relative flex items-center justify-center min-h-screen px-4 lg:p-16 md:p-8 p-4">
          <h1 className="md:text-9xl text-5xl text-foreground font-bold animate-fade-in">TYLER WADE</h1>
          <p className="text-2xl font-bold animate-fade-in">SOFTWARE ENGINEER & WEB DEVELOPER</p>
        <JumpToExpertiseButton />

      </AuroraBackground>
    </div>
  );
};

export default Hero;