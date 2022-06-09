import React from "react";
import { Link } from "react-router-dom";
import Pulse from 'react-reveal/Pulse';

const Navbar = () => {
  return (
    <div>
      
      <div class=" relative navbar bg-base-200">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li className="text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white">
                <Link to="/aboutMe">About Me</Link>
              </li>
              <li className="text-white">
                <Link to="/project">My Projects</Link>
              </li>
              <li className="text-white">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Pulse>
         
          <a class="btn btn-ghost normal-case text-xl text-white hover:dark:text-primary">Omar Faruk</a>
        </Pulse>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li className="hover:dark:text-primary text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:dark:text-primary text-white">
              <Link to="/aboutMe">About me</Link>
            </li>
            <li className="hover:dark:text-primary text-white">
              <Link to="/project">My Projects</Link>
            </li>
            <li className="hover:dark:text-primary text-white">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
