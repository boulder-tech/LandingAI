import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AI Boulder Tech — AI + n8n Agents that get real work done",
    template: "%s — AI Boulder Tech",
  },
  description:
    "We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) that get real work done across your entire stack.",
  metadataBase: new URL("https://ai.bouldertech.fi"),
  openGraph: {
    title: "AI Boulder Tech — AI + n8n Agents that get real work done",
    description:
      "We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) that get real work done across your entire stack.",
    url: "/",
    siteName: "AI Boulder Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Boulder Tech — AI + n8n Agents that get real work done",
    description:
      "We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) that get real work done across your entire stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
