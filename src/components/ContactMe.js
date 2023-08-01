import "./ContactMe.css";
import Header from "./Header";

import Mail from "@/assets/svg/Mail";
import Github from "@/assets/svg/Github";
import LinkWithIcon from "./LinkWithIcon";

export default function ContactMe() {
  return (
    <div className="Contact__container">
      <div className="Contact__header grid">
        <h2>
          <Header line1="Contact" line2="Me" line2IsSmall />
        </h2>
      </div>
      <div>
        <ul className="Contact__list">
          {[
            {
              title: "stefanjoseph.dev@gmail.com",
              href: "mailto:stefanjoseph.dev@gmail.com",
              icon: <Mail />,
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
    </div>
  );
}
