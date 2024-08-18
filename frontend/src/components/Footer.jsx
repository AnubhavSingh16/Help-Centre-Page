import React from "react";

function Footer() {
  return (
    <div className="bg-black h-full w-full text-white p-8 flex relative">
      <div className="flex flex-col md:flex-row justify-evenly w-full  md:w-4/5 list-none space-y-8 md:space-y-0 md:space-x-8">
       
        <div className="">
          <h1 className="text-lg font-bold pb-2">Abstract</h1>
          <li className="text-xs">Branches</li>
         
        </div>

        <div className="">
          <h1 className="text-lg font-bold pb-2">Resources</h1>
          <li className="text-xs ">Blog</li>
          <li className="text-xs">Help Center</li>
          <li className="text-xs">Release Notes</li>
          <li className="text-sm">Status</li>
        </div>

        <div className="">
          <h1 className="text-lg font-bold pb-2">Community</h1>
          <li className="text-xs">Twitter</li>
          <li className="text-xs">LinkedIn</li>
          <li className="text-xs">Facebook</li>
          <li className="text-xs">Dribble</li>
          <li className="text-xs">Podcast</li>
        </div>

       
        <div className="abstract">
          <h1 className="text-lg font-bold pb-2">Company</h1>
          <li className="text-xs">About us</li>
          <li className="text-xs">Careers</li>
          <li className="text-xs">Legal</li>
          
          <div className="abstract pt-2">
          <h1 className="text-lg font-bold ">Contact us</h1>
          <li className="text-xs">info@abstract.com</li>
         
        </div>
        </div>
      </div>

      <div className="text-xs sm:text-xs md:text-base lg:text-base mt-6 md:mb-0 md:absolute bottom-0 right-0  md:p-8 lg:p-10 xl:p-12">
        <h2>Copyrite 2022</h2>
        <h2>Abstract studio design, Inc</h2>
        <h2>All rights reserved</h2>
      </div>
    </div>
  );
}

export default Footer;
