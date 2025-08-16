import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import AppProviders from '@/components/providers/app-providers'
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rotate Dashboard",
  keywords: ["rotate", "dashboard", "nextjs", "panda"],
  creator: "Nii Tackie",
  openGraph: {
    title: "Rotate Dashboard",
    description: "Senior Frontend Engineer Task",
    url: "https://rotate-dashboard.example.com",
    siteName: "Rotate Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotate Dashboard",
    description: "Senior Frontend Engineer Task",
    creator: "@_tackie_",
  },
  description: "Frontend Engineer Task for Rotate",
  authors: [
    {
      name: "Nii Tackie",
      url: "mr-tackie.github.io",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable}`}>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
