import React, { useState } from "react";
import ImgLogoWhite from "../assets/img/img_logo_white.png";
import ImgLogoBlue from "../assets/img/img_logo_blue.png";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-transparent">
      <div className="flex gap-2 items-center">
        <div className="h-14 w-14 imgWrapper">
          <img
            className="w-full h-full"
            src={theme === "light" ? ImgLogoBlue : ImgLogoWhite}
            alt="Logo"
          />
        </div>

        <div className="hidden headerNavbar">
          <p className={`${theme === "light" ? "text-blue-900" : "text-white"} text-2xl font-semibold`}>
            Temankajianmu
          </p>
        </div>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 navbarWrapper
          md:static md:flex md:flex-row md:justify-center md:bg-transparent md:text-inherit sm:gap-8 md:gap-10 lg:gap-12 md:py-0 dark:bg-black dark:text-white
          ${isOpen ? "block" : "hidden"} md:block`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-blue-900 dark:text-white hover:underline ${isActive ? "font-bold" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/activities"
          end
          className={({ isActive }) =>
            `text-blue-900 dark:text-white hover:underline ${isActive ? "font-bold" : ""}`
          }
        >
          Activities
        </NavLink>
        <NavLink
          to="/donations"
          end
          className={({ isActive }) =>
            `text-blue-900 dark:text-white hover:underline ${isActive ? "font-bold" : ""}`
          }
        >
          Donations
        </NavLink>
      </div>


      <div className={`flex gap-8 navbarRight ${theme === 'light' ? "text-blueColor" : "text-white"}`}>
        <button onClick={toggleTheme} className="text-3xl lg:text-xl">
          <i className={`fa-solid fa-${theme === "light" ? "sun" : "moon"}`}></i>
        </button>

        <button 
          className="md:hidden text-3xl lg:text-xl dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      
    </nav>
  );
};

export default Navbar;
