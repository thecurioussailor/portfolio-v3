import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CoinsEarned from "@/components/CoinsEarned";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashutosh Sagar",
  description: "Ashutosh Sagar is a software engineer with a passion for building products that help people live better lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
          <div className="ml-72 flex flex-col">
            <div className="py-20 px-20">
              {children}
            </div>
            <Footer />
          </div>
          <CoinsEarned />
      </body>
    </html>
  );
}
