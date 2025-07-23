import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NK | Fullstack Developer | Portfolio",
  description: "Full-Stack Developer with 3+ years of experience in JavaScript/TypeScript. Specializing in React, Node.js, and scalable system architecture. Portfolio and case studies.",
  keywords: [
    "Fullstack Developer",
    "Frontend Developer",
    "Softwate Engineer",
    "React Developer",
    "Node.js Developer",
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>{children}</body>
    </html>
  );
}
