"use client";

// import Image from "next/image";
// import bigLeaf from "@/public/bigLeaf.svg";
// import bigLeaf2 from "@/public/bigLeaf2.svg";
import { products } from "@/constants/heroProducts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col h-screen w-full p-4 ">
        <div className={`w-full lg:h-3/5 h-[50%] rounded-xl`}>
          <Card className="w-full h-full">
            <div className="text-black bg-[#EDEAE7] w-full h-full flex flex-col justify-center items-center space-y-5">
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

        <div className="w-full lg:h-[30%] h-[40%] flex lg:flex-row flex-col  gap-4 pt-4">
          {products.map((product: any, i: any) => {
            return (
              <Card
                key={i}
                className="flex w-full h-full lg:p-4 p-2 bg-[#EDEAE7]"
              >
                <div className="w-full h-full text-black flex flex-col lg:space-y-4 space-y-2">
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
