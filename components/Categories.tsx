import Image from "next/image";
import categories from "@/utils/categories";

const Categories = () => {
  return (
    <section className="flex flex-col items-center bg-white text-green-800 h-full w-full">
      <h1 className="text-2xl mt-4 mb-4">Shop By Category</h1>
      <div className="w-full relative lg:h-1/3 h-2/4 lg:flex lg:flex-row grid grid-flow-row grid-cols-3 justify-between gap-1 pl-4 pr-4 mb-4 ">
        {categories.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className="lg:w-56 lg:h-56 w-30 h-30 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-xl transform hover:scale-105 "
            >
              <span className="absolute bottom-2">{item.name}</span>
              <Image src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>
      <h1 className="text-2xl mb-4">Reviews</h1>
      <div className="flex flex-col items-center bg-[#EDEAE7] lg:h-2/3 h-2/4 w-full"></div>
    </section>
  );
};

export default Categories;
