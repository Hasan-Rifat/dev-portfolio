"use client";
import React from "react";

import heroLeftImg from "../../images/aboutme.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className={`h-screen flex items-center  border-b-[1px] dark:border-accent border-[#0000] dark:bg-[#212428] bg-[#ebf1f6] overflow-hidden`}
      //bg-[#dde5ef]
    >
      <div className="xl:container mx-auto px-[5%] py-[0.5%] ">
        <div className="md:grid md:grid-cols-8 gap-5 xl:gap-10 2xl:gap-20 md:items-center">
          <div className="md:col-span-4  dark:bg-[#181a1d] bg-[#fff] p-16 rounded-xl shadow-xl">
            <Image src={heroLeftImg} alt="hero image" />
          </div>
          <div
            className="
          md:col-span-4 
          md:mt-0 mt-10
          "
          >
            <h5
              className="
           
            text-base
            dark:text-[#fff] text-[#212428] font-semibold"
            >
              <span className="">Hello I&apos;M</span> Hasan Rifat
            </h5>
            <h2
              className="
            xl:text-4xl
            md:text-[32px] md:leading-[44px]
            sm:text-[30px] sm:leading-[40px]
            text-[24px] leading-[36px] 
            dark:text-[#fff] text-secondary font-extrabold"
            >
              <span className="dark:text-primary"> MERN Stack</span> Developer
            </h2>

            <p
              className="dark:text-[#e2e8f0] text-[#212428]
            lg:text-[20px] leading-[26px] sm:leading-8 
            md:text-[18px] 
            sm:text-[16px]  py-[20px] sm:pt-[20px] sm:pb-[25px]
            text-[14px] 
            "
            >
              I m a self-learner person. I am constantly gaining new skills in{" "}
              web development. By which I can give some good benefit to your
              Team. Besides, I am a hard-working and creative person
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className=" flex items-center gap-4  ">
                <button className="btn">About me</button>
              </div>
              <div className="flex gap-2  sm:ml-3 ">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/dev-hasan-rifat/"
                  className="
                border-primary border-[1px] rounded-full text-primary p-2
                hover:bg-primary hover:text-[#fff] text-xl
                "
                >
                  <FaLinkedinIn className="text-sm md:text-[20px]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/DevHasan_Rifat"
                  className="
                border-primary border-[1px] rounded-full text-primary p-2
                hover:bg-primary hover:text-[#fff] text-xl
                "
                >
                  <AiFillTwitterCircle className="text-sm md:text-[20px]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/Dev.Hasan.Rifat"
                  className="
                border-primary border-[1px] rounded-full text-primary p-2
                hover:bg-primary hover:text-[#fff] text-xl
                "
                >
                  <BsFacebook className="text-sm md:text-[20px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
