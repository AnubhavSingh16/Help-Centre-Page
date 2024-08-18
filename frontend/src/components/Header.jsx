import React from "react";
import { useNavigate } from 'react-router-dom';
import SearchSec from "./SearchSec";

function Header() {
  
  const navigate = useNavigate();

  const handleClick = () =>  {
    navigate('/submit-request');
  }

  return (
    <>
      <div className="header bg-black h-14 text-white flex justify-between items-center">
        
        <div className="logo flex items-center ml-4 sm:ml-10 md:ml-24 space-x-1 sm:space-x-2">
          <span>Abstract</span>
          <span>|</span>
          <span>Help Center</span>
        </div>

        <button className="bg-black h-8 px-4 rounded-md border border-slate-50 shadow-md shadow-slate-700 mr-4 sm:mr-10 md:mr-24"
        onClick={handleClick}>
          Submit a Request
        </button>

      </div>

      <SearchSec></SearchSec>
    </>
  );
}

export default Header;
