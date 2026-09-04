import type { Metadata } from "next";
import localFont from "next/font/local";
import { ShopProvider } from "@/components/shop-provider";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GK Studio | Dijital wall art ve sticker setleri",
  description:
    "Baskıya hazır wall art, Frame TV art, sticker ve pattern koleksiyonları. Tasarla, indir, kendi alanına taşı.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={geist.variable}>
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
