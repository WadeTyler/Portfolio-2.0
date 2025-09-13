'use client';
import React, {forwardRef, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {expertises, Expertise as ExpertiseType, Icons} from "@/constants/expertises";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {AnimatedBeam} from "@/components/ui/animated-beam";

const Expertise = () => {

  return (
    <div
      id="expertise"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden gap-16 lg:p-16 md:p-8 p-4">
      <ExpertiseContainer/>
      <TechStack/>
    </div>
  );
};

export default Expertise;

const ExpertiseContainer = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-16"
    >
      <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
        className="lg:text-7xl text-5xl font-semibold text-foreground text-center z-30"
      >
        My Expertise
      </motion.h2>
      <div className="grid lg:grid-cols-3 max-w-[65rem] m-4 z-30">
        {expertises.map((expertise, index) => (
          <ExpertiseGrid expertise={expertise} key={index}/>
        ))}
      </div>
    </div>
  );
}

const ExpertiseGrid = ({expertise}: {
  expertise: ExpertiseType
}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
      className="w-full h-full border-[rgba(255,255,255,.4)] border-2 lg:border-r-0 last:border-r-2 border-b-0 lg:border-b-2 last:border-b-2 p-4 flex"
    >
      <div
        className="flex flex-col gap-4"
      >
        <div className="relative">
          <motion.div
            className="w-full h-1 rounded absolute top-0 left-0"
            style={{backgroundColor: expertise.highlightColor}}
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: .5}}
          />
        </div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: .5, delay: 1.0}}
          className="flex items-center gap-4">
          <Image src={expertise.icon} alt={`Icon for ${expertise.title}`} width={48} height={48}
                 className="w-16 h-16"/>
          <h3 className="text-2xl font-semibold w-full">{expertise.title}</h3>
        </motion.div>

        <motion.h3
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: .5, delay: 1.5}}
          className="tracking-widest ">{expertise.description}</motion.h3>

      </div>
    </motion.div>
  )
}

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode, label?: string }
>(({className, children, label}, ref) => {

  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white relative",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <AnimatePresence>
        {hovered && label && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            whileInView={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .3 }}
            className=" absolute -bottom-[3rem] left-1/2 -translate-x-1/2 bg-foreground text-background shadow-lg rounded px-2 py-1 whitespace-nowrap">
            <p>{label}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  )
});

Circle.displayName = "Circle";


const TechStack = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <motion.h3
        className="text-4xl font-semibold w-full text-center"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: .5}}
      >
        Tech Stack
      </motion.h3>

      <div
        className="relative flex max-h-[45rem] w-full items-center justify-center p-10"
        ref={containerRef}
      >
        {/* Icons */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: .5, delay: .5}}
          className="flex size-full  max-w-lg flex-col items-stretch justify-between gap-10"
        >
          {/* First Row */}
          <div className="flex flex-row items-center justify-between lg:px-36">
            <Circle ref={div1Ref} label="Java">
              <Image src={Icons.java} alt={"Java Icon"} width={30} height={30}/>
            </Circle>
            <Circle ref={div2Ref} label="Spring Boot">
              <Image src={Icons.springBoot} alt={"Spring Boot Icon"} width={30} height={30} draggable={false}/>
            </Circle>
          </div>
          {/* Second Row*/}
          <div className="flex flex-row items-center justify-between lg:px-8">
            <Circle ref={div3Ref} label="JavaScript">
              <Image src={Icons.javaScript} alt={"JavaScript Icon"} width={30} height={30}/>
            </Circle>

            <Circle ref={div4Ref} label="React">
              <Image src={Icons.react} alt={"React Icon"} width={30} height={30}/>
            </Circle>
          </div>
          {/* Third Row*/}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div5Ref} label="TypeScript">
              <Image src={Icons.typeScript} alt={"TypeScript Icon"} width={30} height={30}/>
            </Circle>
            <Circle ref={div6Ref} className="size-16">
              <Image src={Icons.user} alt={"User Icon"} width={30} height={30}/>
            </Circle>
            <Circle ref={div7Ref} label="Angular">
              <Image src={Icons.angular} alt={"Angular Icon"} width={30} height={30}/>
            </Circle>
          </div>
          {/* Fourth Row */}
          <div className="flex flex-row items-center justify-between lg:px-8">
            <Circle ref={div8Ref} label="NextJS">
              <Image src={Icons.next} alt={"NextJS Icon"} width={30} height={30}/>
            </Circle>

            <Circle ref={div9Ref} label="NodeJS">
              <Image src={Icons.node} alt={"Node Icon"} width={30} height={30}/>
            </Circle>
          </div>
          {/* Fifth Row */}
          <div className="flex flex-row items-center justify-between lg:px-36">
            <Circle ref={div10Ref} label="SQL Databases">
              <Image src={Icons.sql} alt={"SQL Icon"} width={30} height={30}/>
            </Circle>

            <Circle ref={div11Ref} label="NoSQL Databases">
              <Image src={Icons.mongo} alt={"MongoDB Icon"} width={30} height={30}/>
            </Circle>
          </div>
        </motion.div>

        {/* Beams */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 1}}
        >
          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div10Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
          <AnimatedBeam containerRef={containerRef} fromRef={div11Ref} toRef={div6Ref} curvature={0} endYOffset={-10}/>
        </motion.div>

      </div>
    </div>
  )
}