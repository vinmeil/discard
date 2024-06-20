import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export default function Page() {
    return (
        <div className={inter.className}>
            <h1>Testing</h1>
        </div>
    )
}


