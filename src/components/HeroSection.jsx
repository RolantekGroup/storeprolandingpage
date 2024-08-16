import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover sectionbg bg-center h-[70vh]  text-white ">
      <div className="w-full pt-10 pl-10">
        
        <h1 className='text-orange-400  font-extrabold'>ROLANTEK GROUP LIMITED</h1>
        <h1 className="pt-3 text-4xl md:text-6xl font-bold">Your energy <br></br> solutions provider</h1>
        <p className="mt-4">Bringing to you the quintessential lifestyle sparked by <br /> innovation and the quest for great values.</p>
        <div className="mt-8 space-x-4">
          <button className="bg-orange-500 px-6 py-3 rounded-[30px]">Contact us</button>
          <button className="bg-transparent border border-white bg-black px-6 py-3 rounded-[30px]">Discover More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;