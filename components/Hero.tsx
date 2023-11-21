"use client";

// import Image from "next/image";
// import bigLeaf from "@/public/bigLeaf.svg";
// import bigLeaf2 from "@/public/bigLeaf2.svg";
import { products } from "@/constants/heroProducts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col h-screen max-w-[1440px] lg:p-8 p-4 lg:space-y-8 space-y-4 ">
        <div className={`w-full h-[55%] rounded-xl`}>
          <Card className="w-full h-full ">
            <div className="text-black bg-green-300 w-full h-full flex flex-col justify-center items-start space-y-4 p-2">
              <h1 className="lg:text-[64px] md:text-[36px] text-[32px] text-start z-10 ">
                Organic Fruits & Vegetables
              </h1>
              {/* <p className="lg:text-xl text-start">
                Order Your Favorite Vegetables and Spices From The Best Sources
              </p> */}
              {/* <button className="rounded-full text-white bg-green-500 lg:p-4 p-2">
                Learn More
              </button> */}
            </div>
          </Card>
        </div>

        <div className="w-full h-[30%] flex flex-row lg:gap-[32px] gap-[16px]">
          {products.map((product: any, i: any) => {
            return (
              <Card key={i} className="flex w-full h-full p-4 bg-[#EDEAE7]">
                <div className="w-full h-full text-black flex flex-col space-y-4 ">
                  <h1 className="font-bold lg:text-[32px] md:text-[24px] text-[20px] z-10 ">
                    {product.title}
                  </h1>
                  <p className="lg:text-[20px] md:text-[12px] text-[8px] text-justify z-10 ">
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
