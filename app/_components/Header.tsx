import { DesktopHeader } from "./Navigation/DesktopHeader";
import { MobileHeader } from "./Navigation/MobileHeader";

export const Header = () => {
  return (
    <header className="p-4">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};
