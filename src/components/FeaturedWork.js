import "./FeaturedWork.css";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import { useRef } from "react";
import Cactus from "../../public/cactus.jpg";
import Leaf from "../../public/sprayleaf.jpg";
import Image from "next/image";
import { editorialNew } from "@/assets/fonts/fonts";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <div className="FeaturedWork__container">
      <div id="work-scroll-target" className="FeaturedWork__header">
        <h2>Work</h2>
      </div>

      <ul className="FeaturedWork__list">
        {[{}, {}, {}].map((item, index) => {
          const linkRef = useRef();

          useChangeOnScroll(linkRef, {
            parentAsTrack: true,
            reverse: index % 2 === 0 ? true : false,
          });

          return (
            <li key={index} className="FeaturedWork__item">
              <div className="FeaturedWork__text">
                <h3 className={editorialNew.className}>Airbnsea</h3>
                <p>
                  Highlights of cases that we passionately built with
                  forward-thinking clients and friends over the years.
                  Highlights of cases that we passionately built with
                  forward-thinking clients and friends over the years.
                </p>
              </div>
              <div className="FeaturedWork__media">
                <Image src={Cactus} alt="work" priority />
              </div>
              <div className="FeaturedWork__media">
                <Image src={Leaf} alt="work" priority ref={linkRef} />
              </div>
              <div className="FeaturedWork__link">
                <Link href="/">
                  Visit Site
                  <div className="icon">
                    <div className="arrow">↗</div>
                  </div>
                </Link>
              </div>
              <div className="FeaturedWork__break"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
