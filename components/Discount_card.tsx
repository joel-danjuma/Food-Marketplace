import Image from "next/image";

// import { discount_items } from "@/utils/discount_items";
const Discount_card = ({ items }: any) => {
  return (
    <div className="w-full justify-center flex h-1/2 py-5">
      <div className="justify-between gap-2 p-4 w-5/6 lg:flex lg:flex-row grid grid-cols-2">
        {items.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center rounded-lg bg-white w-40 h-full p-4"
            >
              <div className="flex justify-center items-center w-20 h-20 ">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-black">{item.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discount_card;
