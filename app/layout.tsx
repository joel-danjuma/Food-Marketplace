import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className}`}>
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
