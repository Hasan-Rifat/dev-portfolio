import React from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { CgWebsite } from "react-icons/cg";
import { FaFileCode } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { MdRocketLaunch } from "react-icons/md";

type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
  const allService = [
    {
      id: 1,
      title: "Discussion",
      text: "to underhand the project requirement it's very important for me, for that i discuss with full details to related projects if needed i communicate by online meeting",
      icon: <GoCommentDiscussion />,
    },
    {
      id: 2,
      title: "Planning",
      text: "Then i create a plan for the this projects. Planning gives high potential to complete the project on time and also gives a clear idea about the project",
      icon: <SlCalender />,
    },
    {
      id: 3,
      title: "Design",
      text: "i give high priority to design. i design the project with a unique and modern design. i use the latest technology for design. A nice design can improve your business quality",
      icon: <CgWebsite />,
    },
    {
      id: 4,
      title: "Coding",
      text: "the website is built by web language that's way we need to code for every website. it's a very important part of the website. clean and developer friendly code is very important for me",
      icon: <FaFileCode />,
    },
    {
      id: 5,
      title: "Submit for review",
      text: "After complete the project i submit the project for review. if there is any problem i fix it. after that i submit the project for client review",
      icon: <VscFeedback />,
    },
    {
      id: 6,
      title: "Launch",
      text: "After client review i launch the project. i give full support for the project. if there is any problem i fix it. i give full support for the project",
      icon: <MdRocketLaunch />,
    },
  ];
  return (
    <section
      id="services"
      className="py-[100px] dark:bg-[#212428] bg-[#ebf1f6]" //
    >
      <div className="xl:container mx-auto px-[5%] py-[0.5%]">
        <div className="md:flex lg:items-center justify-between lg:gap-[118px] ">
          <div className="w-full">
            <h5
              className="text-left font-semibold text-primary 
            text-base leading-9 capitalize"
            >
              creative services
            </h5>
            <h3
              className="
            xl:text-4xl
            md:text-[32px] md:leading-[44px]
            sm:text-[30px] sm:leading-[40px]
            text-[24px] leading-[36px] 
            dark:text-[#fff] text-secondary font-extrabold"
            >
              <span className="dark:text-primary"> What I</span> Do
            </h3>
          </div>
          <div className="mt-4 md:mt-0 w-full">
            <p className="text-left lg:max-w-[472px] w-full">
              Promote your blog posts, case udie, and product ouncems with the
              the branded videoscustomers coming back for services Makes best
              effort.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5 pt-[46px]">
          {allService.map(({ id, icon, text, title }) => (
            <div
              key={id}
              className="
              bg-[#fff] dark:bg-[#2b2e33]
              z-20
              relative
              px-[40px] py-[50px] 
              shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500"
            >
              <div className="">
                <div
                  className={`z-10 absolute left-[41px] top-0 h-[80px] w-[77px] ${
                    id === 1 && "bg-[#48cda0] bg-opacity-[0.16]"
                  }
              ${id === 2 && "bg-[#ed5f38] bg-opacity-[0.16]"}
              ${id === 3 && "bg-[#007eff] bg-opacity-[0.16]"}
              ${id === 4 && "bg-[#e6bc13] bg-opacity-[0.16]"}
                ${id === 5 && "bg-[#ed38d1] bg-opacity-[0.16]"}
                ${id === 6 && "bg-[#a348cd] bg-opacity-[0.16]"}`}
                ></div>
                <span
                  className={`p-[15px] rounded-full text-white text-5xl inline-block text-[#fff]
              ${id === 1 && "bg-[#48cda0]"}
              ${id === 2 && "bg-[#ed5f38]"}
              ${id === 3 && "bg-[#007eff]"}
              ${id === 4 && "bg-[#e6bc13]"}
                ${id === 5 && "bg-[#ed38d1]"}
                ${id === 6 && "bg-[#a348cd]"}
              `}
                >
                  {icon}
                </span>
              </div>
              <div>
                <h4 className="text-[25px] leading-[37.5px] mt-[20px] mb-[15px] font-bold">
                  {title}
                </h4>
                <p className="text-lg leading-7  dark:text-[#adb5bd] text-[#666] ">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
