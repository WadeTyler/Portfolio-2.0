import Hero from "@/components/home/hero";
import Expertise from "@/components/home/expertise";
import WhatMakesMeDifferent from "@/components/home/what-makes-me-different";
import Projects from "@/components/home/projects";
import Footer from "@/components/footer";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <Expertise />
      <WhatMakesMeDifferent />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollTopButton />

    </div>
  );
}