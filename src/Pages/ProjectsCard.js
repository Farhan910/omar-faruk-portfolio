import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import Typical from "react-typical";

const ProjectsCard = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://whispering-falls-57337.herokuapp.com/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  });

  return (
    <div className="bg-base-100 relative">
      <section className=" px-12 dark:text-gray-100 mb-[150px]">
        <div className="container  max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div></div>
          <div className="grid lg:gap-8 lg:grid-cols-2 grid-cols-1 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                {project?.project}
              </h3>
              <Typical
                className="mt-3 text-lg dark:text-gray-400"
                steps={[project?.subject, 2000]}
                loop={Infinity}
                wrapper="p"
              />

              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      <h2>Features</h2>
                    </h4>
                    <Typical
                      className="mt-3 text-lg dark:text-gray-400"
                      steps={[project?.feature1, 2000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Typical
                      className="mt-3 text-lg dark:text-gray-400"
                      steps={[project?.feature2, 2000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Typical
                      className="mt-3 text-lg dark:text-gray-400"
                      steps={[project?.feature3, 2000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Typical
                      className="mt-3 text-lg dark:text-gray-400"
                      steps={[project?.feature4, 2000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Typical
                      className="mt-3 text-lg dark:text-gray-400"
                      steps={[project?.feature5, 2000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                </div>

                <div className="flex ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center hidden lg:block justify-center w-8 h-8 rounded-md bg-primary dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg hidden lg:block font-medium leading-6 dark:text-gray-50">
                      Technology :
                    </h4>
                    <Typical
                      className="mt-3 text-lg hidden lg:block dark:text-gray-400"
                      steps={[project?.technology, 2000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-full dark:text-gray-50">
              <button
                aria-label="Slide back"
                type="button"
                className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                <svg
                  width="8"
                  height="14"
                  fill="none"
                  viewBox="0 0 8 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div class="h-[700px] carousel carousel-vertical rounded-box">
                <div class="carousel-item h-full">
                  <img src={project?.image} />
                </div>
                <div class="carousel-item h-full">
                  <img src={project?.image2} />
                </div>
                <div class="carousel-item h-full">
                  <img src={project?.image3}/>
                </div>
                
              </div>
              <button
                aria-label="Slide forward"
                id="next"
                className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button class="btn btn-outline ml-[100px] ">
          <a target="_blank" className="flex text-sm " href={project?.live}>
            Live Demo <BiLinkExternal className="text-xl" />
          </a>
        </button>
        <button class="btn btn-outline ml-[100px] ">
          <a target="_blank" className="flex text-sm " href={project?.gitcode}>
            Git client
            <BiLinkExternal className="text-xl" />
          </a>
        </button>
        <button class="btn btn-outline ml-[100px] ">
          <a
            target="_blank"
            className="flex text-sm "
            href={project?.girserver}
          >
            Git server <BiLinkExternal className="text-xl" />
          </a>
        </button>
      </section>
    </div>
  );
};

export default ProjectsCard;
