import React from 'react';
import ImgLogoWhite from '../assets/img/img_logo_white.png';
import ImgLogoBlue from '../assets/img/img_logo_blue.png';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-20 py-2">
      <div className="h-14 w-14">
        <img
          className="w-full h-full"
          src={theme === "light" ? ImgLogoBlue : ImgLogoWhite}
          alt="Logo"
        />
      </div>

      <div className={`flex gap-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          Trending Concerts
        </NavLink>
        <NavLink
          to="/concerts"
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          All Concerts
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          Account
        </NavLink>
      </div>

      <div className={`flex gap-6 ${theme === 'light' ? "text-blueColor" : "text-white"}`}>
        <button onClick={toggleTheme}>
          <i className={`fa-solid fa-${theme === 'light' ? 'sun' : 'moon'}`}></i>
        </button>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Contact Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
