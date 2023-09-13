import img from "../public/tomato.svg";

export const products = [
  {
    id: 1,
    image: img,
    title: "Tomatoes",
    price: "285",
    category: "Vegetable",
  },
  {
    id: 2,
    image: img,
    title: "Avocado",
    price: "210",
    category: "Fruit",
  },
  {
    id: 3,
    image: img,
    title: "Beetroot",
    price: "200",
    category: "Root",
  },
  {
    id: 4,
    image: img,
    title: "Bok Choy",
    price: "230",
    category: "Vegetable",
  },
  {
    id: 5,
    image: img,
    title: "Broccoli",
    price: "220",
    category: "Vegetable",
  },
  {
    id: 6,
    image: img,
    title: "Purple Cabbage",
    price: "212",
    category: "Vegetable",
  },
  {
    id: 7,
    image: img,
    title: "Green Cabbage",
    price: "245",
    category: "Vegetable",
  },
  {
    id: 8,
    image: img,
    title: "Carrot",
    price: "210",
    category: "Root",
  },
];

export type Products = typeof products;
