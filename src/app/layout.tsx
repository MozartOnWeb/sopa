import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

//import components
import TopBanner from "@/components/top-banner/TopBanner";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "SOPA",
  description: "SOPA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopBanner />
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
