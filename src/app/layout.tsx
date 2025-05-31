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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "ThynkOf",
  description:
    "ThynkOf helps you stay connected by listening to conversations, summarizing them, and surfacing follow-ups so you never forget what's important.",
  metadataBase: new URL("https://thynkof.me"),
  keywords: [
    "Memory Assistant",
    "AI Summarizer",
    "Conversation App",
    "Reminders",
    "Relationship Tracker",
    "ThynkOf",
    "Mindlyst",
  ],
  openGraph: {
    title: "ThynkOf — Remember What Matters",
    description:
      "Never forget another conversation. ThynkOf is your AI-powered memory companion for real-life connections.",
    url: "https://thynkof.me",
    siteName: "ThynkOf",
    images: [
      {
        url: "/og-image.png", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "ThynkOf logo and tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThynkOf — Remember What Matters",
    description:
      "AI-powered memory and relationship assistant built for people who want to stay truly connected.",
    images: ["/og-image.png"],
    creator: "@victoravila__", // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#123524",
};
