"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "../utils/navLinksList";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav className="fixed mx-auto  top-0 left-0 right-0 z-10 backdrop-blur-lg">
      <div className="flex container lg:py-5 flex-wrap items-center justify-center mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-16 h-8 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[10px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600  after:translate-y-0.5 after:-translate-x-1">
              <span>
                <MoonIcon className="h-5 w-5 translate-x-1.5 translate-y-1.5" />
              </span>
            </div>
          </label>
        </div> */}
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
