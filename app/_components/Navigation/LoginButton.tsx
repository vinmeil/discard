import { FaRegUser } from "react-icons/fa6";
import {
  IoMenu,
  IoDownloadOutline,
  IoCompassOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function LoginButton() {
  return (
    <button className="h-full flex bg-violet-600 px-4 py-4 items-center justify-between gap-x-4 rounded-lg hover:bg-violet-400 shadow-md">
      <FaRegUser size={16} className="text-2xl text-white" />
      <span className="text-white">Login</span>
    </button>
  );
}

export function MobileLoginButton() {
  const navButtons = [
    {
      icon: <IoDownloadOutline size={20} />,
      text: "Download",
      href: "#",
    },
    {
      icon: <IoCompassOutline size={20} />,
      text: "Discover",
      href: "#",
    },
    {
      icon: <IoHelpCircleOutline size={20} />,
      text: "Support",
      href: "#",
    },
    {
      icon: <IoPersonOutline size={20} />,
      text: "Login",
      href: "#",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-full flex bg-violet-600 px-4 py-4 items-center justify-between gap-x-4 rounded-lg hover:bg-violet-400 shadow-md">
          <IoMenu size={20} className="text-2xl text-white" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-screen px-4 py-2 bg-transparent border-none shadow-none">
        <div className="p-4 rounded-sm bg-violet-600 shadow-md">
          {navButtons.map((button, index) => (
            <Link href={button.href}>
              <DropdownMenuItem key={index} className="text-white gap-x-2">
                {button.icon}
                {button.text}
              </DropdownMenuItem>
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
