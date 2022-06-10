import React from "react";
import image1 from "../Images//screencapture-doctor-home-webapp-web-app-2022-06-01-09_51_17.png";
import image2 from "../Images//screencapture-al-harmain-webapp-web-app-2022-06-01-09_53_27.png";
import image3 from "../Images//screencapture-bentley-car-manufactuters-web-app-2022-06-01-10_49_15.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Projects = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {data?.project}
            </h2>
            <p className="dark:text-gray-100">
              {data?.subject}
            </p>
          </div>
          <button
            type="button"
            
            onClick={() => navigate(`/projectCard/${data?._id}`)}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
