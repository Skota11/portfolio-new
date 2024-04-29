import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "こた - skota11",
  description: "skota11の新しいポートフォリオ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
