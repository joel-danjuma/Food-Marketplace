// "use client";
// import Image from "next/image";
// // import { products } from "@/constants/products";
// import { useState, useTransition, useEffect } from "react";
// import { getProducts } from "../actions/actions";

// const Shop = () => {
//   const [isPending, startTransition] = useTransition();
//   const [products, setProducts] = useState([{}]);

//   useEffect(() => {
//     startTransition(async () => {
//       const data = await getProducts();
//       setProducts(data);
//       console.log(data);
//     });
//   }, [products]);

//   return (
//     <section className="w-full h-[100vh] flex flex-col ">
//       <div className="w-full lg:h-[30vh] h-[25vh] relative">
//         <div className="absolute top-0 w-full h-full bg-gradient-to-br from-[#FDC830] to-[#F37335] flex justify-center items-center text-white text-2xl">
//           Shop
//         </div>
//       </div>
//       <div className="relative w-full justify-center items-center flex">
//         <div className="absolute top-14 grid lg:grid-cols-4 grid-cols-2 grid-flow-row p-2">
//           {products.map((product: any, i: any) => {
//             return (
//               <div
//                 key={i}
//                 className="max-2w-lg max-h-xl lg:max-w-6xl p-4 w-full rounded-xl"
//               >
//                 <a className="block relative h-48 rounded overflow-hidden">
//                   <Image
//                     alt={product.name}
//                     className="object-cover object-center block rounded-xl"
//                     src={product.imageUrl}
//                     width={192}
//                   ></Image>
//                 </a>
//                 <div className="mt-4">
//                   <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//                     {product.description}
//                   </h3>
//                   <h2 className="text-gray-900 title-font text-lg font-medium">
//                     {product.name}
//                   </h2>
//                   <p className="mt-1">Price : {product.price}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shop;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1RPsC4NBTmF
 */

import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

export default function Component() {
  return (
    <div className="flex h-screen relative">
      <aside className="w-64 bg-gray-100 p-4 fixed top-16 left-0 inset-y-0">
        <div className="mb-8">
          <Image
            alt="Rainbow Grocery Logo"
            className="h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/40",
              objectFit: "cover",
            }}
            width="200"
          />
          <p className="text-sm my-2">Everyday store prices</p>
          <p className="text-sm my-2 text-green-600">
            100% satisfaction guarantee
          </p>
        </div>
        <nav className="mb-8">
          <Button className="w-full mb-2" variant="bordered">
            Shop
          </Button>
          <Button className="w-full mb-2" variant="bordered">
            Buy it again
          </Button>
          <Button className="w-full mb-2" variant="bordered">
            Recipes
          </Button>
          <Button className="w-full mb-2" variant="bordered">
            Lists
          </Button>
        </nav>
        <div>
          <p className="font-bold mb-2">Produce</p>
          <p className="font-bold mb-2">Dairy & Eggs</p>
          <p className="font-bold mb-2">Beverages</p>
          <p className="font-bold mb-2">Meat & Seafood</p>
          <p className="font-bold mb-2">Snacks & Candy</p>
          <p className="font-bold mb-2">Frozen</p>
          <p className="font-bold mb-2">Bakery</p>
          <p className="font-bold mb-2">Deli</p>
        </div>
      </aside>

      {/* Move Sidebar and Main to Layout File to preserve styling and make sure main children render only inside of main */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center">
            <MenuIcon className="text-gray-600 mr-4" />
            <Image
              alt="Instacart Logo"
              className="h-6 mr-4"
              height="30"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/30",
                objectFit: "cover",
              }}
              width="150"
            />
            <Button className="mr-4" variant="bordered">
              All stores
            </Button>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="pl-10 pr-4 py-2 border rounded-full"
                placeholder="Search Rainbow Grocery..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Button className="mr-4" variant="bordered">
              Delivery
            </Button>
            <p className="text-gray-600 mr-4">94105</p>
            <CalendarIcon className="text-gray-600 mr-4" />
            <p className="text-gray-600 mr-4">Today 12pm</p>
            <ShoppingCartIcon className="text-gray-600" />
          </div>
        </header>
        <section className="p-6">
          <h2 className="text-2xl font-bold mb-6">Fresh Fruit</h2>
          <div className="grid grid-cols-4 gap-4" />
          <div className="mt-6">
            <Link className="text-blue-600" href="#">
              View all (40+)
            </Link>
          </div>
        </section>
        <section className="p-6">
          <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
          <div className="grid grid-cols-4 gap-4" />
          <div className="mt-6">
            <Link className="text-blue-600" href="#">
              View all (40+)
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function CalendarIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function MenuIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
