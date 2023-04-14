import Link from "next/link";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type ModelProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  item: {
    id: number;
    url: string;
    title: string;
    clientCode: string;
    categories: string[];
    technology: string[];
    descriptions: string;
    serverCode: string;
    fullStack?: boolean | undefined;
    update: boolean;
    features: string[];
  };
};

const Model: React.FC<ModelProps> = ({ open, setOpen, item }) => {
  const {
    id,
    url,
    categories,
    clientCode,
    descriptions,
    serverCode,
    technology,
    title,
    update,
    fullStack,
    features,
  } = item;
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[9999] ">
      <div></div>
      <div
        className=""
        //fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] //bg-[#1f1f1f]
      >
        <div className="w-11/12 max-w-5xl mx-auto   rounded-xl">
          <div className="p-5 relative">
            <div>
              <div className="">
                <h2>{title}</h2>
                <Link href={url}>Live site</Link>
                <button
                  onClick={() => setOpen(false)}
                  className=" bg-[#fff] rounded-full absolute right-0 top-0"
                >
                  <IoIosCloseCircleOutline fontSize={28} />
                </button>
              </div>
              <p>{descriptions}</p>
            </div>

            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Model;
