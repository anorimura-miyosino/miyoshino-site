import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "かわつる三芳野団地 | 公式ウェブサイト",
  description:
    "かわつる三芳野団地の公式ウェブサイトです。最新の情報をご覧いただけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <base href="./" />
      </head>
      <body
        className={`${notoSansJP.variable} antialiased bg-background-main text-text-primary`}
      >
        <Header />
        <main style={{ paddingTop: "100px" }}>{children}</main>
      </body>
    </html>
  );
}
