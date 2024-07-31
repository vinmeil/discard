import {
  DialogPortal,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogOverlay,
  Dialog,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CustomHeading } from "@/components/custom/CustomHeading";

type props = {
  DialogTrigger?: React.ReactNode;
  DropDownFix?: React.ReactNode;
};

export function SignInDialog(props: props) {
  return (
    <Dialog>
      {props.DropDownFix}
      <DialogTrigger asChild>{props.DialogTrigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="backdrop-blur-sm" />
        <DialogContent className="bg-zinc-900 text-white border-violet-600/20 p-0 m-0">
          <div className="flex flex-col m-8 gap-y-4">
            <DialogHeader>
              <CustomHeading className="text-white text-center text-2xl">
                Sign In
              </CustomHeading>
            </DialogHeader>
            <Link href="./pages">
              <Button className="w-full bg-violet-600 text-white">
                Dev Log In
              </Button>
            </Link>
          </div>
          <div className="flex p-4 bg-violet-600 justify-center items-center w-full text-center">
            Secured By Clerk
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
