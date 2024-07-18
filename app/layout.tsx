import { type Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { type ReactNode } from "react";
import { Header } from "./_components/Header";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discard",
  description: "Discard is a voice and chatting platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${DMSans.className} bg-hero-desktop bg-zinc-900`}>
        <div className="bg-gradient-to-b from-violet-200 to-transparent to-60%">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
