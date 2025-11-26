import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // customize weights as needed
  variable: "--font-lexend",
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
        className={`font-lexend antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
