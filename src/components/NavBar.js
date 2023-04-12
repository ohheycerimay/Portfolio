import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    // close the menu when a link is clicked
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  return (
    <body class="pt-20">
      <nav class="bg-black text-white fixed top-0 left-0 w-full h-20 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-20 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
              <a href="/home" class="font-bold text-lg">
                Ceri May Dorsey-Tyler
              </a>
            </div>

            <div class="md:hidden">
              <button
                type="button"
                class="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle menu"
                onClick={toggleMenu}>
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    className={menuOpen ? 'hidden' : 'block'}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  />
                  <path
                    className={menuOpen ? 'block' : 'hidden'}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 21H20V23H4V21Z"
                  />
                </svg>
              </button>
            </div>

            <div class="hidden md:block">
              <div class="ml-10 flex items-center space-x-4">
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleMenu}>
                  <NavLink className="navlink" to="/about">
                    About
                  </NavLink>
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleMenu}>
                  <NavLink className="navlink" to="/projects">
                    Portfolio
                  </NavLink>
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleMenu}>
                  <NavLink className="navlink" to="/contact">
                    Contact
                  </NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            menuOpen ? 'md:hidden block bg-black' : 'md:hidden hidden bg-black'
          }>
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              class="text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              <NavLink className="navlink" to="/about">
                About
              </NavLink>
            </a>
            <a
              href="#"
              class="text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              <NavLink className="navlink" to="/projects">
                Portfolio
              </NavLink>
            </a>
            <a
              href="#"
              class="text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              <NavLink className="navlink" to="/contact">
                Contact
              </NavLink>
            </a>
          </div>
        </div>
      </nav>
    </body>
  )
}

export default NavBar
