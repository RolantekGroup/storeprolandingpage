import React from 'react'

import { FaArrowRight } from 'react-icons/fa'

function Card({ title, des, image }) {
    return (
        <>
        <div>

        <div className=' bg-white rounded-tr-[30px] p-[20px] w-[95%] h-[500px]'>
               <img src={image} alt="" className='w-[100%] h-[60%] mb-[10px] rounded-tr-[30px] shrink-0'/>
               <h2 className='font-semibold text-xl'>{title}</h2>
               <p className='text-sm leading mt-2'>{des}</p>
                 <div className='flex items-center mt-2'>
                    <p className='text-orange-600 font-bold'>Learn More</p>
                    <span className='pl-4 text-orange-600'><FaArrowRight/></span>
                 </div>
            </div>
        </div>
        
        </>
    )
}

export default Card
