"use client";
// import broccoli from "@/public/broccoli.png";
// import carrot from "@/public/carrot.png";
// import dill from "@/public/dill.png";
import products from "@/constants/products";
// import { getRandomProduct } from "@/utils/getRandomItem.js";
import Image from "next/image";
// import { useState } from "react";
import background_1 from "@/public/product-background.svg";
import background_2 from "@/public/product-background2.svg";
import strawberry from "@/public/strawberry.svg";
import bigLeaf from "@/public/bigLeaf.svg";
import bigLeaf2 from "@/public/bigLeaf2.svg";
import leaf from "@/public/leaf.svg";
import smallLeaf from "@/public/smallLeaf.svg";
import onion from "@/public/onion.svg";

const Hero = () => {
  // const [selectedProduct, setSelectedProduct] = useState(products[0]);

  // const switchProduct = (productId: number) => {
  //   const product = products.find((product) => product.id === productId);
  //   setSelectedProduct(product as typeof selectedProduct);
  // };

  // const products = [getRandomProduct()];
  let img;

  return (
    <section className="flex flex-col h-full w-full relative ">
      <div
        className={`bg-[#7EB693] w-full h-4/5 lg:pb-0 text-[#274C5B] relative`}
      >
        <Image
          src={bigLeaf}
          alt=""
          className="absolute bottom-0 left-0 lg:w-[311px] w-44 text-black"
        ></Image>
        <Image
          src={bigLeaf2}
          alt=""
          className="absolute top-0 right-0 lg:w-[222px] w-[120px] z-0 transform"
        />

        <div className="bg-black bg-opacity-10 w-full h-full flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-2xl text-center z-10">
            Vegetables 100% Organic
          </h1>
          <p className="lg:text-xl text-center py-7">
            Order Your Favorite Vegetables and Spices From The Best Sources
          </p>
          <button className="rounded-full text-white bg-green-500 p-2">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full h-2/5 grid grid-flow-row grid-cols-2 p-4 gap-4">
        {products.map((product: any, i: any) => {
          return (
            <div
              key={i}
              className={`bg-[#D4D4D4]  relative bg-no-repeat bg-cover flex flex-col w-full h-full p-5 justify-center items-center border rounded-xl`}
            >
              <h1 className="font-bold lg:text-2xl text-lg text-green-800 z-10">
                {product.title}
              </h1>
              <p className="py-4 lg:text-xl text-md text-[#928288] text-justify z-10">
                {product.description}
              </p>
              <button className="absolute bottom-0 rounded-full text-green-800 lg:p-3 p-2 font-bold hover:text-green-500 z-10">
                Shop Now
              </button>

              {/* <Image
                src={product.image}
                alt={product.name}
                className="lg:w-24 lg:h-24 w-20 h-20 absolute right-0 -bottom-0 z-0"
              /> */}
            </div>
          );
        })}
      </div>
    </section>
    // <section>
    //   <section className="items-center justify-center bg-[#141521] flex h-screen">
    //     <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <div>
    //           <span className="w-auto px-6 py-3 rounded-full bg-white/5">
    //             <span className="tewxt-sm font-medium text-[#50d236]">
    //               Vegetables 100% Organic
    //             </span>
    //           </span>
    //           <p className="mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl">
    //             Order Your Favorite Vegetables and Spices From The Best Sources
    //             <span className="md:block">Eat Fresh And Healthy</span>
    //           </p>
    //           <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
    //             Effortlessly create, pitch, and validate your early-stage
    //             business with our no-code landing page builder.
    //           </p>
    //         </div>
    //         <div className="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row">
    //           <a
    //             href="#"
    //             className="text-white focus:outline-none inline-flex items-center justify-center rounded-xl bg-[#279f0e] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 text-center w-full"
    //           >
    //             Learn More
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </section>
  );
};

export default Hero;

{
  /* {selectedProduct && (
        <div
          key={selectedProduct.id}
          className="bg-[#d5d2cf] flex flex-col items-start lg:w-1/3 w-full h-2/5 p-5 relative lg:border rounded-xl"
        >
          <h1 className="font-bold lg:text-2xl text-xl text-green-800">
            {selectedProduct.name}
          </h1>
          <p className="py-4 lg:text-xl text-lg text-[#928288]">
            {selectedProduct.description}
          </p>
          <button className="rounded-full text-green-800 bg-[#EDEAE7] lg:p-3 p-2 font-bold hover:bg-green-500">
            Shop Now
          </button>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="lg:w-44 lg:h-44 w-28 h-28 absolute right-0 -bottom-10 z-0"
          />
        </div>
      )}
      <button
        onClick={() => switchProduct(selectedProduct.id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        click me
      </button> */
}
