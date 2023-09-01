import "./ContactMe.css";
import Header from "./Header";
import LinkWithIcon from "./LinkWithIcon";
import { data } from "@/data/portfolio.js";

export default function ContactMe() {
  console.log("data", data);
  return (
    <div className="Contact__container grid">
      <div className="Contact__header">
        <h2>
          <Header line1="Contact" line2="Me" line2IsSmall />
        </h2>
      </div>
      <ul className="Contact__list">
        {data.contact.map(({ icon, title, href }, index) => (
          <li key={index} className="Contact__item pg">
            <LinkWithIcon href={href} icon={icon} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
