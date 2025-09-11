import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Website Booking Hotel Online",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <SessionProvider session={session}>
          <Navbar />
          <main className="bg-gray-50 min-h-screen ">{children}</main>
          <Footer />
        </SessionProvider>
        {/* Add any additional scripts or components here if needed */}
      </body>
    </html>
  );
}
