import "./globals.css";

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
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
