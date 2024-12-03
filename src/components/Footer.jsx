import React from 'react';
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className={`${theme ==='light' ? 'bg-blueColor' : 'bg-grayColor'} text-gray-300 py-6`}>
      <div className="container mx-auto flex flex-col items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Temankajianmu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
