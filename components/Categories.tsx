import Image from "next/image";
import categories from "@/utils/categories";

const Categories = () => {
  return (
    <section className="flex flex-col items-center bg-white text-green-800 h-full w-full py-2 ">
      <h1 className="text-2xl py-7">Shop By Category</h1>
      <div className="grid grid-cols-5 grid-rows-1 gap-6 h-1/2 w-full p-5 ">
        {categories.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className="w-56 h-56 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-md"
            >
              <span>{item.name}</span>
              <Image src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center bg-[#EDEAE7] h-1/2 w-full p-5">
        <h1 className="text-2xl">Reviews And Testimonials</h1>
      </div>
    </section>
  );
};

export default Categories;
