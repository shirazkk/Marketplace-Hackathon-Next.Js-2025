import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "@/components/homepage/top_header";
import MiddleHeader from "@/components/homepage/middle_header";
import NavHeader from "@/components/homepage/nav_header";
import Footer from "@/components/homepage/footer";
import CartProviderWrapper from "@/components/cartcomponents/cartProvider";
import { WishlistProvider } from "@/components/wishlistcomponent/wishlistcontext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comforty - Modern Furniture Store",
  description:
    "Discover Comforty – your go-to online furniture store for premium sofas, chairs, and home decor. Shop stylish and comfortable furniture for your living space with fast delivery and great deals.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  keywords: [
    "furniture store",
    "modern furniture",
    "sofas",
    "chairs",
    "home decor",
    "affordable furniture",
    "luxury furniture",
  ],
  openGraph: {
    title: "Comforty - Premium Furniture for Your Home",
    description:
      "Shop high-quality, stylish furniture at Comforty. From sofas to armchairs, we offer the best furniture with great deals and fast shipping.",
    url: "https://comfortyecommerce.vercel.app/",
    siteName: "Comforty",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Comforty Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProviderWrapper>
          <WishlistProvider>
            <TopHeader />
            <MiddleHeader />
            <NavHeader />
            {children}
            <Footer />
          </WishlistProvider>
        </CartProviderWrapper>
      </body>
    </html>
  );
}
