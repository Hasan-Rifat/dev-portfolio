import React from "react";
import Link from "next/link";
import img from "../../../images/1.png";
import { MdFeaturedPlayList } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import { BsCodeSlash, BsGithub } from "react-icons/bs";
import Image from "next/image";
import { FaServer } from "react-icons/fa";

type ProjectModelProps = {};

const ProjectModel: React.FC<ProjectModelProps> = () => {
  const item = [
    "User can see products, details, add to cart and wish list to buy later without opening account",
    "For checking out user has to open account with email and password or with Google",
    "After buying the product user can show the progress of the orders",
  ];

  const skills = [
    "HTML",
    "CSS",
    "TAilwind CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express",
    "Firebase",
    "Mongo DB",
  ];
  return (
    <div className=" py-52 z-[9999] ">
      <div></div>
      <div className="max-w-6xl mx-auto dark:bg-[#212430] rounded-xl p-10 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] bg-[#fff]">
        <div className="">
          <div className="mb-8">
            <div className="flex gap-4 sm:flex-row sm:justify-between">
              <h2 className="dark:text-[#03c987] text-secondary font-semibold text-[30px] leading-9">
                Fashionista
              </h2>
              <button className="text-sm px-5 text-[#1f1f1f] font-semibold leading-0 bg-[#03c987] pt-0 rounded-full">
                <Link href={"/"}>Live Site</Link>
              </button>
            </div>
            <p className="dark:text-[#BABABA] text-[#212428] text-[20px] leading-7 mt-3 ">
              Ecommerce website for buying and selling fashion products
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <div>
                <div className="flex gap-2 items-center mb-4 ">
                  <span>
                    <MdFeaturedPlayList fontSize={20} />
                  </span>{" "}
                  <h2 className="text-[20px] leading-7 font-bold">
                    Key Features
                  </h2>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.map((data, i) => (
                    <li
                      className="dark:text-[#BABABA] text-[#212428]  text-sm flex gap-2 items-center"
                      key={i}
                    >
                      <span>
                        <HiCheckCircle
                          className="text-[#03c987] "
                          fontSize={20}
                        />
                      </span>{" "}
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
            <div>
              <div>
                <div className="flex gap-2 items-center   mb-4">
                  <span>
                    <BsCodeSlash fontSize={20} />
                  </span>{" "}
                  <h2 className="text-[20px] leading-7 font-bold">
                    Technology Stack
                  </h2>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((data, i) => (
                    <li
                      className={`text-[#1f1f1f] text-sm px-3 py-1 
                      bg-[#ddf7e3] 
                      ${data === "CSS" && "bg-[#ffd4d4]"}
                      ${data === "Node JS" && "bg-[#ffd4d4]"}
                      ${data === "Firebase" && "bg-[#ffd4d4]"}
                      ${data === "JavaScript" && "bg-[#f6f7c1]"}
                      ${data === "Express" && "bg-[#f6f7c1]"}
                      `}
                      key={i}
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex gap-2 items-center  mt-10 mb-4">
                  <span>
                    <BsGithub fontSize={20} />
                  </span>{" "}
                  <h2 className="text-[20px] leading-7 font-bold">
                    Source Code
                  </h2>
                </div>
                <div className="flex items-center gap-5">
                  <Link
                    className="dark:bg-[#03c987]  flex gap-2 items-center
                    text-sm px-5 py-2 text-[#1f1f1f] font-semibold leading-0 bg-[#ffd4d4]  rounded-full
                    "
                    href={"/"}
                  >
                    <BsGithub />
                    Client Side
                  </Link>
                  <Link
                    className="dark:bg-[#ffd4d4]  flex gap-2 items-center
                        text-sm px-5 py-2 dark:text-[#1f1f1f] text-[#fff] font-semibold leading-0 bg-[#03c987]  rounded-full
                         sm:mt-0
                        "
                    href={"/"}
                  >
                    <FaServer />
                    Server Side
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex gap-2 items-center   mb-4">
                  <span>
                    <MdFeaturedPlayList fontSize={20} />
                  </span>{" "}
                  <h2 className="text-[20px] leading-7 font-bold">
                    Project Screenshots
                  </h2>
                </div>
                <Image src={img} alt={"img"} className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModel;
