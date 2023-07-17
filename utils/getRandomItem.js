import products from "@/constants/products";

export function getRandomProduct(item) {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];

  return randomProduct;
}
