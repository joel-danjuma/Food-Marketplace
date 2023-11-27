"use server";

import { createCart, getCart } from "@/lib/carts";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const incrementProductQuantity = async (productId: string) => {
  const cart = (await getCart()) ?? (await createCart());

  const itemInCart = cart.items.find((item) => item.productId === productId);

  if (itemInCart) {
    await prisma.cartItem.update({
      where: { id: itemInCart.id },
      data: {
        quantity: { increment: 1 },
      },
    });
  } else
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity: 1 },
    });

  revalidatePath("/products/[id]");
};

export const getProducts = async () => {
  const products = await prisma.product.findMany();

  if (!products) {
    notFound();
  } else {
    return products;
  }
};

export const addProduct = async (formData: FormData) => {
  const name = (formData.get("name") as string) || "";
  const price = parseInt(formData.get("price") as string);
  // const price = formData.get("price") as number || 0
  const category = (formData.get("category") as string) || "";
  const description = (formData.get("decsription") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || "";

  await prisma.product.create({
    data: {
      name,
      price,
      category,
      description,
      imageUrl,
    },
  });
};
