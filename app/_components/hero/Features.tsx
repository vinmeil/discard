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
    <div className="flex flex-col rounded-md p-4 items-center justify-center">
      {icon}
      <div className="text-center">
        <CustomHeading className="text-lg font-bold text-white">
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
    <div className="px-14 py-12 bg-zinc-800 rounded-lg text-violet-50">
      <div className="flex bg-zinc-900 rounded-md items-center justify-center">
        {featuresList.map((feature, index) => (
          <FeaturesItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
