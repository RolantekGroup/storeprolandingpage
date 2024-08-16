import React from 'react'
// import image1 from '../../assets/images/rolantek_img01.jpg'
import image1 from '../../assets/images/image 848.jpg'
import image2 from '../../assets/images/image 849.png'
import image3 from '../../assets/images/image 850.png'
import image4 from '../../assets/images/rolantek_img04.png'
import Card from './Card'


function Middle() {
    return (
        <>
       <div className='w-[95%] m-auto p-[50px] bg-orange-100'> 
        {/* heading */}
        <div className='flex items-center justify-center flex-col mb-7'>
            <h3 className='text-orange-600 font-serif font-semibold'>OUR SERVICES</h3>
            <h1 className='text-2xl font-bold text-center'>Innovative Solutions and <br /> Tailored Experiences</h1>

        </div>
        <div className=' pl-[50px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 h-[100%]'>
           <Card image={image1}
                title="Automobile Services & Maintenance"
                 des="Our Skilled team offers precision wheel balancing and alignment,
                  ensuring a smooth
                  and secure rides"/>
           <Card image={image2}
                title="Sale of Automobile Accessories"
                 des="Enhance your vehicle further with our range of essential Accesories, including
                 fire extinguishers, hydraulic jacks, C-caution, fire extinguishers.etc" />
            <Card image={image3}
             title="Renewable Energy Solutions" 
            des="Sustainable and cost-effective ways to generate clean electricity and reduce the carbon footprint
            with our state-of-the -art solar energy solutions" />
            <Card image={image4}
             title="Software Development"
            des="The tech division of our organization is dedicated to engineering great software systems meticulously designed
             to adhere to industry standards" />
          </div>
        </div>
         
        </div> 
        </>
    )
}

export default Middle
