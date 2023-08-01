import "./Header.css";

export default function Header({ line1, line2, line1IsSmall, line2IsSmall }) {
  return (
    <div className="Header__container">
      <div className="Header__block" data-scroll data-scroll-offset="25%">
        <div
          className={line1IsSmall ? "Header__line-1 h2" : "Header__line-1 h1"}
        >
          <div>{line1}</div>
        </div>
        <div
          className={line2IsSmall ? "Header__line-2 h2" : "Header__line-2 h1"}
        >
          <div>{line2}</div>
        </div>
      </div>
    </div>
  );
}
