import { NavigationMenu } from "./NavigationMenu";
import { MobileLoginButton } from "./LoginButton";

export const MobileHeader = () => {
  return (
    <div className="flex md:hidden justify-between gap-2">
      <NavigationMenu />
      <MobileLoginButton />
    </div>
  );
};
