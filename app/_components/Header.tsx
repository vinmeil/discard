import { DesktopHeader } from "./Navigation/DesktopHeader";
import { MobileHeader } from "./Navigation/MobileHeader";

export const Header = () => {
  return (
    <header className="p-4">
      <DesktopHeader className="flex p-8 bg-purple-50 rounded-lg " />
    </header>
  );
};
