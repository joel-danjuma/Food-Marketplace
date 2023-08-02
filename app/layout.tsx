import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Gwaree",
  description: "Fresh Food Delivered from Farm to Table",
};

const poppins = Poppins({
  weight: ["400"],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-red-500 ${poppins.className}`}>
        <Navbar />
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
