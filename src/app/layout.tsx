import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LandingAI — AI + n8n Agents that get real work done",
    template: "%s — LandingAI",
  },
  description:
    "We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) to automate workflows across your stack.",
  metadataBase: new URL("https://yourstartup.com"),
  openGraph: {
    title: "LandingAI — AI + n8n Agents that get real work done",
    description:
      "Automate processes, connect your tools, and let your agents handle the busy work for your team.",
    url: "/",
    siteName: "LandingAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LandingAI — AI + n8n Agents that get real work done",
    description:
      "Automate processes, connect your tools, and let your agents handle the busy work for your team.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
