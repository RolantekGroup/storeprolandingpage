import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 justify-between">
      <div>
        <h2 className="text-base uppercase font-bold mb-4">
          Connect with us on
        </h2>
        <div className="flex gap-4">
          {/* Facebook Link */}
          <a href="https://www.facebook.com/retailpolaris" target="_blank" rel="noopener noreferrer" className="mediaIcon">
            <FaFacebookF />
          </a>
          {/* Twitter Link */}
          <a href="https://www.x.com/retailpolaris" target="_blank" rel="noopener noreferrer" className="mediaIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/retail-polaris" target="_blank" rel="noopener noreferrer" className="mediaIcon">
            <FaLinkedinIn />
            </a>
          {/* LinkedIn Link */}
          <a href="https://instagram.com/retailpolaris" target="_blank" rel="noopener noreferrer" className="mediaIcon">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div >
        <h2 className="text-base uppercase font-bold mb-4">
          Ready to Boost Your Business?
        </h2>
        <div className="flex justify-start gap-4">
          <button className="bg-orange-500 text-white border border-white px-6 py-3 rounded-[30px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Media;
