"use client";
import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="h-screen dark:bg-[#212428] bg-[#dde3ef]">
      <div className="container mx-auto"></div>
    </section>
  );
};
export default Hero;
