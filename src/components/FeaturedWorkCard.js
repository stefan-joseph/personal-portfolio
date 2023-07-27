import Cactus from "../../public/cactus.jpg";
import Leaf from "../../public/sprayleaf.jpg";
import Image from "next/image";
import { editorialNew } from "@/assets/fonts/fonts";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import { useRef } from "react";
import Link from "next/link";

export default function FeaturedWorkCard({ index }) {
  const linkRef = useRef();

  useChangeOnScroll(linkRef, {
    parentAsTrack: true,
    reverse: index % 2 === 0 ? true : false,
  });
  return (
    <li className="FeaturedWork__item">
      <div className="FeaturedWork__text">
        <h3 className={editorialNew.className}>Airbnsea</h3>
        <p>
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years. Highlights of cases that we
          passionately built with forward-thinking clients and friends over the
          years.
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
}
