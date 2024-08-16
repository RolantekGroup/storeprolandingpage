import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { contactImg } from "../../assets/index";
import image1 from '../../assets/images/rolantek_img01.jpg';
import imageO6 from '../../assets/images/rolantek_img06.jpg'

const Product2 = () => {
  return (
    <>
    <div className='lg:hidden block'>


    <div className="w-full rounded-tr-[80px]  lgl:w-[35%] h-full bg-gradient-to-r p-8 lgl:p-8 rounded-lg  flex flex-col gap-6 justify-center">
        <div>
        <h1 className='font-bold text-orange-400 text-lg mt-8'>OUR PRODUCTS</h1>
        <h2 className="text-3xl font-bold text-white">Quinetessential lifestyle <br />  sparked by innovation</h2>
         
        </div>
      <img
        className="w-full rounded-tr-[80px]  h-[290px] object-cover rounded-lg mt-8 "
        src={imageO6}
        alt="contactImg"
      />
      {/* <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Manugbor P.</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-End Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a passionate and dedicated web developer based in Lagos, Nigeria. 
        With a strong love for all things tech and 
        creative mindset. 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 8124783577</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">princewillogechi7@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div> */}
    </div>
    </div>
    
    </>
  );
}

export default Product2