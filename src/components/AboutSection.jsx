import React from 'react';
import image1 from '../assets/images/rolantek_img01.jpg';
import RolanCard from './cards/RolanCard';
import Network_image from '../assets/images/Network_image.png'
import california_image from '../assets/images/california_image.png'
import cloud_image from '../assets/images/cloud_image.png'
import colorado_image from '../assets/images/colorado_image.png'
import oipsum_image from '../assets/images/oipsum_image.png'
// import Network_image from '../assets/index'



const AboutSection = () => {
  return (
   <div className='border-b-[1px] border-b-black py-11 items-center '>
    <h1 
    className='flex justify-center text-center font-bold text-xl'>
      Used by the world's most average companies</h1>
      <div className='flex justify-between mx-11 mt-8 opacity-20 '>
        <img src={Network_image} width={170}  />
        <img src={california_image} width={170} />
        <img src={cloud_image} width={170} />
        <img src={colorado_image} width={170} />
        <img src={oipsum_image} width={170} />
      </div>
   </div>
  );
}

export default AboutSection;