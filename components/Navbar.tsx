"use client";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";

function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    // <nav>
    //   {/* Desktop Navigation */}

    //   <div className="hidden lg:flex justify-center items-center text-lg text-bold uppercase bg-white text-green-800 w-full h-12 relative">
    //     <div className="absolute left-2">
    //       <a href="#">
    //         <Image src={logo} alt="logo" className="w-3 h-7" />
    //       </a>
    //     </div>
    //     <div className="flex justify-between gap-4">
    //       <span>Home</span>
    //       <span>Products</span>
    //       <span>Contact</span>
    //     </div>
    //     <div className="flex justify-between gap-4 text-xl absolute right-0">
    //       <CiSearch />
    //       <CiShoppingCart />
    //       <CiUser />
    //     </div>
    //   </div>
    //   {/* Mobile Navigation */}
    //   <div className="lg:hidden flex justify-between bg-white p-2 text-green-800 w-full h-12 relative">
    //     <a href="#">
    //       <Image src={logo} alt="logo" className="w-4 h-7" />
    //     </a>
    //     <button
    //       className="text-3xl"
    //       onClick={() => {
    //         return (
    //           <div className="w-full h-full bg-black text-white flex flex-col py-4 p-2 justify-center text-bold uppercase">
    //             <span>Home</span>
    //             <span>Products</span>
    //             <span>Contact</span>
    //           </div>
    //         );
    //       }}
    //     >
    //       <FiMenu />
    //     </button>
    //   </div>
    // </nav>
    // className="flex-row justify-between w-full items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0"

    <nav className="static w-full top-0 z-30">
      <div className="hidden lg:flex flex-row justify-center items-center text-lg font-medium bg-[#F9F8F8] text-green-500 w-full h-14 relative">
        {/* Desktop Navigation */}
        <a
          href="#"
          className=" absolute left-5 flex flex-row justify-between gap-4"
        >
          <Image src={logo} alt="logo" className="w-3 h-7" />
          <h1 className="text-green-500 lg:block hidden">Gwaree</h1>
        </a>

        <div>
          <a
            href="#"
            className="px-2 py-2 text-sm font-medium hover:text-[#50d236] lg:px-6 md:px-3 lg:ml-auto"
          >
            About
          </a>
          <a
            href="#"
            className="px-2 py-2 text-sm font-medium hover:text-[#50d236] lg:px-6 md:px-3"
          >
            Products
          </a>
          <a
            href="#"
            className="px-2 py-2 text-sm font-medium  hover:text-[#50d236] lg:px-6 md:px-3"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-row absolute right-5">
          <button className="block px-4 py-2 mt-2 text-sm  hover:text-[#50d236] focus:outline-none focus:shadow-outline md:mt-0">
            Sign In
          </button>
          <button className="text-green-500 hover:bg-[#50d236] hover:text-white hover:rounded-xl p-2 text-sm py-2">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}

      <div className="lg:hidden flex flex-row justify-between bg-[#EDEAE7] p-2 text-[#50d236] w-full h-12 relative">
        <a href="#" className="pl-2">
          <Image src={logo} alt="logo" className="w-3 h-7" />
        </a>
        <button
          className="text-3xl pr-2"
          onClick={() => {
            setToggleDropdown((prev) => !prev);
          }}
        >
          <FiMenu />
        </button>
      </div>
      {toggleDropdown && (
        <div className="h-3/4 w-full bg-[#EDEAE7] flex flex-col gap-2 justify-center z-20 rounded-b-xl drop-shadow-lg ">
          <div className="w-full h-2/4 flex flex-col gap-4 pt-4 items-center text-xl">
            <a href="/">
              <span>Home</span>
            </a>
            <a href="#">
              <span>Products</span>
            </a>
            <a href="#">
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
// className="inline-flex items-center gap-2 list-none lg:ml-auto"
export default Navbar;
