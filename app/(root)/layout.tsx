import Page from "./page";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

const inter = Inter({subsets: ['latin']});

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className={inter.className}>
            {children}
        </div>
    );
}