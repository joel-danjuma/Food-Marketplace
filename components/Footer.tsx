import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-2/5 flex flex-col items-center">
      <div className="w-full h-12 bg-green-400 flex justify-between items-center px-52">
        <h1>Subscribe Now</h1>
        <div className="rounded-full bg-white text-green-800 w-40 justify-center flex">
          search bar
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 items-center gap-4 w-3/5 h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-green-800">Company Info</h1>
          <a href="#">
            <span className="text-black">My Account</span>
          </a>
          <a href="#">
            <span className="text-black">Checkout</span>
          </a>
          <a href="#">
            <span className="text-black">Products</span>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-green-800">Quick Links</h1>
          <a href="#">
            <span className="text-black">Find a Store</span>
          </a>
          <a href="#">
            <span className="text-black">FAQs</span>
          </a>
          <a href="#">
            <span className="text-black">Privacy Information</span>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-green-800">Information</h1>
          <a href="#">
            <span className="text-black">About Us</span>
          </a>
          <a href="#">
            <span className="text-black">Careers</span>
          </a>
          <a href="#">
            <span className="text-black">Delivery Information</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-5">
        <Image src={logo} alt="logo" className="w-3 h-7" />
      </div>
    </footer>
  );
};

export default Footer;
