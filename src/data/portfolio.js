import Mail from "@/assets/svg/Mail";
import Phone from "@/assets/svg/Phone";
import Github from "@/assets/svg/Github";

export const data = {
  menu: [
    {
      title: "About",
      href: "about-scroll-target",
    },
    {
      title: "Work",
      href: "work-scroll-target",
    },
    {
      title: "Contact",
      href: "contact-scroll-target",
    },
  ],
  contact: [
    {
      title: "stefanjoseph.dev@gmail.com",
      href: "mailto:stefanjoseph.dev@gmail.com",
      icon: <Mail />,
    },
    {
      title: "+1 613 974 6912",
      href: "tel:+1 613 974 6912",
      icon: <Phone />,
    },
    {
      title: "github.com/stefan-joseph",
      href: "https://github.com/stefan-joseph",
      icon: <Github />,
    },
  ],
};
