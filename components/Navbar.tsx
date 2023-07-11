"use client";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import logo from "@/public/logo.png";
import Image from "next/image";
function Navbar() {
  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center items-center text-lg text-bold uppercase bg-white text-green-800 w-full h-12 relative pt-2">
        <div className="absolute left-2">
          <a href="#">
            <Image src={logo} alt="logo" className="w-3 h-7" />
          </a>
        </div>
        <div className="flex justify-between gap-4">
          <span>Home</span>
          <span>Products</span>
          <span>Contact</span>
        </div>
        <div className="flex justify-between gap-4 text-xl absolute right-0">
          <CiSearch />
          <CiShoppingCart />
          <CiUser />
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between bg-white p-2 text-green-800 w-full h-12 relative">
        <a href="#">
          <Image src={logo} alt="logo" className="w-4 h-7" />
        </a>
        <button
          className="text-3xl"
          onClick={() => {
            return (
              <div className="w-full h-full bg-black text-white flex flex-col py-4 p-2 justify-center text-bold uppercase">
                <span>Home</span>
                <span>Products</span>
                <span>Contact</span>
              </div>
            );
          }}
        >
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
