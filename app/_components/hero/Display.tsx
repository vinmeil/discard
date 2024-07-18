import Image from "next/image";
import Link from "next/link";
import { CustomHeading } from "@/components/ui/CustomHeading";
import { Button } from "@/components/ui/button";

export function Display() {
  return (
    <div className="flex items-center justify-between h-screen">
      <Image src="/mockups.png" alt="Discard Logo" width={600} height={600} />
      <div className="fill-purple-800 flex flex-col pe-8 justify-end">
        <CustomHeading className="text-4xl font-bold text-white mt-4 max-w-[430px] break-words text-right">
          Connect with Your Friends
        </CustomHeading>
        <Link href="#">
          <Button>Download</Button>
        </Link>
      </div>
    </div>
  );
}
