"use client";
import Link from "next/link";
import { useState } from "react";
import VibyLogoPng from "../../../public/png/logoTransparent.png";
import "../Header/Header.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav-gradient">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-5">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={VibyLogoPng.src}
            width={150}
            alt="Viby Logo"
            color="white"
          />
        </a>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen ? "true" : "false"}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isDropdownOpen ? "" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row ">
            <li>
              <Link
                href={"/blogs"}
                className="block py-2 px-3 font-bold text-lg text-white  rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary  md:dark:bg-transparent hover:text-blue-600 "
                aria-current="page"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                className="block py-2 px-3 font-bold text-lg text-white  rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary  md:dark:bg-transparent hover:text-blue-600"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block py-2 px-3 font-bold text-lg text-white  rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary  md:dark:bg-transparent hover:text-blue-600"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
