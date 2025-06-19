import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Editnet | Connect Clients & Freelancers",
  description:
    "Editnet is a platform where clients and freelancers can connect, collaborate, and work together seamlessly.",
  keywords: [
    "Editnet",
    "freelance platform",
    "hire freelancers",
    "find clients",
    "collaboration",
    "remote work",
    "creative professionals",
  ],
  openGraph: {
    title: "Editnet | Connect Clients & Freelancers",
    description:
      "Editnet is a platform where clients and freelancers can connect, collaborate, and work together seamlessly.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editnet | Connect Clients & Freelancers",
    description:
      "Editnet is a platform where clients and freelancers can connect, collaborate, and work together seamlessly.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased className="bg-background text-foreground"`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
