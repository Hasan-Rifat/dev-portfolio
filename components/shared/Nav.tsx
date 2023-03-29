"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const menu = (
    <>
      <ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Services</Link>
        </li>
        <li>
          <Link href="">Portfolio</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </>
  );

  const mobileMenu = (
    <>
      <ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Services</Link>
        </li>
        <li>
          <Link href="">Portfolio</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </>
  );
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <nav>Have a good coding</nav>;
};
export default Nav;
