import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // customize weights as needed
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Intikarya Warnaprima",
  description: "The home of Intikarya Warnaprima.",
  icons: {
    icon: '/logo_icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
