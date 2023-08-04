import "./Hero.css";
import Image from "next/image";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import MainHeader from "@/components/MainHeader";
import { useRef } from "react";
import HeroImage from "../../public/mountains.jpg";

export default function Hero() {
  const headerRef = useRef();
  const line1Ref = useRef();
  const line2Part1Ref = useRef();
  const title2Part2RefInner = useRef();

  useChangeOnScroll(headerRef, { rate: -0.2 });

  useChangeOnScroll(line1Ref, { rate: -0.05 });

  useChangeOnScroll(line2Part1Ref, { rate: 0.1 });

  useChangeOnScroll(title2Part2RefInner, {
    rate: 0.1,
    changeProperty: (ref, scrollY, rate) => {
      ref.current.style.marginTop = `${scrollY * rate}px`;
    },
  });

  useChangeOnScroll(title2Part2RefInner, { rate: -0.02 });
  const heroRef = useRef();

  useChangeOnScroll(heroRef, { rate: 0.4 });

  return (
    <div className="Hero__container grid">
      <div className="Hero__media" id="Hero__media">
        <Image src={HeroImage} alt="hero" priority ref={heroRef} />
      </div>
      <div className="Hero__header-container">
        <h2 className="MainHeader__header" ref={headerRef} data-scroll>
          <div
            className="MainHeader__header-sub h3"
            style={{ marginLeft: "-.078em" }}
          >
            Digital
          </div>
          <div className="MainHeader__header-line-1 h1">
            <div
              ref={line1Ref}
              style={{
                marginLeft: "-.078em",
                marginRight: ".078em",
              }}
            >
              Development
            </div>
          </div>
          <div className="MainHeader__header-line-2 h1">
            <div ref={line2Part1Ref} className="h3">
              and
            </div>
            <div
              // className={editorialNew.className}
              className="h1"
            >
              <div ref={title2Part2RefInner}>Design</div>
            </div>
          </div>
        </h2>
      </div>
      <div className="Hero__description pg">
        <div>Hey, I'm Stef.</div>
        <div>I'm a digital developer & designer.</div>
        <div>I make things work and</div>
        <div>look good while doing so.</div>
        <div>Let me help make your project</div>
        <div>work and look good too.</div>
      </div>
    </div>
  );
}
