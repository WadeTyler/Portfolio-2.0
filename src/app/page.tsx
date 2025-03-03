'use client';
import Hero from "@/components/home/hero";
import Expertise from "@/components/home/expertise";
import WhatMakesMeDifferent from "@/components/home/what-makes-me-different";
import Projects from "@/components/home/projects";
import Footer from "@/components/footer";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import {useEffect, useState} from "react";
import {IconArrowNarrowUp} from "@tabler/icons-react";

export default function Home() {

  const [atTopPage, setAtTopPage] = useState(true);

  function handleAtTopPage() {

    if (window.scrollY < 600) {
      setAtTopPage(true);
    }
    else {
      setAtTopPage(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {

    window.addEventListener('scroll', handleAtTopPage);

    return () => {
      window.removeEventListener('scroll', handleAtTopPage);
    }

  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <Expertise />
      <WhatMakesMeDifferent />
      <Projects />
      <Education />
      <Contact />
      <Footer />

      {!atTopPage && (
        <button
          className="bg-accent hover:bg-accentDark text-white p-2 fixed z-30 bottom-4 right-4 duration-300 active:bg-white active:text-accent shadow-lg"
          onClick={scrollToTop}
        >
          <IconArrowNarrowUp className="" />
        </button>
      )}
    </div>
  );
}
