import React, { useRef } from "react";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Flip, Slide } from "react-reveal";
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tobz255', 'template_gv3o4os',form.current, 'NU1AbEAbbOjC8_grS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      swal("Good job!", "You clicked the button!", "success");
      
    
  };
  return (
    <div className="mb-[150px] px-12">
      <Flip left>
        <h2 className=" text-3xl text-primary text-center mb-[50px]">
          Contact With me
        </h2>
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
              <a href="https://m.me/farhan.faruk.9022" target="_blank">
                <button class="btn btn-secondary">Open Messenger</button>
              </a>
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
              <a href="https://wa.me/+8801888702284" target="_blank">
                <button class="btn btn-secondary">Open Whats App</button>
              </a>
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
              <a
                href="https://www.linkedin.com/in/farhan-ahmed-1b8b3a220/"
                target="_blank"
              >
                <button class="btn btn-secondary mt-5">Open LInkedin</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="py-6 relative mt-12  bg-base-200 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
             ref={form}
            
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Your Full name</span>
              <input
                name="name"
                placeholder="Name"
                className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 bg-base-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Your Email address</span>
              <input
                name="email"
                placeholder="Email"
                className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 bg-base-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                name="message"
                placeholder="Type here"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 bg-base-100"
                spellcheck="false"
              ></textarea>
            </label>
            <button
            onClick={sendEmail}
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
            >
              Sent Email
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
