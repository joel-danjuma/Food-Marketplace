"use client";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import logo from "@/public/logo.png";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-2 lg:text-lg text-md text-bold uppercase bg-[#EDEAE7] text-green-800 w-full h-12 p-5 relative">
      <div className="absolute left-10">
        <a href="#">
          <Image src={logo} alt="logo" className="w-3 h-7" />
        </a>
      </div>
      <div className="flex justify-between gap-4">
        <span>Home</span>
        <span>Products</span>
        <span>Contact</span>
      </div>
      <div className="flex justify-between gap-4 text-xl absolute right-10">
        <CiSearch />
        <CiShoppingCart />
        <CiUser />
      </div>
    </nav>
  );
}

export default Navbar;
