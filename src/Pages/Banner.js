import React from "react";
import image from '../Images//banner7.jpg'
import image2 from "../Images//Code-collaboration.svg";
import Typical from "react-typical";
import banner from '../Images//banner6.webp'
import { Flip } from "react-reveal";

const Banner = () => {
  return (
    <section className="mb-[150px]">
      <section style={{backgroundImage: `url(${banner})`}} className=" bg-cover   mb-[100px]">
        <div className="container text-5xl   flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex  mt-12 flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <Flip left>
              <span className="text-5xl  leading-none sm:text-6xl text-red-400">I am a{" "}</span>
              </Flip>
            <h1 className="  leading-none sm:text-3xl">
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[ 
                "Full stack Developer", 2000, 
                "Mern Developer", 2000,
                "Digital marketer", 2000,
                "Youtuber", 2000,
                
            ]}
              />
            </h1>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image2}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <img
        src={image}
        alt=""
        className="w-5/6 mx-auto -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Banner;
