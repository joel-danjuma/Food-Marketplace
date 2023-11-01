// import spices from "@/public/bayLeaf.svg";
// import vegetables from "@/public/tomato.svg";
// import fruit from "@/public/rasberry.svg";
// import roots from "@/public/carrot.svg";
// import mushrooms from "@/public/shroom.svg";
// import greens from "@/public/greens.svg";

import {
  spices,
  vegetables,
  fruits,
  mushrooms,
  discount,
  roots,
} from "./products";

export const categories = [
  {
    title: "Fruits",
    products: fruits,
  },
  {
    title: "Vegetables",
    products: vegetables,
  },
  {
    title: "Spices",
    products: spices,
  },
  {
    title: "Roots",
    products: roots,
  },
  {
    title: "Mushrooms",
    products: mushrooms,
  },
  {
    title: "Discount",
    products: discount,
  },
];

export type Categories = typeof categories;
