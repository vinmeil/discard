"use client";

import { useEffect, useRef } from "react";

type customCardProps = {
  className?: {
    card: string;
    heading: string;
    content: string;
  };
  children: React.ReactNode;
};

export function CustomCard(props: customCardProps) {
  const customCard = (props: customCardProps) => {
    return (
      <div className="card lg:h-[450px] w-full lg:w-[225px]">
        <div className="flex flex-col lg:h-[448px] w-full lg:w-[223px] justify-between items-center px-14 py-12 bg-zinc-900 text-violet-50 card-content h-full">
          {props.children}
        </div>
      </div>
    );
  };

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

  return customCard(props);
}
