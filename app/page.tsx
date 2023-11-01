"use client";
// import { discount_items } from "@/utils/discount_items";
// import Discount_card from "@/components/Discount_card";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-y-auto ">
      <Hero />
      <Categories />
      {/* <About /> */}
      {/* <Features /> */}

      {/* <Partners /> */}
      <Blog />
      <Footer />
    </main>
  );
}
