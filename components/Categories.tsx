import Image from "next/image";
import categories from "@/constants/categories";
import leaf from "../public/leaf.svg";
import orange from "../public/orange.svg";

const Categories = () => {
  return (
    <section>
      <div className="flex flex-col items-center text-green-800 h-full w-full ">
        <h1 className="text-2xl mt-4 mb-4">Shop By Category</h1>
        <div className="w-full p-4 justify-center items-center flex">
          <div className="max-w-lg max-h-xl lg:max-w-6xl grid lg:grid-cols-4 lg:grid-rows-1 grid-rows-2 grid-cols-2 gap-4">
            {categories.map((item: any, i: any) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center rounded-xl transform hover:scale-105 "
                >
                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover rounded-xl"
                      width={650}
                    />
                  </div>
                  <div className="absolute bottom-0 border rounded-b-xl w-full bg-white flex justify-center">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#F9F8F8] h-full w-full mt-4">
        <h1 className="text-2xl pt-4">Reviews</h1>

        <div className="px-4 mx-auto max-w-7xl flex items-center h-full ">
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
      </div>
    </section>
  );
};

export default Categories;
