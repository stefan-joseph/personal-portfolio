import Image from "next/image";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import { useRef } from "react";
import LinkWithIcon from "./LinkWithIcon";

export default function FeaturedWorkCard({
  index,
  details: { title, href, img1, img2, description, marginTop },
}) {
  const linkRef = useRef();

  useChangeOnScroll(linkRef, {
    parentAsTrack: true,
    reverse: index % 2 === 0 ? true : false,
  });
  return (
    <li className="FeaturedWork__item">
      <div className="FeaturedWork__text">
        <h3 className="h3">{title}</h3>
        <p className="pg">{description}</p>
        <div className="FeaturedWork__link pg">
          <LinkWithIcon href={href} icon={<span>↗</span>} title="Visit site" />
        </div>
      </div>
      <div className="FeaturedWork__media">
        <Image src={img1} alt="work" priority />
      </div>
      <div
        className="FeaturedWork__media"
        style={{
          "--medium": marginTop?.medium,
          "--large": marginTop?.large,
        }}
      >
        <Image src={img2} alt="work" priority ref={linkRef} />
      </div>
      <div className="FeaturedWork__link desktop pg">
        <LinkWithIcon href={href} icon={<span>↗</span>} title="Visit site" />
      </div>
      <div className="FeaturedWork__break"></div>
    </li>
  );
}
