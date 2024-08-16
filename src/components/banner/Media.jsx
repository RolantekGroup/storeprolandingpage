import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-bold mb-4">
            Find Us
          </h2>
          <div className="flex gap-4">
            <span className="mediaIcon">
              <FaFacebookF />
            </span>
            <span className="mediaIcon">
              <FaTwitter />
            </span>
            <span className="mediaIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-bold mb-4">
            CONTACT US
          </h2>
          <div className="flex gap-4">
          <button className="bg-orange-500 px-6 py-3 rounded-[30px]">Contact us</button>
          <button className="bg-orange-500 text-white border border-white px-6 py-3 rounded-[30px]">Get Started</button>
            
          </div>
        </div>
      </div>
  )
}

export default Media