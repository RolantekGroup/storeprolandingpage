import React from 'react'
import { useState } from 'react';
import contactImg from '../../assets/images/contactImg.png'
import charts_1 from '../../assets/images/charts_1.png'
import Histogram_charts from '../../assets/images/Histogram_charts.png'
import charts_2 from '../../assets/images/charts_2.png'
import charts_3 from '../../assets/images/charts_3.png'
import charts_4 from '../../assets/images/charts_4.png'
import ProjectsCard from './ProjectsCard';

function Contact() {
 
  

    return (
        <div>

             
            <div className=' mx- mt-8 w-[95%] m-auto pb-11 px-1'>
            <div className='flex justify-center pt-8 pb-4'>
                  <h1 className='text-[30px]  font-extrabold leading-2 text-center'>
                  Advanced Solutions on Real-time Inventory tracking, AI powered insights, Easy payment options and more.
                   <br />  Retailer- Manufacturer
                   connectivity, Mobile-friendly Dashboard,Easy payment options and more.
                  </h1>
                 </div>
            <div className='w-full flex flex-col lg:flex-row justify-between bg-green-5 gap-4'>
                <div className='lg:w-[40%] w-full bg-slate-950 h-[560px] rounded-tr-[40px]'>
                     <div className='px-8 mt-6'>
                        <h1 className='text-2xl text-white font-bold'>Real-Time Inventory Tracking</h1>
                        <p className=' text-lg text-white leading-1 pt-4'>Stay on top of your stock with instant updates and automated alerts, ensuring you never run out of
                        high-demand products or overstock. Effortlessly manage inventory, reduce waste, and optimize stock
                        levels to drive sales and profitability.</p>
                     </div>
                     <div className="m-8 flex items-center justify-center">
            <button className="bg-white rounded-[30px] p-2 min-w-[120px] md:w-[25%]">
                <span></span>
                Google Play
            </button>
            <button className="bg-white rounded-[30px] p-2 ml-5  md:ml-10 md:mt-0 min-w-[120px] md:w-[25%]">
                <span></span>
                App Store
            </button>
            </div>

            <div className="rounded-[50px] flex items-center justify-center">
            <img
                className="px-8 h-64 object-contain mb-2 cursor-pointer"
                src={charts_1}
                alt="contactImg"
            />
            </div>

                    
     </div>


     <div className='lg:w-[60%] w-full  bg-slate-950 h-[560px] px-12 py-5'>
     <div className='px- mt-8'>
            <h1 className='text-2xl text-white font-bold'>Mobile-Friendly Dashboard</h1>
            <p className='text-lg text-white leading-1 pt-4'>Manage your retail business from anywhere with a seamless, mobile-optimized dashboard. Access
        real-time sales, inventory and performance analytics on-the-go, ensuring total control at your
        fingertips. </p>
        </div>

        <div className='rounded-[50px] mt-3 flex items-center justify-center '>
        <img
      className="px- h-64 min-w-[280px] md:h-72 md:min-w-[400px] lg:h-80  object-contain mb- cursor-pointer"
      src={Histogram_charts}
      alt="contactImg"
    />
        </div>
    </div>
    </div>
    
        {/*  other charts */}
        <div className='bg  mx-auto mt-11'>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

    <ProjectsCard
    title="AI-Powered Insights"
    des="Leverage AI-driven analytics to predict sales trends, optimize pricing, and make smarter business
        decisions. Get actionable insights in real-time, empowering you to stay ahead of the competition and
        boost profits."
    src={charts_3}
    link='https://standard-dashboard-git-main-princewill-ogechis-projects.vercel.app/'
    />
    <ProjectsCard
    title="Retailer-Manufacturer Connectivity"
    des=" Directly connect with manufacturers to receive real-time price updates and market trends. Streamline
    your supply chain, enhance relationships, and adjust strategies instantly for greater efficiency."
    src={charts_2}
    link=' https://ogechi4.github.io/Image-Search/'
    />
    <ProjectsCard
    title="Easy Payment Options"
    des="Offer fast, secure, and flexible payment options with Rolantek Pay, integrated directly into the
        platform. Ensure smooth transactions, enhance customer satisfaction, and track payments
        effortlessly. "
    src={charts_4}
    
    />
    
    </div>
        </div>
        </div>
    
    </div>
    )
}

export default Contact
