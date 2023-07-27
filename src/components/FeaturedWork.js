import "./FeaturedWork.css";
import FeaturedWorkCard from "./FeaturedWorkCard";

export default function FeaturedWork() {
  return (
    <div className="FeaturedWork__container">
      <div id="work-scroll-target" className="FeaturedWork__header">
        <h2>Work</h2>
      </div>

      <ul className="FeaturedWork__list">
        {[{}, {}, {}].map((item, index) => {
          return <FeaturedWorkCard index={index} />;
        })}
      </ul>
    </div>
  );
}
