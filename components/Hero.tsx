"use client";

import Image from "next/image";

import bigLeaf from "@/public/bigLeaf.svg";
import products from "@/constants/products";
import bigLeaf2 from "@/public/bigLeaf2.svg";
import img from "@/public/about-background.svg";

const Hero = () => {
  return (
    <section className="flex flex-col h-full w-full relative ">
      <div className={`gradient w-full h-4/5 relative`}>
        <div className="w-full h-full bg-black bg-opacity-10">
          {/* <Image
            src={bigLeaf}
            alt=""
            className="absolute bottom-0 left-0 lg:w-[311px] w-44 text-black"
          ></Image>
          <Image
            src={bigLeaf2}
            alt=""
            className="absolute top-0 right-0 lg:w-[222px] w-[120px] z-0 transform"
          /> */}
          <Image src={img} alt="about"></Image>

          <div className="text-white  w-full h-full flex flex-col justify-center items-center space-y-5">
            <h1 className="lg:text-7xl text-2xl text-center z-10 gradient bg-clip-text">
              Vegetables 100% Organic
            </h1>
            <p className="lg:text-xl text-center">
              Order Your Favorite Vegetables and Spices From The Best Sources
            </p>
            <button className="rounded-full text-white bg-green-500 p-2">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-2/5 grid grid-flow-row grid-cols-2 p-4 gap-4 ">
        {products.map((product: any, i: any) => {
          return (
            <div
              key={i}
              className={`${
                product.id == 1
                  ? "lg:bg-[url('../public/fruits.svg')]"
                  : "lg:bg-[url('../public/product-background2.svg')]"
              } lg:bg-cover lg:bg-no-repeat relative flex flex-col w-full h-full p-4 justify-center items-center border rounded-xl glassmorphism`}
            >
              <div className="w-full h-full text-green-800">
                <h1 className="font-bold lg:text-2xl text-lg  z-10">
                  {product.title}
                </h1>
                <p className="py-4 lg:text-xl text-md text-[#928288] text-justify z-10">
                  {product.description}
                </p>
                <button className="absolute bottom-0 rounded-full lg:p-3 p-2 font-bold hover:bg-[#50d236] z-10">
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
