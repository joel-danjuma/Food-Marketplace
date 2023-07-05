import Image from "next/image";
import broccoli from "@/public/broccoli.png";
import carrot from "@/public/carrot.png";
import dill from "@/public/dill.png";
import products from "@/utils/products";

const Hero = () => {
  return (
    <section className="flex flex-col h-full w-full ">
      <div className="bg-[url('../public/chantal-garnier-910GanwBoew-unsplash.jpg')] bg-no-repeat bg-cover bg-opacity-10 w-full lg:h-3/5 h-2/5 rounded-xl lg:pb-0 ">
        <div className="bg-black w-full h-full bg-opacity-30 flex flex-col justify-center items-center rounded-lg">
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

      <div className="w-full h-2/5 flex lg:flex-row flex-col lg:mt-0 mt-2 justify-between lg:pt-1 gap-1">
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
                className="lg:w-44 lg:h-44 w-28 h-28 absolute right-0 -bottom-10 z-0"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
