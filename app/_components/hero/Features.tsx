"use client";

import { CustomHeading } from "@/components/custom/CustomHeading";
import { IoCompassOutline, IoLockClosed } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";

import { useRef, useEffect } from "react";

type featuresItemProps = {
  title: string;
  icon: React.ReactNode;
  label: string;
  image?: string;
  cursorPosition?: { x: number; y: number };
};

const FeaturesItem = ({ title, icon, label, image }: featuresItemProps) => {
  const imageSrc = image ?? { background: `bg-url(${image})` };

  return (
    <div className="card lg:h-[450px] w-full lg:w-[225px]">
      <div className="flex flex-col lg:h-[448px] w-full lg:w-[223px] justify-between items-center px-14 py-12 bg-zinc-900 text-violet-50 card-content h-full">
        {icon}
        <div className="md:text-center">
          <CustomHeading className="text-2xl font-bold text-white">
            {title}
          </CustomHeading>
          <p className="text-white">{label}</p>
        </div>
      </div>
    </div>
  );
};

export function Features() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef?.current?.getElementsByClassName("card");

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (cardsRef.current && cards) {
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    if (cardsRef.current) {
      cardsRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const featuresList = [
    {
      icon: <IoCompassOutline size={120} className="stroke-violet-300" />,
      title: "Discover",
      label: "new communities",
    },
    {
      icon: <IoLockClosed size={120} className="text-violet-300" />,
      title: "Secure",
      label: "conversations",
    },
    {
      icon: <TbMessageCircle2 size={120} className="text-violet-300" />,
      title: "Seamless",
      label: "voice & video chats",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between align-middle px-14 py-12 bg-zinc-900 md:rounded-xl text-violet-50 mt-12 backdrop-blur-md bg-opacity-60 rounded-none">
      <CustomHeading className="w-full md:flex md:items-center text-4xl break-words text-center md:text-left pb-8">
        Our Features
      </CustomHeading>
      <div
        ref={cardsRef}
        className="cards flex flex-col lg:flex-row w-full bg-zinc-900 rounded-xl items-center justify-center gap-1 p-1"
      >
        {featuresList.map((feature, index) => (
          <FeaturesItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
