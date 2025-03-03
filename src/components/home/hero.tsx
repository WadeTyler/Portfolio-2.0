'use client';
import React from 'react';
import {AuroraBackground} from "@/components/ui/aurora-background";
import {motion} from 'framer-motion';
import {IconArrowNarrowDown} from "@tabler/icons-react";

const Hero = () => {


  const jumpToExpertise = () => {
    const expertiseElement = document.getElementById("expertise");
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <AuroraBackground className="gap-8 relative flex items-center justify-center min-h-screen px-4 lg:p-16 md:p-8 p-4">

        <motion.div
          className="text-center space-y-6 relative z-10"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{ once: true }}
          transition={{duration: 0.5}}
        >
          <h1 className="md:text-9xl text-5xl text-foreground font-bold">TYLER WADE</h1>
        </motion.div>

        <motion.div
          className="text-center space-y-6 relative z-10"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true}}
          transition={{duration: 0.5, delay: 0.5}}
        >
          <h2 className="text-2xl font-bold">SOFTWARE ENGINEER & WEB DEVELOPER</h2>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center"
          initial={{opacity: 0, y: 20, x: '-50%'}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true}}
          transition={{duration: 0.5, delay: 1}}
        >
          <button
            onClick={jumpToExpertise}
            className={`w-10 h-16 rounded-full border-2 border-foreground flex items-center justify-center animate-bounce hover:border-accent duration-300 group`}
          >
            <IconArrowNarrowDown className="w-full h-full text-accent group-hover:text-foreground duration-300" />
          </button>
        </motion.div>

      </AuroraBackground>
    </div>
  );
};

export default Hero;