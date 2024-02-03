import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { getBlogName } from "@/lib/requests";
import MenuBar from "@/components/MenuBar";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetaData() {
  const data = await getBlogName()
  return {
    title: data.displayTitle || data.title,
  }
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getBlogName()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={data.favicon || '/favicon.ico'} />
        <meta name="title" content={data.title} />
      </head>
      <body className={inter.className}>
        <Providers>
          <MenuBar />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
