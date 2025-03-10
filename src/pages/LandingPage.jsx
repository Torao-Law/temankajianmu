import React from 'react'
import Navbar from '../components/Navbar'
import ImgMosque from '../assets/img/img_mosque.png'
import ImgAlquranLight from '../assets/img/img_alquran_light.jpg'
import ImgAlquranDark from '../assets/img/img_alquran_dark.png'
import ImgLightDark from '../assets/img/img_light_dark.jpg'
import { useTheme } from '../context/ThemeContext'
import InformationSection from '../components/InformationSection'
import Footer from '../components/Footer'

const LandingPage = () => {
  const { theme } = useTheme()

  const text = "Komunitas atau platform yang menyediakan teman atau partner untuk belajar agama bersama, saling berbagi ilmu, mendiskusikan topik keagamaan, dan mendukung satu sama lain dalam memperdalam pemahaman serta pengamalan ajaran agama secara interaktif dan mendalam."

  return (
    <div className={`h-full dark:bg-black transition-all duration-500`}>
      <div className="z-50">
        <Navbar />
      </div>

      <div className="flex px-10 md:ps-20 mb-24 landingpageWrapper" style={{height: "75vh"}}>
        <div className="flex-1 md:mt-20 leftContent">
          <h1 className={`${theme === 'light' ? 'text-blueColor': 'text-greenColor'} text-5xl font-bold leading-tight transition-all duration-500`}>
            Bersama Menyusuri Ilmu dan Hikmah Al-Quran & Sunnah
          </h1>
          <p className={`${theme === 'light' ? 'text-grayColor': 'text-white'} mt-4 transition-all duration-500`}>
            "Barang siapa menempuh jalan untuk menuntut ilmu, Allah akan memudahkan baginya jalan ke surga." - {" "}
            <span className="font-semibold">(HR. Tirmidzi)</span>
          </p>

          <button  
            className={`${theme === 'light' ? 'bg-orangeColor' : 'bg-orangeColor'} mt-14 px-8 py-2 rounded font-bold transition-all duration-500`}
            onClick={() => window.location.href = "https://chat.whatsapp.com/GwvtrVjR0GK6SVPkdC7a39"}
          >
            Join Grub
          </button>
        </div>
        
        <div className="relative flex-1 rightContent">
          <img 
            src={theme === 'light' ? ImgMosque : ImgLightDark} 
            alt="Image Hero" 
            className="w-full h-full"
            style={{
              objectFit: "cover", 
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
              transition: "opacity 0.5s ease-in-out"
            }}
          />
        </div>
      </div>

      <div className='mb-24'>
        <InformationSection 
          image={theme === 'light' ? ImgAlquranLight : ImgAlquranDark} 
          link={"#"}
          subtitle={"Tentang Kami"}
          title={"Teman Kajianmu"}
          text={text}
          />
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage
