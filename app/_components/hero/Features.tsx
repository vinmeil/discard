import { CustomHeading } from "@/components/ui/CustomHeading";
import { IoCompassOutline, IoLockClosed } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";

type featuresItemProps = {
  title: string;
  icon: React.ReactNode;
  label: string;
  image?: string;
};

const FeaturesItem = ({ title, icon, label, image }: featuresItemProps) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-ring flex flex-col rounded-md p-8 items-center justify-between h-[450px] w-[275px] border border-violet-50 border-opacity-70">
      {icon}
      <div className="text-center">
        <CustomHeading className="text-2xl font-bold text-white">
          {title}
        </CustomHeading>
        <p className="text-white">{label}</p>
      </div>
    </div>
  );
};

export function Features() {
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
    <div className="flex justify-between align-middle px-14 py-12 bg-zinc-900 rounded-lg text-violet-50 mt-12 backdrop-blur-md bg-opacity-60">
      <CustomHeading className="text-4xl flex items-center">Our Features</CustomHeading>
      <div className="flex w-min bg-zinc-900 rounded-md items-center justify-center gap-x-1 p-1">
        {featuresList.map((feature, index) => (
          <FeaturesItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
