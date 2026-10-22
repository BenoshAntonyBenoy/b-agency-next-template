import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "B Studio — Agency Website Design Study",
  description: "A portfolio design demonstration with illustrative brands, testimonials, project mockups, pricing and business metrics. No paid services are offered."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
