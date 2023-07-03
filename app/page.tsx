"use client";
// import { discount_items } from "@/utils/discount_items";
// import Discount_card from "@/components/Discount_card";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen block overflow-auto">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Blog />
      <Footer />
    </main>
  );
}
