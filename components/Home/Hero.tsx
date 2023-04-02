"use client";
import React from "react";
import heroLeftImg from "../../images/hero-left.svg";
import { useTheme } from "next-themes";
import darkBg from "../../images/hero-bg-img-dark.png";
import lightBg from "../../images/hero-bg-img-light.png";
import Image from "next/image";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const { theme } = useTheme();
  console.log(`${theme === "dark" ? darkBg.src : lightBg.src}`);

  return (
    <section className={`h-screen flex items-center relative`}>
      <Image
        src={`${theme === "dark" ? darkBg.src : lightBg.src}`}
        alt={"background images"}
        fill
      />
      <div className="xl:container mx-auto px-[5%] py-[0.5%] z-50">
        <div className="flex sm:flex-row items-center justify-between w-full gap-16">
          <div className="dark:bg-[#212428] bg-[#fff] p-16 rounded-xl shadow-xl">
            <Image src={heroLeftImg} alt="hero image" />
          </div>
          <div className="">
            <h4 className="text-2xl leading-9 text-primary">HELLO I&apos;M</h4>
            <h2 className="text-[60px] leading-[90px] dark:text-[#fff] text-[#212428] font-extrabold">
              Hasan Rifat
            </h2>
            <h5 className="text-[32px] leading-[48px] dark:text-[#fff] text-[#212428] font-semibold">
              Full Stack web developer
            </h5>
            <p className="dark:text-[#e2e8f0] text-[20px] leading-[30px] mb-[30px] mt-[18px]">
              I m a self-learner person. I am constantly gaining new skills in{" "}
              <br />
              web development. By which I can give some good benefit to your
              <br />
              Team. Besides, I am a hard-working and creative person
            </p>
            <div>
              <button className="text-primary  text-2xl leading-[36px] px-[42px] py-[10px] rounded-[50px] hover:bg-primary hover:text-[#fff] font-bold border-[1px] border-primary">
                About me
              </button>{" "}
              <span className="text-[22px] leading-[24px] ml-[18px]">
                Follow me:
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
