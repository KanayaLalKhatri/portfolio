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

const SITE = "https://kanayalalkhatri.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kanaya Lal Khatri — Senior Mobile App Developer | Android, Kotlin, Flutter",
  description:
    "Senior Mobile App Developer in Karachi with 7+ years building secure Android (Kotlin, Jetpack Compose) & Flutter apps for banking, fintech, KYC & digital onboarding. Hire an expert mobile developer.",
  keywords: [
    "Kanaya Lal Khatri",
    "Senior Mobile App Developer",
    "Android Developer Karachi",
    "Flutter Developer Pakistan",
    "Kotlin",
    "Jetpack Compose",
    "hire mobile app developer",
    "KYC app developer",
    "Fintech app developer",
  ],
  authors: [{ name: "Kanaya Lal Khatri" }],
  creator: "Kanaya Lal Khatri",
  alternates: { canonical: SITE },
  openGraph: {
    title: "Kanaya Lal Khatri — Senior Mobile App Developer",
    description:
      "7+ years building secure Android, Kotlin & Flutter apps for banking, fintech, KYC & digital onboarding.",
    url: SITE,
    siteName: "Kanaya Lal Khatri",
    type: "website",
    locale: "en_US",
    images: [{ url: `${SITE}/og.png`, width: 1200, height: 630, alt: "Kanaya Lal Khatri — Senior Mobile App Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanaya Lal Khatri — Senior Mobile App Developer",
    description: "7+ years building secure Android, Kotlin & Flutter apps.",
    images: [`${SITE}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kanaya Lal Khatri",
  jobTitle: "Senior Mobile Application Developer",
  url: SITE,
  image: `${SITE}/og.png`,
  email: "kanayalal.khatri7@gmail.com",
  telephone: "+92-336-3762106",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  knowsAbout: ["Android", "Kotlin", "Jetpack Compose", "Flutter", "KYC", "Fintech", "Biometric Authentication", "TensorFlow Lite"],
  sameAs: [
    "https://www.linkedin.com/in/kanayalalkhatri-mobile-app-developer/",
    "https://github.com/KanayaLalKhatri",
    "https://facebook.com/studio.kkgroup",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
