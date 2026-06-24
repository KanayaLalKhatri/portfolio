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
  title: "Kanaya Lal Khatri — Senior Mobile Application Developer",
  description:
    "Senior Mobile Application Developer with 7+ years building secure Android, Kotlin, Jetpack Compose & Flutter apps for banking, fintech, and digital onboarding.",
  keywords: [
    "Mobile Developer",
    "Android Developer",
    "Kotlin",
    "Flutter",
    "Jetpack Compose",
    "KYC",
    "Fintech",
    "Kanaya Lal Khatri",
  ],
  authors: [{ name: "Kanaya Lal Khatri" }],
  openGraph: {
    title: "Kanaya Lal Khatri — Senior Mobile Application Developer",
    description:
      "7+ years building secure Android, Kotlin & Flutter apps for banking, fintech, and digital onboarding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
