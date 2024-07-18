import { CustomHeading } from "@/components/ui/CustomHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type footerItemsProps = {
  heading: string;
  items: { text: string; href: string }[];
};

const FooterItems = (props: footerItemsProps) => {
  return (
    <div className="flex flex-col gap-y-2 items-start">
      <CustomHeading className="text-lg font-bold text-white">
        {props.heading}
      </CustomHeading>
      {props.items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-white hover:text-violet-400 transition text-left"
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

const footerList = [
  {
    heading: "Company",
    items: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
    ],
  },
  {
    heading: "Support",
    items: [
      { text: "Help Center", href: "#" },
      { text: "Safety Center", href: "#" },
      { text: "FaQs", href: "#" },
      { text: "Customer Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-zinc-900 text-white text-center px-12 md:px-24 py-12 gap-y-12">
      <div className="flex gap-x-16">
        {footerList.map((list, index) => (
          <FooterItems key={index} {...list} />
        ))}
      </div>
      <div className="flex flex-col gap-y-4 items-end text-right">
        <CustomHeading className="text-lg font-bold text-white">
          Contact Us
        </CustomHeading>
        <p>Get in touch with our team</p>
        <div className="flex gap-x-2 w-full">
          <Input type="email" placeholder="123@discard.net" className="dark" />
          <Button>Send</Button>
        </div>
        <p>&copy; 2021 Discard</p>
      </div>
    </footer>
  );
}
