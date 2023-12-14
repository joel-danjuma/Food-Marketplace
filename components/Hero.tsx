// "use client";

// // import Image from "next/image";
// // import bigLeaf from "@/public/bigLeaf.svg";
// // import bigLeaf2 from "@/public/bigLeaf2.svg";
// import { products } from "@/constants/heroProducts";
// import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

// const Hero = () => {
//   return (
//     <section>
//       <div className="flex flex-col h-screen max-w-[1440px] lg:p-8 p-4 lg:space-y-8 space-y-4 ">
//         <div className={`w-full h-[55%] rounded-xl`}>
//           <Card className="w-full h-full ">
//             <div className="text-black bg-green-300 w-full h-full flex flex-col justify-center items-start space-y-4 p-2">
//               <h1 className="lg:text-[64px] md:text-[36px] text-[32px] text-start z-10 ">
//                 Organic Fruits & Vegetables
//               </h1>
//               {/* <p className="lg:text-xl text-start">
//                 Order Your Favorite Vegetables and Spices From The Best Sources
//               </p> */}
//               {/* <button className="rounded-full text-white bg-green-500 lg:p-4 p-2">
//                 Learn More
//               </button> */}
//             </div>
//           </Card>
//         </div>

//         <div className="w-full h-[30%] flex flex-row lg:gap-[32px] gap-[16px]">
//           {products.map((product: any, i: any) => {
//             return (
//               <Card key={i} className="flex w-full h-full p-4 bg-[#EDEAE7]">
//                 <div className="w-full h-full text-black flex flex-col space-y-4 ">
//                   <h1 className="font-bold lg:text-[32px] md:text-[24px] text-[20px] z-10 ">
//                     {product.title}
//                   </h1>
//                   <p className="lg:text-[20px] md:text-[12px] text-[8px] text-justify z-10 ">
//                     {product.description}
//                   </p>
//                   <a className="rounded-full font-bold z-10" href="#">
//                     Shop Now
//                   </a>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DaMHHTI70ID
 */
import Image from "next/image";
import Link from "next/link";
import { Card } from "@nextui-org/card";
import img_2 from "@/public/tomato.svg";
import img from "@/public/img.jpg";

export default function Hero() {
  return (
    <section className="w-full py-12 flex justify-center bg-green-500">
      <div className="container w-full max-w-[1320px]">
        <div className="w-full grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="w-full lg:order-last">
            <Image
              alt="Fresh produce"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full  lg:aspect-square"
              height="600"
              src={img}
              width="600"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Fresh Produce Delivered To Your Doorstep
              </h1>
              <p className="max-w-[600px] text-gray-100 md:text-xl">
                Experience the convenience of high-quality fruits, vegetables,
                and groceries delivered right to your home.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Order Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-200 hover:text-green-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
