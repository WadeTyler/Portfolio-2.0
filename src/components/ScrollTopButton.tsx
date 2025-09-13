"use client";
import {useEffect, useState} from "react";
import {IconArrowNarrowUp} from "@tabler/icons-react";

export default function ScrollTopButton() {

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


  if (!atTopPage) return (
    <button
      className="bg-accent hover:bg-accentDark text-white p-2 fixed z-30 bottom-4 right-4 duration-300 active:bg-white active:text-accent shadow-lg"
      onClick={scrollToTop}
    >
      <IconArrowNarrowUp className="" />
    </button>
  )

  return null;
}