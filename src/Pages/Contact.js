import React from "react";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Flip, Slide } from "react-reveal";

const Contact = () => {
  return (
    <div className="mb-[150px] px-12">
        <Flip left>
      <h2 className="underline text-3xl text-primary text-center mb-[50px]">Contact With me</h2>
      </Flip>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1">
        <div class="card lg:max-w-lg bg-base-300 shadow-xl">
          <p className="text-8xl mx-auto py-5 text-blue-500">
            <BsMessenger />
          </p>
          <div class="card-body">
            <h2 class="card-title text-primary">Messenger</h2>
              <Slide left>
                  
            <p>This way to contact with me on messenger !</p>
              </Slide>
            <div class="card-actions justify-end">
                <a href="https://m.me/farhan.faruk.9022"  target="_blank" ><button class="btn btn-secondary">Open Messenger</button></a>
              
            </div>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-300 shadow-xl">
          <p className="text-8xl mx-auto py-5 text-green-500">
            <BsWhatsapp />
          </p>
          <div class="card-body">
            <h2 class="card-title text-primary">Whats App</h2>
            <Slide left>

            <p>This way to contact with me on Whatsapp!</p>
            </Slide>
            <div class="card-actions justify-end">
                <a href="https://wa.me/+8801888702284" target="_blank" ><button class="btn btn-secondary">Open Whats App</button></a>
              
            </div>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-300 shadow-xl">
          <p className="text-8xl mx-auto py-5 text-blue-500">
            <BsLinkedin />
          </p>
          <div class="card-body">
            <h2 class="card-title text-primary">Linkedin</h2>
            <Slide left>

            <p>This way to contact with me on Linkedin!</p>
            </Slide>
            <div class="card-actions justify-end">
                <a href="https://www.linkedin.com/in/farhan-ahmed-1b8b3a220/" target="_blank" ><button class="btn btn-secondary mt-5">Open LInkedin</button></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
