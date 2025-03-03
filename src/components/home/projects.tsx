'use client';
import React, {SetStateAction, useEffect, useState} from 'react';
import {projects as projectsList, Project as ProjectType} from "@/constants/projects";
import {AnimatePresence, motion} from 'framer-motion';
import Link from "next/link";
import {IconLink, IconX} from "@tabler/icons-react";
import {BorderBeam} from "@/components/ui/border-beams";


const Projects = () => {


  const [shownProjects, setShownProjects] = useState<ProjectType[]>(projectsList);
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);

  useEffect(() => {

    // Update shownProjects on tab change
    if (projectsList && currentTab) {
      switch (currentTab) {
        case "java":
          setShownProjects(projectsList.filter(project => project.techStack.includes("Java")));
          break;
        case "ts/js":
          setShownProjects(projectsList.filter(project => project.techStack.includes("TypeScript") || project.techStack.includes("JavaScript")));
          break;
        case "react":
          setShownProjects(projectsList.filter(project => project.techStack.includes("React")));
          break;
        case "springboot":
          setShownProjects(projectsList.filter(project => project.techStack.includes("Spring Boot")));
          break;
        case "node":
          setShownProjects(projectsList.filter(project => project.techStack.includes("Node.js")));
          break;
        default:
          setShownProjects(projectsList);
      }
    }

  }, [currentTab, projectsList]);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden gap-16 lg:p-16 md:p-8 p-4">
      <div className="max-w-[80rem] w-full flex flex-col gap-12">
        <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="lg:text-7xl text-5xl font-semibold text-foreground text-center z-30"
        >
          My Work
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: 0.5 }}
          className="flex items-center justify-center gap-4 w-full flex-wrap"
        >
          <button
            className={`${currentTab === "all" && 'text-accent'} duration-300`}
            onClick={() => setCurrentTab("all")}
          >
            All
          </button>
          <span>&bull;</span>
          <button
            className={`${currentTab === "java" && 'text-accent'} duration-300`}
            onClick={() => setCurrentTab("java")}
          >
            Java
          </button>
          <span>&bull;</span>
          <button
            className={`${currentTab === "ts/js" && 'text-accent'} duration-300`}
            onClick={() => setCurrentTab("ts/js")}
          >
            TS/JS
          </button>
          <span>&bull;</span>
          <button
            className={`${currentTab === "react" && 'text-accent'} duration-300`}
            onClick={() => setCurrentTab("react")}
          >
            React
          </button>
          <span>&bull;</span>
          <button
            className={`${currentTab === "springboot" && 'text-accent'} duration-300`}
            onClick={() => setCurrentTab("springboot")}
          >
            Spring Boot
          </button>
          <span>&bull;</span>
          <button
            className={`${currentTab === "node" && 'text-accent'} duration-300`}
            onClick={() => setCurrentTab("node")}
          >
            Node
          </button>
        </motion.div>


        {/* Projects */}
        <motion.div
          layout
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4"
        >
          <AnimatePresence>
            {shownProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                exit={{opacity: 0, y: -20}}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              >
                <ProjectCard project={project} key={project.title} setCurrentProject={setCurrentProject}/>
              </motion.div>

            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {currentProject && (
            <ProjectPanel project={currentProject} setCurrentProject={setCurrentProject}/>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};

export default Projects;

const ProjectCard = ({project, setCurrentProject}: {
  project: ProjectType;
  setCurrentProject: React.Dispatch<SetStateAction<ProjectType | null>>;
}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full group overflow-hidden rounded bg-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer relative"
      onClick={() => setCurrentProject(project)}
    >
      {/* Image Container */}
      <div className="w-full h-64 relative overflow-hidden">
        <img src={project.images[0]} alt={`Thumbnail for ${project.title}`}
             className="object-cover transition-transform duration-300 scale-125 group-hover:scale-150 w-full h-full" draggable={false}/>
      </div>
      <div className="w-full h-32 p-4 relative">
        <h4 className="mb-2 text-xl font-bold text-white transition-colors duration-300">
          {project.title}
        </h4>
        <div className="relative h-fit">
          {!isHovered ? (
              <p
                className={`text-sm text-zinc-400 duration-300`}>
                {project.techStack.map((tech, index) => (
                  <span key={index}>
              {tech}
                    {index !== project.techStack.length - 1 && (
                      <span className="mx-2 text-zinc-500">/</span>
                    )}
            </span>
                ))}
              </p>
            )
            : (
              <motion.div
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 20, opacity: 0}}
                transition={{duration: .3, delay: 0}}
                className="w-fit text-sm text-zinc-400 duration-300 hover:text-accent relative p-2 border-zinc-700 border"
              >
                <p>Learn More</p>
                <BorderBeam duration={3} size={20} initialOffset={25}/>
              </motion.div>
            )}
        </div>
      </div>

    </div>
  );
}

const ProjectPanel = ({project, setCurrentProject}: {
  project: ProjectType;
  setCurrentProject: React.Dispatch<SetStateAction<ProjectType | null>>;
}) => {

  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  // Functions
  const handlePrev = () => {
    if (currentImageIdx === 0) return;
    setCurrentImageIdx(prev => prev - 1);
  }

  const handleNext = () => {
    if (currentImageIdx === project.images.length - 1) return;
    setCurrentImageIdx(prev => prev + 1);
  }

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      setCurrentProject(null);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [setCurrentProject]);

  return (
    <div
      className="fixed w-full h-screen bg-[rgba(0,0,0,.6)] left-0 top-0 flex items-center justify-center z-40 lg:p-16 md:p-8 p-4">

      <div
        className="max-w-[50rem] w-full min-h-[30rem] flex flex-col bg-zinc-800 shadow-xl rounded-lg overflow-hidden relative"
      >
        {/* Image Container */}
        <div className="w-full h-[15rem] md:h-[25rem] relative overflow-hidden">
          <img src={project.images[currentImageIdx]} alt={`Thumbnail for ${project.title}`}
               className="object-cover transition-transform duration-300 scale-125 group-hover:scale-150 w-full h-full" draggable={false}/>
          {/* Next/Prev buttons */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between">
            {currentImageIdx > 0 && (
              <button
                className="bg-[rgba(0,0,0,.5)] p-2 md:p-4 flex items-center justify-between text-2xl md:text-5xl mr-auto select-none"
                onClick={handlePrev}>
                &lt;
              </button>
            )}
            {currentImageIdx < project.images.length - 1 && (
              <button className="bg-[rgba(0,0,0,.5)] p-4 flex items-center justify-between text-5xl ml-auto select-none"
                      onClick={handleNext}>
                &gt;
              </button>
            )}
          </div>
        </div>

        <div className="w-full h-fit md:p-8 p-4 flex flex-col relative gap-4">
          <div className="">
            <h4 className="font-semibold text-4xl">{project.title}</h4>
            <h5 className="text-lg text-zinc-400 font-semibold">{project.subtitle}</h5>
          </div>
          <p className="whitespace-pre-wrap text-sm">{project.description}</p>
          <div className="w-full flex items-center justify-between">
            {/* Link */}
            {project.link && (
              <div className="relative group">
                <Link
                  href={project.link}
                  target="_blank"
                  className="relative inline-flex gap-2 px-4 py-2  border-zinc-700 border w-fit hover:text-accent cursor-pointer duration-300"
                >
                  <IconLink/> Live URL
                </Link>
                <BorderBeam duration={3} size={35} initialOffset={25} className=""/>
              </div>
            )}
            {/* Close Button */}
            <IconX
              onClick={() => setCurrentProject(null)}
              className="ml-auto hover:-rotate-90 duration-300 cursor-pointer hover:text-accent"
            />
          </div>
        </div>
      </div>


    </div>
  )
}