"use client";

// import Image from "next/image";
// import bigLeaf from "@/public/bigLeaf.svg";
// import bigLeaf2 from "@/public/bigLeaf2.svg";
import { products } from "@/constants/heroProducts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="flex flex-col h-full w-full relative p-4 ">
      <div
        className={`bg-gradient-to-br from-[#a8ff78] to-[#11FFBD] w-full h-3/5 rounded-xl`}
      >
        <Card className="w-full h-full bg-black bg-opacity-10">
          <div className="text-white  w-full h-full flex flex-col justify-center items-center space-y-5">
            <h1 className="lg:text-7xl md:text-5xl text-xl text-center z-10 ">
              Organic Fruits & Vegetables
            </h1>
            <p className="lg:text-xl text-center">
              Order Your Favorite Vegetables and Spices From The Best Sources
            </p>
            <button className="rounded-full text-white bg-green-500 p-2">
              Learn More
            </button>
          </div>
        </Card>
      </div>

      <div className="w-full h-2/5 grid grid-flow-row grid-cols-2 gap-4 pt-4 ">
        {products.map((product: any, i: any) => {
          return (
            <div
              key={i}
              className={`${
                product.id == 1
                  ? "lg:bg-[url('../public/fruits.svg')]"
                  : "lg:bg-[url('../public/product-background2.svg')]"
              } lg:bg-cover lg:bg-no-repeat relative flex flex-col w-full h-full p-4 justify-center items-center border rounded-xl gradient`}
            >
              <div className="w-full h-full lg:text-green-500 text-white/80 flex flex-col space-y-5">
                {/* <div className="w-full h-full bg-[url('../public/leaf.svg')] bg-repeat-round absolute bg-opacity-10 top-0"></div> */}
                {/* <Image
                  src={bigLeaf2}
                  alt=""
                  className="lg:hidden sm:absolute top-0 right-0 lg:w-[222px] w-[120px] z-0 transform"
                /> */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-md z-10 ">
                  {product.title}
                </h1>
                <p className="lg:text-xl md:text-md text-sm text-justify z-10 ">
                  {product.description}
                </p>
                <a className="rounded-full font-bold z-10" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
