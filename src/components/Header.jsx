import React, { useState } from 'react';
import logo from '../assets/images/R logo (orange).png'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from '../constants/index';
import { Link } from "react-scroll";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Modal from './custom ui/Modal';


const Header = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-orange-500 flex ">
            <img src={logo} width={28} alt="" className='pr-1' />
            <span>OLANTEK</span> 
            </div>
        <ul className="hidden lg:flex space-x-6">
          <li><a href="#about" className="hover:text-orange-500">Home</a></li>
          <li><a href="#services" className="hover:text-orange-500">About </a></li>
          <li><a href="#products" className="hover:text-orange-500">Blog</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Page</a></li>
        </ul>
       <div className='space-x-4'>

       <button className="bg-orange-200 px-6 py-3 rounded-[30px]">Login</button>
        {/* <button className="bg-orange-500 text-white border border-white px-6 py-3 rounded-[30px]">Contact Sales</button> */}
       <Modal />
       </div>
       
      <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl lg:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                
              <div className="text-2xl font-bold text-orange-500 flex ">
            <img src={logo} width={28} alt="" className='pr-1' />
            <span>OLANTEK</span> 
            </div>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-orange-500 duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>

                  
                ))}
              </ul>

              <div>
              <h2 className="text-base uppercase font-titleFont mb-4 text-white">
                  Find Us
                </h2>
                    <span className="mediaIcon">
                     <FaFacebookF />
                    </span>
                    <span className="mediaIcon">
                    <FaTwitter />
                    </span>
                    <span className="mediaIcon">
                    <FaLinkedinIn />
                    </span>
                    <span className="mediaIcon">
                    <FaInstagram/>
                    </span>
                  </div>
                  <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-purple-500 duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
              </div>
              </div>
        )}  
        </nav>
    </header>
        
  )
}

export default Header
