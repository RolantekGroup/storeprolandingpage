import React, { useState } from 'react';
import logo from '../assets/images/R logo (orange).png';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Modal from './custom ui/Modal';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500 flex items-center">
          <img src={logo} width={28} alt="logo" className="pr-1" />
          <span>OLANTEK</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-6 items-center justify-center flex-1">
          <li className="relative group">
            <a href="#" className="hover:text-orange-500">Products</a>

            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-10">
              <li>
                <a href="/products/1" className="hover:text-orange-500 block">Product 1</a>
              </li>
              <li>
                <a href="/products/2" className="hover:text-orange-500 block">Product 2</a>
              </li>
              <li>
                <a href="/products/3" className="hover:text-orange-500 block">Product 3</a>
              </li>
            </ul>
          </li>
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#services" className="hover:text-orange-500">Contact</a></li>
          <li><a href="#page" className="hover:text-orange-500">Blog</a></li>
        </ul>

        {/* Buttons */}
        <div className='hidden lg:block space-x-2'>
          <Modal />
          <button className="bg-orange-200 px-6 py-3 rounded-[30px]">Sign In</button>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex gap-2'>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl lg:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="text-2xl font-bold text-orange-500 flex">
                <img src={logo} width={28} alt="logo" className="pr-1" />
                <span>OLANTEK</span>
              </div>

              {/* Mobile Navigation Links */}
              <ul className="flex flex-col gap-4">
                <li className="relative group text-white">
                  <a href="#" className="hover:text-orange-500">Products</a>

                  {/* Dropdown Menu */}
                  <ul className="absolute hidden group-hover:block bg-gray-900 shadow-lg rounded-lg p-4 ml-[80px] space-y-4 w-48 z-10">
                    <li>
                      <a href="/products/1" className="hover:text-orange-500 block">Product 1</a>
                    </li>
                    <li>
                      <a href="/products/2" className="hover:text-orange-500 block">Product 2</a>
                    </li>
                    <li>
                      <a href="/products/3" className="hover:text-orange-500 block">Product 3</a>
                    </li>
                  </ul>
                </li>
                <li className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-orange-500 duration-300">
                  <a href="#about">About</a>
                </li>
                <li className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-orange-500 duration-300">
                  <a href="#services">Blog</a>
                </li>
                <li className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-orange-500 duration-300">
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <div className='flex gap-2'>
                <Modal />
                <button className="bg-orange-200 px-6 py-3 md:hidden block rounded-[30px]">Sign In</button>
              </div>

              {/* Social Media Links */}
              <div>
                <div className='flex justify-between'>
                  <h2 className="text-base font-titleFont mb-4 text-white">Connect with us on</h2>
                </div>
                <span className="mediaIcon"><FaFacebookF /></span>
                <span className="mediaIcon"><FaTwitter /></span>
                <span className="mediaIcon"><FaLinkedinIn /></span>
                <span className="mediaIcon"><FaInstagram /></span>
              </div>

              {/* Close Mobile Menu Button */}
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
  );
};

export default Header;
