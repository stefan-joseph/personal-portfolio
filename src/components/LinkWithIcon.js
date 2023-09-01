import "./LinkWithIcon.css";
import Link from "next/link";

export default function LinkWithIcon({ href, icon, title, onDarkBackground }) {
  return (
    <Link
      href={href}
      className={`LinkWithIcon__link ${onDarkBackground ? "is-light" : ""}`}
      target="_blank"
    >
      <div className="LinkWithIcon__icon">{icon}</div>
      <div className="LinkWithIcon__title">{title}</div>
      <div className="LinkWithIcon__arrow">
        <div>→</div>
      </div>
    </Link>
  );
}
