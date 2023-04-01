"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

type CurserProps = {};

const Curser: React.FC<CurserProps> = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".follower");

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, 0.3, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      });

      gsap.to(follower, 0.2, {
        x: e.clientX,
        y: e.clientY,
        opacity: 30,
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, 0.8, {
        opacity: 0,
      });
      gsap.to(follower, 0.8, {
        opacity: 0,
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <div className="cursor fixed top-0 left-0 w-10 h-10 rounded-full border border-[#5cc2d5] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-1000 cursor-default opacity-0"></div>
      <div className="follower fixed top-0 left-0 w-2 h-2 rounded-full bg-[#5cc2d5] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-900 opacity-0"></div>
    </>
  );
};
export default Curser;
