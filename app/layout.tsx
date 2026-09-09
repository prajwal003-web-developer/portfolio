import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

const siteUrl = "https://prajwalneupane.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prajwal Neupane — Full-Stack Web Developer",
  description:
    "Portfolio of Prajwal Neupane, a full-stack web developer working with the MERN stack, Next.js, and TypeScript. Building scalable, production-ready web applications with secure authentication and clean architecture.",
  keywords: [
    "Prajwal Neupane",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Prajwal Neupane", url: siteUrl }],
  creator: "Prajwal Neupane",
  openGraph: {
    title: "Prajwal Neupane — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer proficient in JavaScript, TypeScript, and the MERN stack. Building production-ready applications with Next.js and REST APIs.",
    url: siteUrl,
    siteName: "Prajwal Neupane",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Prajwal Neupane — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer proficient in JavaScript, TypeScript, and the MERN stack.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
