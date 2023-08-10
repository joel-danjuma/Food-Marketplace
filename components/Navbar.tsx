"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";

function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="fixed w-full z-30 ">
      <div className="hidden lg:flex flex-row justify-center items-center text-lg font-medium bg-[#F9F8F8] bg-opacity-95 text-green-500 w-full h-14 relative">
        {/* Desktop Navigation */}
        <a
          href="/"
          className=" absolute left-5 flex flex-row justify-between gap-4"
        >
          <Image src={logo} alt="logo" className="w-3 h-7 lg:hidden" />
          <h1 className="text-green-500 lg:block hidden">Gwari</h1>
        </a>

        <div>
          <Link
            href="/about"
            className="px-2 py-2 text-sm font-medium hover:text-[#50d236] lg:px-6 md:px-3 lg:ml-auto"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="px-2 py-2 text-sm font-medium hover:text-[#50d236] lg:px-6 md:px-3"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="px-2 py-2 text-sm font-medium  hover:text-[#50d236] lg:px-6 md:px-3"
          >
            Contact
          </Link>
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
        <Link href="/" className="pl-2">
          <Image src={logo} alt="logo" className="w-3 h-7" />
        </Link>

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
        <div className="h-[70vh] w-full bg-[#EDEAE7] flex flex-col gap-2 justify-center z-20 rounded-b-xl drop-shadow-lg ">
          <div className="w-full h-2/4 flex flex-col gap-4 pt-4 items-center text-xl">
            <Link
              href="/"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <span>Home</span>
            </Link>
            <Link
              href="/shop"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <span>Shop</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
// className="inline-flex items-center gap-2 list-none lg:ml-auto"
export default Navbar;
