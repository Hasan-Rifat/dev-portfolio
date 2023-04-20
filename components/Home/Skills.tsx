import Image from "next/image";
import React from "react";

import html from "../../images/skill/html.svg";
import css from "../../images/skill/css.svg";
import tailwindCss from "../../images/skill/tailwindCss.svg";
import bootstrap from "../../images/skill/bootstrap.svg";
import javascript from "../../images/skill/javascript.svg";
import typescript from "../../images/skill/typescript.svg";
import react from "../../images/skill/react.svg";
import nextjs from "../../images/skill/nextjs.svg";
import redux from "../../images/skill/redux.svg";

import nodejs from "../../images/skill/nodejs-original.svg";
import expressjs from "../../images/skill/express.svg";
import firebase from "../../images/skill/firebase.svg";
import jwt from "../../images/skill/Jwt.svg";
import jest from "../../images/skill/jest.svg";
import graphql from "../../images/skill/graphql.svg";

import mongodb from "../../images/skill/mongodb.svg";
import postgresql from "../../images/skill/postgresql.svg";
import sql from "../../images/skill/sql.svg";

import aws from "../../images/skill/aws.svg";
import git from "../../images/skill/github.svg";
import vercel from "../../images/skill/vercel.svg";
import netlify from "../../images/skill/netlify.svg";
import docker from "../../images/skill/docker.svg";
import figma from "../../images/skill/figma.svg";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const frontendSkills = [
    { id: 1, title: "html", progress: "95", img: html },
    { id: 2, title: "css", progress: "93", img: css },
    {
      id: 7,
      title: "tailwindcss",
      progress: "80",
      img: tailwindCss,
    },
    {
      id: 8,
      title: "bootstrap",
      progress: "80",
      img: bootstrap,
    },
    {
      id: 3,
      title: "javascript",
      progress: "90",
      img: javascript,
    },
    {
      id: 4,
      title: "typescript",
      progress: "70",
      img: typescript,
    },
    {
      id: 5,
      title: "react",
      progress: "80",
      img: react,
    },
    {
      id: 6,
      title: "nextjs",
      progress: "75",
      img: nextjs,
    },

    {
      id: 9,
      title: "Redux",
      progress: "80",
      img: redux,
    },
  ];

  const backendSkills = [
    {
      id: 1,
      title: "Nodejs",
      progress: "70",
      img: nodejs,
    },
    {
      id: 2,
      title: "Expressjs",
      progress: "80",
      img: expressjs,
    },

    {
      id: 4,
      title: "Firebase",
      progress: "60",
      img: firebase,
    },
    {
      id: 5,
      title: "Jwt",
      progress: "70",
      img: jwt,
    },
    {
      id: 6,
      title: "Jest",
      progress: "70",
      img: jest,
    },
    {
      id: 7,
      title: "GraphQL",
      progress: "70",
      img: graphql,
    },
  ];

  const databaseSkills = [
    {
      id: 1,
      title: "MongoDB",
      progress: "85",
      img: mongodb,
    },
    {
      id: 2,
      title: "PostgreSQL",
      progress: "80",
      img: postgresql,
    },
    {
      id: 3,
      title: "SQL",
      progress: "70",
      img: sql,
    },
  ];

  const toolsSkills = [
    {
      id: 1,
      title: "aws",
      progress: "85",
      img: aws,
    },
    {
      id: 2,
      title: "git",
      progress: "90",
      img: git,
    },
    {
      id: 3,
      title: "vercel",
      progress: "90",
      img: vercel,
    },
    {
      id: 4,
      title: "netlify",
      progress: "90",
      img: netlify,
    },
    {
      id: 5,
      title: "docker",
      progress: "70",
      img: docker,
    },
    {
      id: 6,
      title: "figma",
      progress: "60",
      img: figma,
    },
  ];
  return (
    <section className="py-[100px] flex items-center  dark:bg-success bg-[#f8faf3]">
      <div className="xl:container mx-auto px-[5%] py-[0.5%]">
        {/* frontend */}
        <div>
          <div className="mb-7">
            <h2
              className="
            xl:text-4xl
            lg:text-[32px] lg:leading-[44px]
            md:text-[24px] md:leading-[40px]
            text-[22px] leading-[36px] 
            dark:text-[#fff] text-[#212428] font-extrabold"
            >
              <span className="dark:text-primary">Frontend</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {frontendSkills.map((skill) => (
              <div
                className=" p-5 dark:bg-[#0f1117] bg-[#fcfcfc] rounded-2xl

              shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)]
              
              flex items-center gap-5
              "
                key={skill.id}
              >
                <div
                  className={`p-4 shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)] bg-[#fff] rounded-full ${
                    skill.title.includes("tailwindcss") && "px-4 py-6"
                  }
                ${skill.title.includes("bootstrap") && "px-4 py-5"}
                `}
                >
                  <Image
                    src={skill.img}
                    width={50}
                    height={50}
                    alt={skill.title}
                  />
                </div>
                <div>
                  <span className="text-[#616161] font-semibold text-sm uppercase">
                    {skill.title}
                  </span>
                  <h4 className="text-3xl font-extrabold">{skill.progress}%</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* backend */}
        <div className="my-14">
          <div className="mb-7">
            <h2
              className="
            xl:text-4xl
            lg:text-[32px] lg:leading-[44px]
            md:text-[24px] md:leading-[40px]
            text-[22px] leading-[36px] 
            dark:text-[#fff] text-[#212428] font-extrabold"
            >
              <span className="dark:text-primary">Backend</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {backendSkills.map((skill) => (
              <div
                className=" p-5 dark:bg-[#0f1117] bg-[#fcfcfc] rounded-2xl

              shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)]
              
              flex items-center gap-5
              "
                key={skill.id}
              >
                <div
                  className={`p-3 shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)] bg-[#fff] rounded-full ${
                    skill.title.includes("tailwindcss") && "px-5 py-7"
                  }
                ${skill.title.includes("bootstrap") && "px-5 py-6"}
                `}
                >
                  <Image
                    src={skill.img}
                    width={50}
                    height={50}
                    alt={skill.title}
                  />
                </div>
                <div>
                  <span className="text-[#616161] font-semibold text-sm uppercase">
                    {skill.title}
                  </span>
                  <h4 className="text-3xl font-extrabold">{skill.progress}%</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* DATABASE */}
        <div className="my-14">
          <div className="mb-7">
            <h2
              className="
            xl:text-4xl
            lg:text-[32px] lg:leading-[44px]
            md:text-[24px] md:leading-[40px]
            text-[22px] leading-[36px] 
            dark:text-[#fff] text-[#212428] font-extrabold"
            >
              <span className="dark:text-primary">Database</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {databaseSkills.map((skill) => (
              <div
                className=" p-5 dark:bg-[#0f1117] bg-[#fcfcfc] rounded-2xl

              shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)]
              
              flex items-center gap-5
              "
                key={skill.id}
              >
                <div
                  className={`p-5 shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)] bg-[#fff] rounded-full ${
                    skill.title.includes("tailwindcss") && "px-5 py-7"
                  }
                ${skill.title.includes("bootstrap") && "px-5 py-6"}
                `}
                >
                  <Image
                    src={skill.img}
                    width={50}
                    height={50}
                    alt={skill.title}
                  />
                </div>
                <div>
                  <span className="text-[#616161] font-semibold text-sm uppercase">
                    {skill.title}
                  </span>
                  <h4 className="text-3xl font-extrabold">{skill.progress}%</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tools */}
        <div className="my-14">
          <div className="mb-7">
            <h2
              className="
            xl:text-4xl
            lg:text-[32px] lg:leading-[44px]
            md:text-[24px] md:leading-[40px]
            text-[22px] leading-[36px] 
            dark:text-[#fff] text-[#212428] font-extrabold"
            >
              <span className="dark:text-primary">Tools</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {toolsSkills.map((skill) => (
              <div
                className=" p-5 dark:bg-[#0f1117] bg-[#fcfcfc] rounded-2xl

              shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)]
              
              flex items-center gap-5
              "
                key={skill.id}
              >
                <div
                  className={`p-5 shadow-[0_0_50px_0_rgba(196,206,213,0.3)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.3)] bg-[#fff] rounded-full ${
                    skill.title.includes("tailwindcss") && "px-5 py-7"
                  }
                ${skill.title.includes("bootstrap") && "px-5 py-6"}
                `}
                >
                  <Image
                    src={skill.img}
                    width={50}
                    height={50}
                    alt={skill.title}
                  />
                </div>
                <div>
                  <span className="text-[#616161] font-semibold text-sm uppercase">
                    {skill.title}
                  </span>
                  <h4 className="text-3xl font-extrabold">{skill.progress}%</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
