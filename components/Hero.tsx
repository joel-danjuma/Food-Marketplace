import Image from "next/image";
import broccoli from "@/public/broccoli.png";
import carrot from "@/public/carrot.png";
import dill from "@/public/dill.png";
import products from "@/utils/products";

const Hero = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="bg-[url('../public/chantal-garnier-910GanwBoew-unsplash.jpg')] bg-no-repeat bg-cover bg-opacity-10 w-full h-3/5">
        <div className="bg-black w-full h-full bg-opacity-30 flex flex-col justify-center items-center">
          <h1 className="text-7xl">Vegetables 100% Organic</h1>
          <p className="py-7">
            Order Your Favorite Vegetables and Spices From The Best Sources
          </p>
          <button className="rounded-full text-white bg-green-500 p-2">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full h-2/5 flex flex-row">
        {products.map((product: any, i: any) => {
          return (
            <div
              key={i}
              className="bg-[#d5d2cf] flex flex-col items-start w-1/3 h-full p-5 relative border"
            >
              <h1 className="font-bold text-2xl text-green-800">
                {product.name}
              </h1>
              <p className="py-4 text-xl text-[#928288]">
                {product.description}
              </p>
              <button className="rounded-full text-green-800 bg-[#EDEAE7] p-3 font-bold hover:bg-green-500">
                Shop Now
              </button>
              <Image
                src={product.image}
                alt="broccoli"
                className="w-44 h-44 absolute right-0 -bottom-5 z-0"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
