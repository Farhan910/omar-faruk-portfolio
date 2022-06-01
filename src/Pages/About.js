import React from "react";
import { Fade, Flip } from "react-reveal";
import Typical from "react-typical";
import { saveAs } from "file-saver";

const About = () => {
  const saveFile = () => {
    saveAs(
      "",
      "example.pdf"
    );
  };
  return (
    <div>
      
      <section className="bg-base-200 dark:text-gray-100 mb-[150px]">
        <Flip left>
          <h2 className="underline text-3xl text-primary text-center py-28">
            About Me
          </h2>
        </Flip>
        <Fade left>
          <div className="container  py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-4">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <Flip left>
                  <h2 className="text-5xl font-bold text-primary ">About me</h2>
                </Flip>
                <p className="dark:text-gray-400">
                  Iam shared some story of my life ,how im now in this stage .
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div class="card w-96 bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">My Past experience</h2>
                    <p>
                      <Typical
                        steps={[
                          "  I came to this line in about 2019 and since then I have been involved in programming, and I have taken several courses in it, trying to improve my skills.",
                          2000,
                        ]}
                        loop={1}
                        wrapper="p"
                      />
                    </p>
                  </div>
                </div>
                <div class="card w-96  bg-base-100  shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">My Goal</h2>
                    <p>
                      <Typical
                        steps={[
                          "i am starting to improve the performance of my code ,and i am trying to improve the performance, and trying to learn more about the programming, and iam trying to improve the performance",
                          2000,
                        ]}
                        loop={1}
                        wrapper="p"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default About;