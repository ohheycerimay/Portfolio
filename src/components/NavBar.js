import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <nav class="bg-black text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
              <a href="#" class="font-bold text-lg">
                Ceri May Dorsey-Tyler
              </a>
            </div>

            <div class="hidden md:block">
              <div class="ml-10 flex items-center space-x-4">
                <a href="https://github.com/ohheycerimay" target="_blank">
                  <svg
                    class="w-6 h-6 text-gray-600 hover:text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0a12 12 0 0 0-3.8 23.3c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .6 2.4.4 3-.9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.2 1.2-3-1.2-.1-2.5-.4-2.5-2.2 0-.5.2-1.9 1.2-3.1 0 0 1-.3 3 .9.9-.3 1.9-.5 3-.5s2.1.2 3 .5c2.1-1.2 3-1 3-.9 1 .9 1.2 2.6 1.2 3.1 0 1.8-1.2 2-2.5 2.2.2.6.4 1.2.7 1.5.6 1.3 1.9 1.4 3 1 .1-.4.4-.8.8-.9 0-.1.6-.1 1 .1.6 0 1 .4 1 .9v1.9c0 .3.2.7.8.6a12 12 0 0 0-3.8-23.3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ohheycerimay/"
                  target="_blank"
                >
                  <svg
                    class="w-6 h-6 text-gray-600 hover:text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.2 0H2.8C1.3 0 0 1.3 0 2.8v18.4c0 1.5 1.3 2.8 2.8 2.8h18.4c1.5 0 2.8-1.3 2.8-2.8V2.8c0-1.5-1.3-2.8-2.8-2.8zm-6.3 18.5h-3.7v-6c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.8-1.6 2v6.4H5.2V7.8h3.4v1.4h.1c.5-.9 1.5-1.9 3.1-1.9 3.3 0 3.9 2.2 3.9 5v6.3z" />
                  </svg>
                </a>

                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <NavLink className="navlink" to="/home">
                    Home
                  </NavLink>
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <NavLink className="navlink" to="/about">
                    About
                  </NavLink>
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <NavLink className="navlink" to="/projects">
                    Portfolio
                  </NavLink>
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <NavLink className="navlink" to="/contact">
                    Contact
                  </NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
