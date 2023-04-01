"use client";
import Image from "next/image";
import React from "react";
import heroLeftImg from "../../images/hero-man-dark.png";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="h-screen dark:bg-secondary bg-[#dde3ef]">
      <div className="xl:container mx-auto px-[5%] py-[0.5%]">
        <div className="flex sm:flex-row items-center justify-center w-full">
          <div className="">
            <Image src={heroLeftImg} alt="hero image" />
          </div>
          <div className="">
            <h4>HELLO I&apos;M</h4>
            <h2>Hasan Rifat</h2>;<h5>Full Stack web developer</h5>
            <p>
              There are many variations of sum availabled in alley of type and
              scrambled it some.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
