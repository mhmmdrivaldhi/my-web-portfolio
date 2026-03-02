import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import "aos/dist/aos.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import AnimationOnScroll from "@/components/AnimationOnScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Muhammad Rivaldhi's Portfolio",
  description: "This is Muhammad Rivaldhi's personal portfolio website.",
  icons: {
    icon: [
      {
        url: "/images/logo-reontech-v1.png",
        type: "image/png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <AnimationOnScroll>
          {children}
        </AnimationOnScroll>
        <Footer/>
      </body>
    </html>
  );
}
