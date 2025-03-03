'use client';
import {motion} from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatedSpan, Terminal, TypingAnimation} from "@/components/ui/terminal";

const WhatMakesMeDifferent = () => {

  const differenceSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(differenceSection, {threshold: 0.5});

  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (isSectionVisible) {
      setSeen(true);
    }
  }, [isSectionVisible]);

  return (
    <div
      ref={differenceSection}
      className="w-full lg:p-16 md:p-8 p-4 flex justify-center items-center"
    >

      <div className="max-w-[80rem] w-full flex lg:justify-between items-center lg:flex-row flex-col lg:gap-16 md:gap-8 gap-4">

        <div className="w-full flex flex-col lg:gap-8 gap-4">
          <motion.h2
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            className="text-4xl font-semibold text-foreground z-30 lg:text-start text-center"
          >
            What makes me different?
          </motion.h2>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            className="lg:gap-8 gap-4 flex flex-col"
          >
            <h3 className="tracking-widest lg:text-base text-sm">Excels in creating responsive, user-friendly web
              applications, and brings a
              keen eye for detail and a passion for problem-solving to every project. Focused on delivering high-quality
              results and efficient solutions that enhance user experience and drive business success.</h3>

            <h3 className="tracking-widest lg:text-base text-sm">
              Driven by curiosity and a love for problem-solving, constantly exploring new technologies to improve and
              innovate. Believes that great software is not just about code—it’s about crafting intuitive experiences
              that
              users love.
            </h3>
          </motion.div>


        </div>
        {seen && (
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            className="lg:w-fit w-full"
          >

            <Terminal className="min-h-96">
              <TypingAnimation delay={500}>&gt; ./portfolio_check.sh</TypingAnimation>

              <AnimatedSpan delay={1500} className="">
                <span>Initializing system diagnostics...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2000} className="">
                <span>Loading developer profile...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ Verifying backend expertise... (Java, Spring Boot, Node.js)</span>
              </AnimatedSpan>
              <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Verifying frontend skills... (React, Angular, TypeScript, HTML, CSS)</span>
              </AnimatedSpan>
              <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Verifying database experience... (PostgreSQL, MySQL, MongoDB, Redis)</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Inspecting projects... (Learn Norsk, Guided Gospel, ...)</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Evaluating problem-solving skills...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5000} className="text-green-500">
                <span>✔ Confirming deployment knowledge... (Docker, AWS, CI/CD)</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Confirming Degree... (Bachelor&#39;s Degree)</span>
              </AnimatedSpan>

              <TypingAnimation delay={5500} className="">
                Status: All checks passed.
              </TypingAnimation>
              <TypingAnimation delay={6500} className="text-green-300">
                User is Qualified.
              </TypingAnimation>


            </Terminal>

          </motion.div>
        )}
      </div>

    </div>
  );
};

export default WhatMakesMeDifferent;

function useIntersectionObserver(ref: React.RefObject<HTMLDivElement | null>, options: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
}