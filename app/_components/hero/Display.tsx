import Image from "next/image";
import Link from "next/link";
import { CustomHeading } from "@/components/custom/CustomHeading";
import { FiDownloadCloud } from "react-icons/fi";

export function Display() {
  return (
    <div className="flex items-center justify-between pt-12 md:pt-4 md:gap-x-12">
      <Image
        src="/mockups.png"
        alt="Discard Logo"
        width={600}
        height={600}
        className="ps-12 h-auto w-6/12 max-w-[600px] hidden md:block"
      />
      <Image
        src="/mockups-mobile.png"
        alt="Discard Logo"
        width={300}
        height={300}
        className="h-auto max-w-[300px] w-5/12 block md:hidden"
      />
      <div className="flex flex-col pe-6 md:pe-12 justify-end items-end gap-4  text-white">
        <CustomHeading className="text-xl md:text-4xl font-bold mt-4 max-w-[430px] break-words text-right">
          Connect with Your Friends
        </CustomHeading>
        <p className="text-right">an open source & free chat platform</p>
        <Link href="#">
          <button className="bg-violet-600 px-6 p-2 md:p-4 rounded-full flex gap-x-2 text-white items-center hover:bg-violet-400">
            <FiDownloadCloud size={36} className="pe-2" />
            <div className="flex flex-col md:flex-row justify-end gap-y-0 md:gap-x-2 items-end">
              <CustomHeading className="text-lg md:text-xl">
                Download
              </CustomHeading>
              <span>for windows</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
