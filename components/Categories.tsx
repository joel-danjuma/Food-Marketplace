import Image from "next/image";
import categories from "@/constants/categories";

const Categories = () => {
  return (
    <section className="flex flex-col items-center bg-white text-green-800 h-full w-full">
      <h1 className="text-2xl mt-4 mb-4">Shop By Category</h1>
      <div className="w-full relative lg:h-1/3 h-2/4 lg:flex lg:flex-row grid grid-flow-row grid-cols-3 justify-between gap-1 pl-4 pr-4 mb-4 ">
        {categories.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className="lg:w-56 lg:h-56 mx-w-30 mx-h-30 bg-[#EDEAE7] flex flex-col justify-center items-center rounded-xl transform hover:scale-105 "
            >
              <span className="absolute bottom-2">{item.name}</span>
              <Image src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>

      <section className="flex flex-col items-center bg-[#EDEAE7] lg:h-2/3 h-2/4 w-full">
        <h1 className="text-2xl">Reviews</h1>
        <div className="px-4 mx-auto max-w-7xl lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <p className="pb-2 pt-2 text-base text-gray-500">
              &quot;When building projects, going from an idea to a working
              version is crucial. Unwrapped&apos; components have been extremely
              useful for quickly mocking up a landing page. I can now focus more
              time on my app, and less time worrying about the first impression
              my project will get. I really love the attention to detail in
              these blocks. Michael has always impressed me with the quality he
              produces.&quot;
            </p>
            <div className="justify-center mb-4 space-y-4">
              <p className="text-sm font-medium text-gray-500">
                Sam Samuel, Lead marketing specialist -
                <span className="font-medium text-blue-500">Company</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Categories;
