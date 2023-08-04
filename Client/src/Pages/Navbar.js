import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center py-8 max-w-[1200px] mx-auto">
      <h1 className="text-[#F55253] text-[28px] font-bold">
        <Link to="/">
          <img src="/images/logo.png" alt="" className="text-4xl" />
        </Link>
      </h1>
      <div className="hidden lg:flex items-center cursor-pointer">
        <ul className=" flex items-center font-medium text-base text-[#4D4D4D]">
          <li className="px-6 text-[#F55253]">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-6">Menu</li>
          <li className="px-6">Service</li>
          <li className="px-6">Shop</li>
          <li className="px-6">
            <Link to="/signIn"> SignIn </Link>
          </li>
          <li className="px-6">
            <Link to="/signUp"> SignUp </Link>
          </li>
        </ul>
        <div className="ml-24 relative">
          <input
            type="text"
            placeholder="Search"
            className="h-14 w-72 text-[16px] font-medium outline-none pl-12 text-[#232323] 
            drop-shadow-lg bg-[#Ffffff] rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-5">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[#8B8B8B] text-[16px]"
            />
          </div>
        </div>
      </div>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? (
          <FontAwesomeIcon className="text-4xl text-[#F55253]" icon={faBars} />
        ) : (
          <FontAwesomeIcon className="text-4xl text-[#F55253]" icon={faXmark} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "lg:hidden fixed left-0 top-0 w-[70%] h-full border-r border-r-[#F55253] bg-[#F55253] ease-in-out duration-500"
        }
      >
        <ul className=" pt-36 font-medium text-lg text-[#4D4D4D] ">
          <li className="p-4 text-[#F55253] border-b border-[#F55253]">
            <Link to="/"> Home </Link>
          </li>
          <li className="p-4 border-b border-[#F55253]">Menu</li>
          <li className="p-4 border-b border-[#F55253]">Service</li>
          <li className="p-4 border-b border-[#F55253]">Shop</li>
        </ul>
        <div className="p-4 relative border-b border-[#ffffff]">
          <input
            type="text"
            placeholder="Search"
            className="h-14 w-72 text-[16px] font-medium outline-none pl-12 text-[#232323] 
              shadow-2xl bg-[#Ffffff] rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 pl-6">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[#8B8B8B] text-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
