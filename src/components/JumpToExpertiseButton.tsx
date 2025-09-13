"use client";

import {motion} from "framer-motion";
import {IconArrowNarrowDown} from "@tabler/icons-react";
import React from "react";

export default function JumpToExpertiseButton() {

  const jumpToExpertise = () => {
    const expertiseElement = document.getElementById("expertise");
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
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
  )
}