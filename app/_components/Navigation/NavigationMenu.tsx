import { cn } from "@/lib/utils";
import Link from "next/link";
import { CustomHeading } from "@/components/ui/CustomHeading";
import Image from "next/image";

type NavButtonProps = {
  text: string;
  href: string;
  isLastItem?: boolean;
};

function NavButton({ text, href, isLastItem }: NavButtonProps) {
  return (
    <Link
      className={cn(
        "rounded-sm px-3 py-1 hover:text-purple-400 transition active:bg-purple-600 active:text-white",
        isLastItem && "border-none"
      )}
      href={href}
    >
      {text}
    </Link>
  );
}

export function NavigationMenu() {
  const navButtons = [
    {
      text: "Download",
      href: "#",
    },
    {
      text: "Discover",
      href: "#",
    },
    {
      text: "Support",
      href: "#",
      isLastItem: true,
    },
  ];

  return (
    <div className="w-full h-full bg-purple-50 flex justify-between px-4 py-3 items-center rounded-lg text-purple-600">
      <div className="flex justify-between gap-2.5">
        <Image
          height={24}
          width={24}
          src="/logo-purple.svg"
          alt="Discard Logo"
        />
        <CustomHeading className="text-xl">Discard</CustomHeading>
      </div>
      <div className="hidden md:flex justify-evenly">
        {navButtons.map((button, index) => (
          <NavButton key={index} {...button} />
        ))}
      </div>
    </div>
  );
}
