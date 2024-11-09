import React from 'react';
import Network_image from '../assets/images/Network_image.png';
import california_image from '../assets/images/california_image.png';
import cloud_image from '../assets/images/cloud_image.png';
import colorado_image from '../assets/images/colorado_image.png';
import oipsum_image from '../assets/images/oipsum_image.png';

const AboutSection = () => {
  return (
    <div className='border-b-[1px] border-b-black py-11'>
      <h1 className='flex justify-center text-center font-bold text-xl'>
        Used by the world's most average companies
      </h1>
      <div className='grid grid-cols-2 items-center justify-center gap-5 mx-8 mt-8 opacity-20 md:grid-cols-5 lg:justify-between'>
        <img src={Network_image} alt="Network" className='w-full h-auto max-w-[150px] mb-4' />
        <img src={california_image} alt="California" className='w-full h-auto max-w-[150px] mb-4' />
        <img src={cloud_image} alt="Cloud" className='w-full h-auto max-w-[150px] mb-4' />
        <img src={colorado_image} alt="Colorado" className='w-full h-auto max-w-[150px] mb-4' />
        <img src={oipsum_image} alt="Oipsum" className='w-full h-auto max-w-[150px] mb-4' />
      </div>
    </div>
  );
}

export default AboutSection;
