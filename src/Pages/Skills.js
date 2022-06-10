import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa'; 
import { DiCss3 } from 'react-icons/di'; 
import { SiJavascript } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="my-28">
        <h2 className=" text-3xl text-primary text-center mb-12">Skills</h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 ml-10 lg:px-[450px]  gap-3">
            
            <div>
            <FaReact  data-aos="fade-right" className="text-9xl rounded-lg text-[#61DAFB] bg-base-300 relative p-2"/>
            </div>
            <div>
            <SiJavascript data-aos="fade-down" className="text-9xl rounded-lg text-[#FDA65D] bg-base-300 relative p-2"/>
            </div>
            <div>
            <FaHtml5 data-aos="fade-down" className="text-9xl rounded-lg text-[#E34F26] bg-base-300 relative p-2"/>
            </div>
            <div>
            <DiCss3 data-aos="fade-left" className="text-9xl rounded-lg text-[#3D73A8] bg-base-300 relative p-2"/>
            </div>
            <div>
            <SiNodedotjs data-aos="fade-up-right" className="text-9xl rounded-lg text-[#61DAFB] bg-base-300 relative p-2"/>
            </div>
            <div>
            <SiMongodb data-aos="fade-up" className="text-9xl rounded-lg text-[#00684A] bg-base-300 relative p-2"/>
            </div>
            <div>
            <BsGithub data-aos="fade-up" className="text-9xl rounded-lg text-[black] bg-base-300 relative p-2"/>
            </div>
            <div>
            <SiVisualstudiocode data-aos="fade-up-left" className="text-9xl rounded-lg text-[#3D73A8] bg-base-300 relative p-2"/>
            </div>
        </div>
        </div>
    );
};

export default Skills;