import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

import Navbar from "@/components/macro/navbar";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="anim">
      <body
        className={`${GeistSans.className} anim px-auto relative flex min-h-screen flex-col items-center justify-center`}
      >
        <Navbar />
        {children}
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "-z-10 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </body>
    </html>
  );
}
