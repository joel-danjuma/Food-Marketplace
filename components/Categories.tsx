import Image from "next/image";
import spices from "@/public/spices-png-43503.png";
import vegetables from "@/public/Vegetables.png";
import peach from "@/public/peach.png";
import roots from "@/public/yam.png";
import mushrooms from "@/public/shrooms.png";

const Categories = () => {
  return (
    <section className="flex flex-col items-center bg-white text-green-800 h-full w-full py-2 ">
      <h1 className="text-2xl py-7">Shop By Category</h1>
      <div className="grid grid-cols-5 grid-rows-1 gap-6 h-1/2 w-full p-5 ">
        <div className="w-56 h-56 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-md">
          <span>Fruits</span>
          <Image src={peach} alt="fruits" />
        </div>
        <div className="w-56 h-56 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-md">
          <span>Vegetables</span>
          <Image src={vegetables} alt="vegetables" />
        </div>
        <div className="w-56 h-56 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-md">
          <span>Spices</span>
          <Image src={spices} alt="fruits" />
        </div>
        <div className="w-56 h-56 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-md">
          <span>Roots</span>
          <Image src={roots} alt="fruits" />
        </div>
        <div className="w-56 h-56 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-md">
          <span>Mushrooms</span>
          <Image src={mushrooms} alt="fruits" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#EDEAE7] h-1/2 w-full p-5">
        <h1 className="text-2xl">Reviews And Testimonials</h1>
      </div>
    </section>
  );
};

export default Categories;
