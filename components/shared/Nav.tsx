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
      name: "expertise",
      path: "/expertise",
      id: 2,
    },
    {
      name: "work",
      path: "/work",
      id: 3,
    },
    {
      name: "experience",
      path: "/experience",
      id: 4,
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
        className={` w-full  ${
          scroll
            ? "sticky left-0 top-0 shadow-2xl bg-[#fff] transition  ease-out md:ease-in"
            : "absolute left-0 top-0 bg-[#21242800]"
        }`}
      >
        <div className="xl:container mx-auto px-[5%] py-[0.5%]">
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-2 md:col-span-1">
              <h2>
                <Link className="2xl:text-3xl font-bold " href="/">
                  <span className="dark:text-primary">
                    Hasan_
                    <span className="dark:text-[#fff] text-[#333333]">
                      Rifat
                    </span>
                  </span>{" "}
                  <span className="text-white rounded-full">.</span>{" "}
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
                className="block md:hidden ml-auto"
              >
                <TfiMenu className="text-2xl" />
              </button>
              <ul
                className={` w-full md:flex md:items-center md:justify-end  p-5 rounded-xl sm:gap-4 lg:gap-2  dark:md:bg-[#12121200] dark:md:text-[#fff]
               dark:text-[#333333]
                  bg-[#333333] text-[#fff]
                  md:bg-[#0000] md:text-[#333333]
                ${
                  open
                    ? "  dark:bg-[#fff]  block absolute left-0 top-[134%]  md:bg-black transition duration-150 ease-out md:ease-in"
                    : "hidden"
                }`}
              >
                {menu.map((item) => (
                  <Link className=" block mx-4" href={item.path} key={item.id}>
                    <li
                      className="group relative  dark:hover:text-primary light:hover:text-primary font-bold text-sm 2xl:text-xl 
                    "
                    >
                      <span className="mr-2"> {"//"}</span>
                      <span> {item.name}</span>

                      <span
                        className={` md:absolute md:inset-x-0 md:bottom-0 md:h-0.5 md:origin-left md:scale-x-0 md:transform md:bg-primary md:transition-transform md:duration-300 md:ease-in-out md:group-hover:scale-x-100`}
                      ></span>
                    </li>
                  </Link>
                ))}
              </ul>

              <button onClick={() => toggleTheme()}>
                {theme === "dark" ? (
                  <HiOutlineSun className="text-2xl" />
                ) : (
                  <BsMoonStars className="text-xl" />
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
