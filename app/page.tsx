"use client";

import AboutMe from "@/components/Home/AboutMe";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import Work from "@/components/Home/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
