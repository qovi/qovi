import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mikkel | Portfolio",
  description: "Dette er min webudviklingsportfolio, hvor jeg viser mine projekter og mit arbejde.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
