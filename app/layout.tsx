import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uma pequena carta",
  description: "Uma pequena mensagem feita com carinho.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}