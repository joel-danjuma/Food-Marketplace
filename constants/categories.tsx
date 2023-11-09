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
