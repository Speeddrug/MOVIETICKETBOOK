import React from 'react'
import { assets } from '../assets/assets' // ✅ Make sure you have this file exporting assets properly

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        
        {/* Logo + Description */}
        <div className="md:max-w-96">
          <img alt="Logo" className="h-11" src={assets.logo} />
          <p className="mt-6 text-sm">
           Speed_BookShow is your fast and convenient platform to discover and book movies, events, 
           and shows online. With real-time seat selection, secure payments, and instant e-tickets, 
           Speed_BookShow makes your entertainment experience quick, seamless, and hassle-free.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img src={assets.googlePlay} alt="google play" className="h-9 w-auto" />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
          </div>
        </div>

        {/* Company + Contact Info */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>9119778987</p>
              <p>pragatiaggarwal2005@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} ©SPEEDDRUG. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
