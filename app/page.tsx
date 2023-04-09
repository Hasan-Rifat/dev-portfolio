"use client";

import AboutMe from "@/components/Home/AboutMe";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Work from "@/components/Home/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Work />
    </main>
  );
}
