import React from 'react'
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src,link }) => {
  return (
    <div className="w-full p-4 xl:px-5 h-auto xl:py-10 rounded-[2%] flex flex-col bg-slate-950 group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <a href={link}>
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
        </a>
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          {/* title and icons */}
          <div className="flex items-center justify-between">
            <h3 className=" uppercase text-base text-white font-bold">
              {title}
            </h3>
            {/* icons */}
            
          </div>
          <p className="text-sm tracking-wide mt-3 text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard