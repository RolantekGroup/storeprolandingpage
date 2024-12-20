import React from "react";


function Analytics() {
    return (
        <div>
        <div className='mt-8 bg-slate-950 mb-3 m-auto rounded-tr-[80px] lg:w-[85%] w-[100%] h-[450px]'>
               <h1 className="pt-12 flex items-center justify-center text-white font-bold text-2xl text-center">We simplify retail operations and connect the value chain through tech..</h1>
              <div className="mt-10">
              <p 
              className="py-8 justify-center items-center flex text-white  text-center text-md tracking-wide mt-3  duration-300 ">
                Let us help your business grow by connecting it to endless opportunities like never before.
              </p>
                <div className="flex items-center justify-center">
                    <input className=" relative flex-grow-0 lg:w-[400px] w-[285px] h-12 px-8 py-8 rounded-[40px]" type="text" placeholder="enter your email" />
                    <button className=" bg-orange-500 px-6 py-3 rounded-[30px] absolute lg:ml-[235px] ml-[150px]">Get Started</button>
                </div>
              </div>
            </div>
            </div>
       );
    }
    
    export default Analytics;