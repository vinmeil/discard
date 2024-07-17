import { NavigationMenu } from "./NavigationMenu";
import { LoginButton } from "./LoginButton";

type props = {
  className?: string;
};

export const DesktopHeader = (props: props) => {
  return (
    <div className="flex justify-between gap-4">
      <NavigationMenu />
      <LoginButton />
    </div>
  );
};
