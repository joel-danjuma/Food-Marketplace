// import broccoli from "@/public/broccoli.png";
// import carrot from "@/public/carrot.png";
// import dill from "@/public/dill.png";
import products from "@/utils/products";
import Image from "next/image";
// import { useState } from "react";

const Hero = () => {
  // const [selectedProduct, setSelectedProduct] = useState(products[0]);

  // const switchProduct = (productId: number) => {
  //   const product = products.find((product) => product.id === productId);
  //   setSelectedProduct(product as typeof selectedProduct);
  // };

  return (
    <section className="flex flex-col h-3/5 w-full ">
      <div className="bg-[url('../public/chantal-garnier-910GanwBoew-unsplash.jpg')] bg-no-repeat bg-cover bg-opacity-10 w-full h-full lg:pb-0 text-white ">
        <div className="bg-black w-full h-full bg-opacity-30 flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-2xl text-center">
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

      {/* <div className="w-full h-2/5 flex lg:flex-row flex-col justify-between pt-1 gap-1">
        {products.map((product: any, i: any) => {
          return (
            <div
              key={i}
              className="bg-[#d5d2cf] flex flex-col items-start lg:w-1/3 w-full h-full p-5 relative lg:border rounded-xl"
            >
              <h1 className="font-bold lg:text-2xl text-xl text-green-800">
                {product.name}
              </h1>
              <p className="py-4 lg:text-xl text-lg text-[#928288]">
                {product.description}
              </p>
              <button className="rounded-full text-green-800 bg-[#EDEAE7] lg:p-3 p-2 font-bold hover:bg-green-500">
                Shop Now
              </button>
              <Image
                src={product.image}
                alt="broccoli"
                className="lg:w-24 lg:h-24 w-20 h-20 absolute right-0 -bottom-0 z-0"
              />
            </div>
          );
        })}
      </div> */}
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
