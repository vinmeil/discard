import { Inter } from "next/font/google";
import { type ReactNode } from "react";

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html className={inter.className}>
            <body>
                <p>osdnoiadshonadosihnoiasdvvvvvvvvvvvvvvvv</p>
                {children}
            </body>
        </html>
    );
}