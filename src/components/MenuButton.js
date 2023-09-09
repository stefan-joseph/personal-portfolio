import "./MenuButton.css";

export default function MenuButton({ handleClick, animate }) {
  return (
    <button
      className={`Nav__menu-btn pg-small${animate ? " animate" : ""}`}
      onClick={handleClick}
    >
      <div className="Nav__menu-title ">
        <div>Menu</div>
        <span>Close</span>
      </div>
      <div className="Nav__icon-container">
        <div className="Nav__menu-icon"></div>
        <div className="Nav__close-icon"></div>
      </div>
    </button>
  );
}
