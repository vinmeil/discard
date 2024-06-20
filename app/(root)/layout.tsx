import Page from "./page";
import { Header } from "./navigation/Header";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']});

export default function Layout() {
    return (
        <div className={inter.className}>
            <Header />
            <Page />
        </div>
    );
}