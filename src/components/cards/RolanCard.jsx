import React from 'react'
import image1 from '../../assets/images/rolantek_img01.jpg'

function RolanCard({image,width}) {
    return (
        <div>
             <div className='relative w-[400px] '>
            <img src={image} alt="" className='rounded-tl-[35px] w-[400px]' width={width} />
            <div className="absolute  left-6 -top-[14px] rounded-tr-[20px] p-4 bg-orange-500 bg-opacity-75 text-orange-500 rounded-t"></div>
            <div className="absolute left-[320px] top-[80px] h-[180px] w-[100px] rounded-tr-[20px] p-4 bg-orange-500 bg-opacity-75 text-orange-500 rounded-t" ></div>
          </div>
        </div>
    )
}

export default RolanCard
