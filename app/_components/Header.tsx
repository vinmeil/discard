import { DesktopHeader } from "./Navigation/DesktopHeader";
import { MobileHeader } from "./Navigation/MobileHeader";

export const Header = () => {
    return (
        <header>
            <MobileHeader />
            <DesktopHeader />
        </header>
    )
}