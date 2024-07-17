import { Dela_Gothic_One } from "next/font/google";

type CustomHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const DelaGothicOne = Dela_Gothic_One({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export function CustomHeading(props: CustomHeadingProps) {
  return (
    <span className={`${props.className} ${DelaGothicOne.className}`}>
      {props.children}
    </span>
  );
}
