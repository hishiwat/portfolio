import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ishiwata Hikaru's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`bg-gray-800 ${notoSansJp.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
