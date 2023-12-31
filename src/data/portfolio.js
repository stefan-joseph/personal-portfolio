import AirbnSeaImg1 from "../../public/boat2.jpg";
import EllaClothingImg1 from "../../public/ellaclothing.jpeg";
import Mockup1 from "../../public/AirbnseaPhoneMockup.jpg";
import Mockup2 from "../../public/EllaClothingPhoneMockup.jpg";
import Mockup3 from "../../public/AI-prompts-mockup.png";
import Mockup4 from "../../public/ai-prompt-mockup-mobile.png";

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
  work: [
    {
      title: "Airbnsea",
      href: "https://airbnsea.netlify.app",
      img1: AirbnSeaImg1,
      img2: Mockup1,
      description:
        "An online marketplace for boat rentals of all kinds. The application connects users who want to rent out their boat to users who would like to rent a boat. Much of the same features as the ubiquitous Airbnb application.",
      marginTop: {
        medium: "-19vw",
        large: "-14vw",
      },
    },
    {
      title: "Ella Clothing",
      href: "https://ella-clothing.fly.dev",
      img1: EllaClothingImg1,
      img2: Mockup2,
      description:
        "An e-commerce women’s clothing store where users can browse the interactive shop, update their shopping cart and personal info, write product reviews and, of course, place orders securely using Stripe payment processing. Design-driven to express the merchant’s unique brand.",
      marginTop: {
        medium: "-11.6vw",
        large: "-7vw",
      },
    },
    {
      title: "Promptopia",
      href: "https://promptopia-rouge-tau.vercel.app/",
      img1: Mockup3,
      img2: Mockup4,
      description:
        "Promptopia is an open-source AI prompting tool for the modern world to discover, create and share creative prompts.",
      marginTop: {
        medium: "-27vw",
        large: "-22vw",
      },
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
