'use client';
import {motion} from 'framer-motion';
import React from 'react';

const Education = () => {
  return (
    <div className="w-full flex flex-col items-center lg:p-16 md:p-8 p-4 gap-8">

      <motion.h2
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
        className="text-4xl font-semibold w-full text-center"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 0.5}}
        className="max-w-[80rem] gap-8 flex flex-col"
      >
        <div className="flex md:flex-row flex-col justify-between md:gap-12 w-full">
          <div className="">
            <h5 className="font-bold">University of Maryland, Global Campus</h5>
            <h6 className="italic text-zinc-300">Bachelor in Computer Science; Minor in Web & Digital Design</h6>
          </div>

          <p className="italic text-zinc-600">Dec 2023 - Aug 2025</p>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:gap-12 w-full">
          <div className="">
            <h5 className="font-bold">College of Southern Maryland</h5>
            <h6 className="italic text-zinc-300">Associate in Computer Science</h6>
          </div>

          <p className="italic text-zinc-600">Aug 2021 - Feb 2024</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Education;