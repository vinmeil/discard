import Image from "next/image";
import Link from "next/link";
import { CustomHeading } from "@/components/ui/CustomHeading";
import { FiDownloadCloud } from "react-icons/fi";

export function Display() {
  return (
    <div className="flex items-center justify-between pt-12 md:pt-0">
      <Image
        src="/mockups.png"
        alt="Discard Logo"
        width={600}
        height={600}
        className="hidden md:block"
      />
      <Image
        src="/mockups-mobile.png"
        alt="Discard Logo"
        width={300}
        height={300}
        className="block md:hidden"
      />
      <div className="flex flex-col pe-6 md:pe-12 justify-end items-end gap-4">
        <CustomHeading className="text-xl md:text-4xl font-bold text-white mt-4 max-w-[430px] break-words text-right">
          Connect with Your Friends
        </CustomHeading>
        <Link href="#">
          <button className="bg-violet-600 p-4 rounded-full flex gap-x-2 text-white items-center">
            <FiDownloadCloud size={36} className="pe-2" />
            <div className="flex flex-col md:flex-row justify-end gap-x-2 items-end">
              <CustomHeading className="text-xl">Download</CustomHeading>
              <span>for windows</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
