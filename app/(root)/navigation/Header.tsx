import React from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
    return (
        <>
            <DesktopHeader />
            <MobileHeader className="hidden md:block" />
        </>
    )
}