"use client";

import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

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
import {
  DialogPortal,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  Dialog,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CustomHeading } from "@/components/custom/CustomHeading";

export function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="h-full flex bg-violet-600 px-4 py-4 items-center justify-between gap-x-4 rounded-lg hover:bg-violet-400 shadow-md">
          <FaRegUser size={16} className="text-2xl text-white" />
          <span className="text-white">Login</span>
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="backdrop-blur-sm" />
        <DialogContent className="bg-zinc-900 text-white border-violet-600/20 p-0 m-0">
          <div className="m-8">
            <DialogHeader>
              <CustomHeading className="text-white text-center text-2xl">
                Sign In
              </CustomHeading>
            </DialogHeader>
          </div>
          <div className="flex p-4 bg-violet-600 justify-center items-center w-full text-center">
            Secured By Clerk
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownMenu
      onOpenChange={() => {
        setIsOpen(!isOpen);
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="h-full flex bg-violet-600 px-4 py-4 items-center justify-between gap-x-4 rounded-lg hover:bg-violet-400 shadow-md">
          {isOpen ? (
            <MdOutlineKeyboardDoubleArrowDown
              size={20}
              className="text-2xl text-white"
            />
          ) : (
            <IoMenu size={20} className="text-2xl text-white" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-screen px-4 py-2 bg-transparent border-none shadow-none">
        <div className="p-4 rounded-md bg-violet-600 shadow-md">
          {navButtons.map((button, index) => (
            <Link key={index} href={button.href}>
              <DropdownMenuItem className="text-white gap-x-2">
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
