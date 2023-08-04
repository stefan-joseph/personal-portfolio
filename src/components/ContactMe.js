import "./ContactMe.css";
import Header from "./Header";
import LinkWithIcon from "./LinkWithIcon";
import Mail from "@/assets/svg/Mail";
import Phone from "@/assets/svg/Phone";
import Github from "@/assets/svg/Github";

export default function ContactMe() {
  return (
    <div className="Contact__container grid">
      <div className="Contact__header">
        <h2>
          <Header line1="Contact" line2="Me" line2IsSmall />
        </h2>
      </div>

      <ul className="Contact__list">
        {[
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
        ].map(({ icon, title, href }, index) => (
          <li key={index} className="Contact__item pg">
            <LinkWithIcon href={href} icon={icon} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
