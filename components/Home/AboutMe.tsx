import Image from "next/image";
import React from "react";
import img from "../../images/hero-left.svg";
import { BsRecordCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

type AboutMeProps = {};

const AboutMe: React.FC<AboutMeProps> = () => {
  const info = [
    { id: 1, title: "First Name", text: "Hasan" },
    { id: 2, title: "Last Name", text: "Hosan" },
    { id: 3, title: "Address", text: "comilla, Bangladesh" },
    { id: 4, title: "Phone", text: "+88 01768227738" },
    { id: 5, title: "Age", text: "24" },
    { id: 6, title: "Email", text: "contacthasanrifat@gmail.com" },
    { id: 7, title: "Freelance", text: "Available" },
    { id: 8, title: "Language", text: "English, Bangla" },
  ];
  return (
    <section
      id="about"
      className="py-[400px] h-screen flex items-center  border-b-[1px] dark:border-accent border-[#0000] dark:bg-success"
      //bg-[#ebf1f6]
    >
      <div className="xl:container mx-auto px-[5%] py-[0.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div>
            <div>
              <div className="">
                <h2
                  className="
            xl:text-4xl
            md:text-[32px] md:leading-[44px]
            sm:text-[30px] sm:leading-[40px]
            text-[24px] leading-[36px] 
            dark:text-[#fff] text-secondary font-extrabold"
                >
                  <span className="dark:text-primary"> ABOUT</span> ME
                </h2>
              </div>
            </div>
            {/*  <ul className="grid 2xl:grid-cols-2 gap-1 p-5">
              {info.map(({ id, title, text }) => (
                <li
                  key={id}
                  className={`my-[10px] block dark:text-[#d4dbde] text-[17px] leading-6`}
                >
                  <div className="flex items-center gap-3">
                    <span>
                      <BsRecordCircle className="text-primary" />
                    </span>
                    <div>
                      <span>{title}</span> : <span>{text}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul> */}
            <div
              className="dark:text-[#e2e8f0] text-[#4e545d]
       
             
              lg:text-[20px] leading-[26px] sm:leading-8 
              md:text-[18px] 
              sm:text-[16px]  py-[20px] sm:pt-[20px] sm:pb-[25px]
              text-[14px]  "
            >
              <p className="font-semibold mb-4">
                I'm Hasan Rifat and I am passionate about web development. I
                work a minimum of 13-14 hours every day because I love it.
              </p>
              <p className="">
                it's my life's work. My goal is to satisfy clients by
                understanding what they want for their website, helping them
                from the beginning to the end of the project, and providing
                support for any problems. If needed, I communicate through video
                or audio conversations to understand project requirements and
                resolve issues. After completing websites and projects, I
                provide instructions on how clients can manage, edit, update,
                add pages and posts to their website by themselves. If
                necessary, I can also send video tutorials.
              </p>
            </div>
          </div>
          <div className="p-20 relative mb-5 sm:mb-0">
            <Image
              src={img}
              alt="about me image"
              className=" dark:bg-[#181a1d] bg-[#fff]  rounded-xl shadow-xl"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
