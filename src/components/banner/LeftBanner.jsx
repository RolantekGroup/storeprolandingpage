import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Looking to optimise and scale your business operations?", "Retail Polaris is here to help!", ""],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  
    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20 b-green-500">
        <div className="flex flex-col gap-5">
          <h4 className='text-orange-400 text-xl font-extrabold'>Retail Polaris</h4>
          <h1 className="text-6xl font-semibold text-orange-500">
            Hi, There! <span className="text-orange-500 capitalize"></span>
          </h1>
          <h2 className="text-4xl font-bold text-orange-500 h-[80px] overflow-hidden">
            <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="orange"
            />
          </h2>
          <p className="pt-2 text-xl md:text-xl font-medium">
            Retail Polaris excels at simplifying your business operations and connecting it with major market players for mutual interuperability.
            We offer comprehensive tools to streamline retail operations, empowering businesses to thrive in the digital age. 
            <br />Let us help your business grow by connecting it to endless opportunities like never before.
          </p>
        </div>
        {/* Media */}
        <Media />
      </div>
    );
}

export default LeftBanner;
