import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Header } from "./_components/Header";

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html className={inter.className}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}