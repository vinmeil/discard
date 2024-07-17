import { NavigationMenu } from "./NavigationMenu";
import { LoginButton } from "./LoginButton";

export const DesktopHeader = () => {
  return (
    <div className="hidden md:flex justify-between gap-4">
      <NavigationMenu />
      <LoginButton />
    </div>
  );
};
