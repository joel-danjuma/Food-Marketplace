import Image from "next/image";
import categories from "@/constants/categories";
import leaf from "../public/leaf.svg";
import orange from "../public/orange.svg";

const Categories = () => {
  return (
    <section className="flex flex-col items-center bg-white text-green-800 h-screen w-full ">
      <h1 className="text-2xl mt-4 mb-4">Shop By Category</h1>
      <div className="w-full p-4 justify-center items-center flex">
        <div className="max-w-xl max-h-xl lg:max-w-4xl grid grid-flow-row grid-cols-3 gap-4 justify-center">
          {categories.map((item: any, i: any) => {
            return (
              <div
                key={i}
                className="bg-[#EDEAE7] flex flex-col justify-center items-center rounded-xl transform hover:scale-105 "
              >
                <span className="absolute bottom-2">{item.name}</span>
                <Image src={item.image} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>

      <section className="flex flex-col items-center bg-[#F9F8F8] h-1/4 w-full">
        <h1 className="text-2xl">Reviews</h1>

        <div className="px-4 mx-auto max-w-7xl ">
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
