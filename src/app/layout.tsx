import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { AOSInit } from "./components/AOSInit";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mogz Portfolio",
  description: "Portfolio of a Full-Stack Software Engineer specializing in Next.js, TypeScript,MERN stack development and other tech stacks. Explore technical case studies and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${martianMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`min-h-full flex flex-col bg-slate-900 text-white`}>
        <AOSInit />
        <Navbar />

        <main className="overflow-x-hidden w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
