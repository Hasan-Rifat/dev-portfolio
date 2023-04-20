import React from "react";
import { MdAttachEmail, MdLocationOn } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="h-screen flex items-center mt-[200px] md:mt-0">
      <div className="xl:container mx-auto px-[5%] py-[0.5%]">
        <div className="mt-[200px] md:mt-0">
          <div className="p-16 dark:bg-[#0f1117]  bg-[#fff] grid grid-cols-1 lg:grid-cols-2 items-center  rounded-lg shadow-[0_0_50px_0_rgba(0,0,0,0.1)]">
            <div>
              <h2 className="text-5xl dark:text-[#fff] text-[#121212] font-bold mb-10">
                Let's get in touch
              </h2>
              <div>
                <div className="flex gap-5 items-center ">
                  <div className="p-5 rounded-xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:bg-primary">
                    <SlCallOut
                      fontSize={20}
                      fontWeight={700}
                      className="dark:text-[#fff] text-[#8670ef] "
                    />
                  </div>
                  <div>
                    <span className="text-[#848484] text-base uppercase">
                      phone
                    </span>
                    <h4 className="dark:text-[#fff] text-[#121212] font-semibold text-lg mt-2">
                      +8801768227738
                    </h4>
                  </div>
                </div>
                <div className="flex gap-5 items-center my-8">
                  <div className="p-5 rounded-xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] dark:bg-primary dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] ">
                    <MdAttachEmail
                      fontSize={20}
                      fontWeight={700}
                      className="dark:text-[#fff] text-[#8670ef] "
                    />
                  </div>
                  <div>
                    <span className="text-[#848484] text-base uppercase">
                      email
                    </span>
                    <h4 className="dark:text-[#fff] text-[#121212] font-semibold text-lg mt-2 break-all">
                      contacthasanrifat@gmail.com
                    </h4>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="p-5 rounded-xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] dark:bg-primary  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] ">
                    <MdLocationOn
                      fontSize={20}
                      fontWeight={700}
                      className="dark:text-[#fff] text-[#8670ef] "
                    />
                  </div>
                  <div>
                    <span className="text-[#848484] text-base uppercase">
                      Address
                    </span>
                    <h4 className="dark:text-[#fff] text-[#121212] font-semibold text-lg mt-2">
                      comilla, Bangladesh
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <form className=" p-10 dark:bg-[#181a1d] bg-[#f5f7f4] rounded-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none bg-transparent border-b border-red-500 w-full  mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200 dark:bg-[#181a1d] bg-[#f5f7f4] capitalize dark:placeholder-[#fff] placeholder-[#121212]"
                      type="text"
                      placeholder="your full name"
                      aria-label="Full name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <input
                      className="appearance-none bg-transparent border-b border-red-500 w-full  mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200 dark:bg-[#181a1d] bg-[#f5f7f4] capitalize dark:placeholder-[#fff] placeholder-[#121212]"
                      type="email"
                      placeholder="email address"
                      aria-label="Full name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <textarea
                      rows={10}
                      className="appearance-none bg-transparent border-b border-red-500 w-full  mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none dark:bg-[#181a1d] bg-[#f5f7f4] dark:placeholder-[#fff] placeholder-[#121212]"
                      type={"text"}
                      placeholder="your message"
                    />
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="btn mt-2 shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-[#fff] font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
