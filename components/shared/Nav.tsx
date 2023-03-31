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

  return (
    <>
      <header>
        <div className="max-w-[1905px] mx-auto px-[5%] py-[1.5%]">
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-2 md:col-span-1">
              <h2>
                <Link className="2xl:text-3xl font-bold " href="/">
                  <span className="dark:text-primary">Hasan_Rifat</span>{" "}
                  <span className="text-white rounded-full">.</span>{" "}
                  <span className="text-[#bb77ff]">_</span>
                </Link>
              </h2>
            </div>
            <nav
              className={`flex items-center gap-4 md:justify-center 
            relative col-span-2 md:col-span-3 p-5 md:p-0
            `}
            >
              <button
                onClick={() => setOpen(!open)}
                className="block md:hidden ml-auto"
              >
                <TfiMenu className="text-2xl" />
              </button>
              <ul
                className={` w-full md:flex md:items-center md:justify-end light:text-[#000] dark:md:bg-[#12121200] p-5 rounded-xl sm:gap-4 lg:gap-10 dark:bg-[#fff] dark:md:text-[#fff] light:md:text-[#000] dark:text-[#000]  ${
                  open
                    ? "block absolute left-0 top-[134%]  md:bg-black"
                    : "hidden"
                }`}
                // flex-col justify-evenly sm:flex-row   items-center
                // ${ open ? "block" : "hidden" }
              >
                {menu.map((item) => (
                  <Link className="block" href={item.path} key={item.id}>
                    <li className="font-bold text-sm 2xl:text-xl darK:text-[#fff] light:text-[#000] hover:text-primary">
                      <span className="mr-2"> {"//"}</span>
                      <span> {item.name}</span>
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
