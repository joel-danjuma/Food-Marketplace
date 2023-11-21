import Image from "next/image";
import { categories } from "@/constants/categories";
import { Card, CardFooter } from "@nextui-org/react";
import { Category, Product } from "@/types";
import { Divider } from "@nextui-org/react";

const Categories = async () => {
  // const res = await fetch("https://654293e9ad8044116ed39ca3.mockapi.io/api/products", {cache : "no-cache"})
  // const products : Product[] = res.json()

  return (
    <section>
      <div className="max-w-[1440px] h-full lg:p-8 p-4 flex flex-col justify-items-center gap-8 -mt-4 ">
        <h1 className="lg:text-[40px] text-[36px] font-bold text-start">
          Shop By Category
        </h1>
        {categories.map((category: Category, i: number) => {
          return (
            <div key={i} className="space-y-8">
              <h1 className="text-start lg:text-[36px] text-[32px] font-bold text-green ">
                {category.title}
              </h1>
              <div className="w-full lg:flex lg:flex-row grid grid-flow-row grid-cols-2 lg:gap-8 gap-4">
                {category.products.map((product: Product, i: number) => {
                  return (
                    <div key={i} className="w-full">
                      <Card className="w-full h-32 p-4 bg-[#EDEAE7] text-[16px]">
                        <span>{product.id}</span>
                        <span> {product.price}</span>
                        <span>{product.title}</span>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <Divider className="lg:flex hidden" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;

// <section className="pb-40">
//   <div className="flex flex-col items-center text-green-800 h-full mx-auto container ">
//     <h1 className="lg:6xl text-2xl mt-4 mb-4">Shop By Category</h1>
//     <div className="w-full justify-center items-center flex">
//       <div className="grid lg:grid-cols-6 grid-flow-row gap-4 lg:p-0 p-4">
//         {categories.map((item: any, i: any) => {
//           return (
//             <Card
//               key={i}
//               className="flex flex-col justify-center items-center lg:max-w-6xl max-w-xl h-full bg-[#EDEAE7] "
//             >
//               <div>
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   className="object-cover rounded-xl "
//                   width={650}
//                 />
//               </div>
//               <CardFooter className="rounded-b-xl w-full bg-white flex justify-center">
//                 {item.name}
//               </CardFooter>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// </section>
