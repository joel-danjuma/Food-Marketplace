"use client";
import Image from "next/image";
import { products } from "@/constants/products";
import Footer from "@/components/Footer";

const shop = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col ">
      <div className="w-full lg:h-[30vh] h-[25vh] relative">
        <div className="absolute lg:top-14 top-12 w-full h-full bg-gradient-to-br from-[#FDC830] to-[#F37335] flex justify-center items-center text-white text-2xl">
          Shop
        </div>
      </div>
      <div className="relative w-full justify-center items-center flex">
        <div className=" absolute top-14 grid lg:grid-cols-4 grid-cols-2 grid-flow-row p-2">
          {products.map((product: any, i: any) => {
            return (
              <div
                key={i}
                className="max-2w-lg max-h-xl lg:max-w-6xl p-4 w-full rounded-xl"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt={product.title}
                    className="object-cover object-center block rounded-xl"
                    src={product.image}
                    width={192}
                  ></Image>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">Price : {product.price}</p>
                </div>
                {/*
                 */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/420x260"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default shop;
