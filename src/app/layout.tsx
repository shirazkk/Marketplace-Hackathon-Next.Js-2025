import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CartProviderWrapper from "@/components/cartcomponents/cartProvider";
import { WishlistProvider } from "@/components/wishlistcomponent/wishlistcontext";
import { Analytics } from "@vercel/analytics/next";
import TopHeader from "@/components/homecomponents/top_header";
import MiddleHeader from "@/components/homecomponents/middle_header";
import NavHeader from "@/components/homecomponents/nav_header";
import Footer from "@/components/homecomponents/footer";
import {
  ClerkProvider
} from '@clerk/nextjs'
// Load custom fonts
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

// Metadata configuration for SEO and social media sharing
export const metadata: Metadata = {
  title: "Comforty - Modern Furniture Store",
  description:
    "Discover Comforty – your go-to online furniture store for premium sofas, chairs, and home decor. Shop stylish and comfortable furniture for your living space with fast delivery and great deals.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "furniture store",
    "modern furniture",
    "sofas",
    "chairs",
    "home decor",
    "affordable furniture",
    "luxury furniture",
    "best furniture deals",
    "high-quality furniture",
    "shop furniture online",
  ],
  openGraph: {
    title: "Comforty - Premium Furniture for Your Home",
    description:
      "Shop high-quality, stylish furniture at Comforty. From sofas to armchairs, we offer the best furniture with great deals and fast shipping.",
    url: "https://comfortyecommerce.vercel.app/",
    siteName: "Comforty",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in /public
        width: 1200,
        height: 630,
        alt: "Comforty Online Furniture Store",
      },
    ],
    type: "website",
  },
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Ensuring favicon loads properly */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />

        {/* ✅ Additional SEO Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="author" content="Comforty Team" />
        <meta name="robots" content="index, follow" />
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
            <Analytics />
            <Footer />
          </WishlistProvider>
        </CartProviderWrapper>

      </body>
    </html>
    </ClerkProvider>
  );
}
