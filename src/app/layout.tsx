import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-poppins",   
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
