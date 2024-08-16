import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Rolantek StorePro", "Intelligent Analytics Automate Predict Scale.", ""],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 b-green-500">
      <div className="flex flex-col gap-5">
        <h4 className='text-orange-400 text-xl font-extrabold'>Rolantek StorePro</h4>
        <h1 className="text-6xl font-bold text-orange-500">
          Hi, There! <span className="text-orange-500 capitalize"></span>
        </h1>
        <h2 className="text-4xl font-bold text-orange-500">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="orange"
          />
        </h2>
        <p  className="pt-2 text-xl md:text-xl font-medium">
        Transform Your Marketing with Our Analytics SaaS: Autopilot, AI Predictions, Scalability, 
        Mobile-friendly Dashboard, and More for Effective Insights.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner