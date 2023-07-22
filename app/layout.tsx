import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Gwaree",
  description: "Fresh Food Delivered from Farm to Table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
