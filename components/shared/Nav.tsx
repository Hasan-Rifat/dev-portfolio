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

  console.log(open);

  return (
    <>
      <header>
        <div className="max-w-[1905px] mx-auto px-[5%] py-[2%]">
          <div className="flex justify-between items-center">
            <div className="w-full">
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
            relative w-full
            `}
            >
              <button
                onClick={() => setOpen(!open)}
                className="block md:hidden ml-auto"
              >
                <TfiMenu className="text-2xl" />
              </button>
              <ul
                className={` w-full md:flex md:items-center  sm:gap-4 lg:gap-10 ${
                  open ? "block absolute left-0 top-[102%]" : "hidden"
                }`}
                // flex-col justify-evenly sm:flex-row   items-center
                // ${ open ? "block" : "hidden" }
              >
                {menu.map((item) => (
                  <Link className="block" href={item.path} key={item.id}>
                    <li className="font-bold text-sm 2xl:text-xl">
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
