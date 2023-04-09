"use client";
import React from "react";
import heroLeftImg from "../../images/hero-left.svg";
import { useTheme } from "next-themes";
import darkBg from "../../images/hero-bg-img-dark.png";
import lightBg from "../../images/hero-bg-img-light.png";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`h-screen flex items-center  border-b-[1px] dark:border-accent border-[#0000] dark:bg-[#212428] bg-[#dde5ef] overflow-hidden`}
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
            <h4 className="text-2xl leading-9 text-primary">HELLO I&apos;M</h4>
            <h2
              className="
            2xl:text-[60px] 2xl:leading-[90px] 2xl:py-3
            xl:text-[48px] xl:leading-[72px] 
            md:text-[32px] md:leading-[44px]
            sm:text-[30px] sm:leading-[40px]
            text-[24px] leading-[36px] py-2
            dark:text-[#fff] text-secondary font-extrabold"
            >
              Hasan Rifat
            </h2>
            <h5
              className="
            xl:text-[32px] xl:leading-[48px]
            md:text-[20px] md:leading-[32px]
            sm:text-[18px] sm:leading-[28px]
            text-[16px] leading-[22px]
            dark:text-[#fff] text-[#212428] font-semibold"
            >
              Full Stack web developer
            </h5>
            <p
              className="dark:text-[#e2e8f0] text-[#212428]
            lg:text-[20px] lg:leading-[30px] lg:mb-[30px] lg:mt-[18px]
            md:text-[18px] md:leading-[28px] md:mb-[20px] md:mt-[10px]
            sm:text-[16px] sm:leading-[24px] mb-[10px] mt-[5px]
            text-[14px] leading-[20px] 
            "
            >
              I m a self-learner person. I am constantly gaining new skills in{" "}
              web development. By which I can give some good benefit to your
              Team. Besides, I am a hard-working and creative person
            </p>
            <div className="grid grid-cols-2 2xl:grid-cols-3 items-center gap-6">
              <div className=" flex items-center gap-4 w-full col-span-2 2xl:col-span-2">
                <button
                  className="text-primary mr-3
              lg:text-xl lg:leading-[36px] lg:px-[32px] lg:py-[8px]
              md:text-lg md:leading-[24px] md:px-[32px] md:py-[8px]
              sm:text-base sm:leading-[20px] sm:px-[24px] sm:py-[6px]
              text-sm leading-[16px] px-[16px] py-[4px]
              rounded-[50px] hover:bg-primary hover:text-[#fff] font-bold border-[1px] border-primary"
                >
                  About me
                </button>
                <strong
                  className=" 
              lg:text-[22px] lg:leading-[24px] 
              md:text-[18px] md:leading-[20px] 
              sm:text-[16px] sm:leading-[18px] 
              text-[14px] leading-[16px] 
              "
                >
                  Follow me:
                </strong>
              </div>
              <div className="flex gap-2 w-full ml-3 col-span-2 2xl:col-span-1">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/dev-hasan-rifat/"
                  className="
                border-primary border-[1px] rounded-full text-primary p-2
                hover:bg-primary hover:text-[#fff] text-xl
                "
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/DevHasan_Rifat"
                  className="
                border-primary border-[1px] rounded-full text-primary p-2
                hover:bg-primary hover:text-[#fff] text-xl
                "
                >
                  <AiFillTwitterCircle />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/Dev.Hasan.Rifat"
                  className="
                border-primary border-[1px] rounded-full text-primary p-2
                hover:bg-primary hover:text-[#fff] text-xl
                "
                >
                  <BsFacebook />
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
