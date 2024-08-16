import React from 'react'
import FooterList from './FooterList'
import { middleList } from './constant'
import logo from '../assets/images/R logo (orange).png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
        <div className='w-full bg-green-500 text-white'>
            <div className='w-full bg-slate-950 py-1 mt-[50px]'>
                {/* this first div is for the border */}
             <div className='w-full border-b-[1px] border-gray-500 py-10 max-w-5xl mx-auto'>
                <div className='max-w-5xl mx-auto text-gray-300 grid grid-cols-2'>
                <div className='flex flex-col'>
                <div className="text-2xl font-bold text-orange-500 flex ">
                <img src={logo} width={30} alt="" className='pr-1 h-[30px]' />
                <span>OLANTEK</span> 
                </div>
                <p>105 Ndiechi Onuebonyi Igbeagu Izzi <br />
                 Ebonyi state Nigeria</p>
                <p className='mt-8'>Phone: +234 814 917 8353</p>
                <p>Email: support@rolantekgroup.com </p>
                </div>
                
                  
                  <div className=' grid grid-cols-3 gap-2'>
                       {/* <div className='bg-red-500'>  */}
                         {middleList.map((item) => (
                        <FooterList
                            key={item._id}
                            title={item.title}
                            listItem={item.listItem}
                        />
                        ))}</div>
                     
                  </div>
                </div>
               {/* second footer */}
                <div className='max-w-5xl mx-auto text-gray-300 flex justify-between mt-4'>
                  <div>
                    <p>CopyRights@2024 Rolantek. All Rights Reserved</p>
                  </div>
                  <div>
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
                </div>

               </div>
            </div>
             
         
        
        </>
    )
}

export default Footer
