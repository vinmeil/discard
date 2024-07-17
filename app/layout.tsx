import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Header } from "./_components/Header";
import "./globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: "Discard",
    description: "Discard is a voice and chatting platform",
}

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
} 