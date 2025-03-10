import React from 'react'
import { useTheme } from '../context/ThemeContext'

const InformationSection = ({ title, subtitle, image, text, link, textLink }) => {
  const { theme } = useTheme()

  return (
    <div className={`dark:bg-black flex justify-center items-center px-10 md:px-28 informationWrapper`}>
      <div className="flex-1 informationLeft">
        <img 
          src={image} 
          alt="image information" 
          className="rounded-2xl w-10/12 h-10/12"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 informationRight">
        <p 
          className={`${theme === 'light' ? 'text-orangeColor' : 'text-orangeColor'} leading-tight transition-all duration-500`}
        >
          {subtitle}
        </p>

        <h1 
          className={`${theme === 'light' ? 'text-blueColor' : 'text-greenColor'} text-4xl font-bold leading-tight transition-all duration-500`}
        >
          {title}
        </h1>

        <p className={`${theme === 'light' ? 'text-grayColor' : 'text-white'}`}>{text}</p>

        <button href={link}>{textLink}</button>
      </div>
    </div>
  )
}

export default InformationSection