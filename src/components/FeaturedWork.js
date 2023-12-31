import "./FeaturedWork.css";
import FeaturedWorkCard from "./FeaturedWorkCard";
import Header from "./Header";
import AirbnSeaImg1 from "../../public/boat2.jpg";
import EllaClothingImg1 from "../../public/ellaclothing.jpeg";
import Mockup1 from "../../public/AirbnseaPhoneMockup.jpg";
import Mockup2 from "../../public/EllaClothingPhoneMockup.jpg";
import { data } from "@/data/portfolio";

export default function FeaturedWork() {
  return (
    <div className="FeaturedWork__container">
      <div id="work-scroll-target" className="FeaturedWork__header grid">
        <h2>
          <Header line1="Featured" line2="Work" line1IsSmall />
        </h2>
      </div>
      <ul className="FeaturedWork__list">
        {data.work.map((item, index) => {
          return <FeaturedWorkCard key={index} index={index} details={item} />;
        })}
      </ul>
    </div>
  );
}
