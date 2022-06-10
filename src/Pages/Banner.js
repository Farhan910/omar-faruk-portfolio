import React from "react";
import image2 from "../Images//Code-collaboration.svg";
import Typical from "react-typical";
import { Flip } from "react-reveal";
import { saveAs } from "file-saver";

const Banner = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1Dcmlg0DWZcgsvy5iTulJCMLWs-G-lveA",
      "example.pdf"
    );
  };
  
  return (
    
    <section className="mb-[150px] relative">
      <section
        style={{ backgroundImage: `url($})` }}
        className=" bg-cover   mb-[100px]"
      >
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex  mt-12 flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <Flip left>
              <span className="text-5xl  leading-none sm:text-6xl text-red-400">
                I am a{" "}
              </span>
            </Flip>
            <h1 className="  leading-none sm:text-3xl">
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "Full stack Developer",
                  2000,
                  "Mern Developer",
                  2000,
                  "Digital marketer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
              />
            </h1>
            <div >
              <button
                type="button"
                className="px-1 py-2  font-semibold border-2 rounded mt-5 dark:border-gray-100 dark:text-gray-100 relative hover:dark:text-white hover:bg-yellow-600 hover:border-1 transition-all"
                onClick={saveFile}
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image2}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 relative"
            />
          </div>
        </div>

        <div></div>
      </section>
    </section>
  );
};

export default Banner;
