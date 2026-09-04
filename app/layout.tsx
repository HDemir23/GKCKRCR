import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/latin-ext-400.css";
import "@fontsource/ibm-plex-mono/latin-ext-600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GK Studio | Dijital sanat showroomu",
  description:
    "GK Studio wall art, Frame TV art, sticker ve pattern koleksiyonlarını keşfet. Seçili işler ilgili Etsy vitrininine açılır.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
