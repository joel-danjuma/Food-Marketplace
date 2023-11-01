import Image from "next/image";
import { categories } from "@/constants/categories";
import { Card, CardFooter } from "@nextui-org/react";
import { Category, Product } from "@/types";

const Categories = () => {
  return (
    <section className="pb-20">
      <div className="w-full h-full p-4 flex flex-col justify-items-start ">
        <h1 className="lg:text-4xl text-2xl mt-4 mb-20">Shop By Category</h1>
        {categories.map((category: Category, i: number) => {
          return (
            <div key={i}>
              <h1 className="lg:6xl text-2xl">{category.title}</h1>
              <div className="w-full flex flex-row gap-4">
                {category.products.map((product: Product, i: number) => {
                  return (
                    <div key={i} className="w-full pt-10 pb-10">
                      <Card className="w-full h-32 p-2 bg-[#EDEAE7]">
                        <span>{product.id}</span>
                        <span> {product.price}</span>
                        <span>{product.title}</span>
                      </Card>
                    </div>
                  );
                })}
              </div>
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
