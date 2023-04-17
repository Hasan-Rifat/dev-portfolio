"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { TfiMenu } from "react-icons/tfi";
import dynamic from "next/dynamic";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const [scroll, setScroll] = useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/",
      id: 1,
    },
    {
      name: "About",
      path: "/about",
      id: 2,
    },
    {
      name: "Services",
      path: "/services",
      id: 3,
    },
    {
      name: "Work",
      path: "/experience",
      id: 4,
    },
    {
      name: "experience",
      path: "/experience",
      id: 6,
    },
    {
      name: "contact",
      path: "/contact",
      id: 5,
    },
  ];
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // header scroll effect

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`z-[99999]   w-full transition  ease-out md:ease-in absolute left-0 top-0 bg-[#21242800] ${
          scroll
            ? "sticky left-0 top-0 shadow-lg dark:text-[#333333] dark:bg-[#181a1d] bg-[#fff]"
            : ""
        }`}
      >
        <div className="container mx-auto px-[5%] py-[2.5%] sm:py-[0.5%]">
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-2 md:col-span-1">
              <h2>
                <Link className="2xl:text-3xl font-bold " href="/">
                  <span className="dark:text-primary">
                    Hasan_
                    <span
                      className={`dark:text-[#fff] text-[#333333] ${
                        open && "darK:text-[#333333]"
                      }`}
                    >
                      Rifat
                    </span>
                  </span>{" "}
                  <span className="dark:text-[#fff] rounded-full">.</span>{" "}
                  <span className="dark:text-primary">_</span>
                </Link>
              </h2>
            </div>
            <nav
              className={`flex items-center gap-4 md:justify-center 
            relative col-span-2 md:col-span-3 md:p-0
            `}
            >
              <button
                onClick={() => setOpen(!open)}
                className={`block lg:hidden ml-auto dark:text-[#fff] text-success`}
              >
                <TfiMenu className={`text-2xl `} />
              </button>
              <ul
                className={` w-full lg:flex lg:items-center lg:justify-end px-2 py-5 rounded-xl   dark:lg:bg-[#12121200] dark:lg:text-[#fff]
               dark:text-[#333333]
                  bg-[#333333] text-[#fff]
                  lg:bg-[#0000] lg:text-[#333333]
                ${
                  open
                    ? "  dark:bg-[#fff]  block absolute left-0 top-[134%]  md:bg-black transition duration-150 ease-out md:ease-in"
                    : "hidden"
                }`}
              >
                {menu.map((item) => (
                  <Link className=" block mx-5" href={item.path} key={item.id}>
                    <li
                      className="group relative text-xs 2xl:text-xl  dark:hover:text-primary hover:text-primary font-bold  inline-block
                    "
                    >
                      <span> {item.name}</span>

                      <span
                        className={`md:absolute md:inset-x-0 md:bottom-0 md:h-0.5 md:origin-left md:scale-x-0 md:transform md:bg-primary md:transition-transform md:duration-300 md:ease-in-out md:group-hover:scale-x-100`}
                      ></span>
                    </li>
                  </Link>
                ))}
              </ul>

              <button onClick={() => toggleTheme()}>
                {theme === "dark" ? (
                  <HiOutlineSun className="text-2xl dark:text-[#fff]" />
                ) : (
                  <BsMoonStars className="text-xl dark:text-[#fff]" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default dynamic(() => Promise.resolve(Nav), { ssr: false });
