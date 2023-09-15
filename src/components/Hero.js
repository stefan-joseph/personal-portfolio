import "./Hero.css";
import Image from "next/image";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import { useRef } from "react";
import HeroImage from "../../public/mountains.jpg";
import LinkWithIcon from "./LinkWithIcon";
import { data } from "@/data/portfolio.js";

export default function Hero() {
  const heroRef = useRef();
  const headerRef = useRef();
  const subRef = useRef();
  const line1Ref = useRef();
  const line2Part1Ref = useRef();
  const title2Part2RefInner = useRef();

  useChangeOnScroll(heroRef, { rate: 0.5 });

  // useChangeOnScroll(headerRef, { rate: -0.2 });

  // useChangeOnScroll(subRef, { rate: 0.1, disableMobile: true });

  // useChangeOnScroll(line1Ref, { rate: -0.05, disableMobile: true });

  // useChangeOnScroll(line2Part1Ref, { rate: 0.02, disableMobile: true });

  // useChangeOnScroll(title2Part2RefInner, { rate: -0.1, disableMobile: true });

  return (
    <div className="Hero__container grid">
      <div className="Hero__media" id="Hero__media">
        <Image src={HeroImage} alt="hero" priority ref={heroRef} />
      </div>
      <div className="Hero__header-container">
        <h2
          className="MainHeader__header"
          ref={headerRef}
          data-scroll
          style={{ marginTop: "auto", marginBottom: "auto" }}
        >
          <div
            ref={subRef}
            className="MainHeader__header-sub h3"
            style={{ marginLeft: "-.078em", marginBottom: "-.1em" }}
          >
            <div>Digital</div>
          </div>
          <div className="MainHeader__header-line-1 h1">
            <div
              ref={line1Ref}
              style={{
                marginLeft: "-.078em",
                marginRight: ".078em",
              }}
            >
              <div>Development</div>
            </div>
          </div>
          <div className="MainHeader__header-line-2 h1">
            <div ref={line2Part1Ref} className="h3">
              <div>and</div>
            </div>
            <div className="h1">
              <div ref={title2Part2RefInner}>
                <div>Design</div>
              </div>
            </div>
          </div>
        </h2>
      </div>
      <div
        id="about-scroll-target"
        className="Hero__introduction h4"
        style={{ fontWeight: 300 }}
      >
        <div>Hey, I&apos;m Stef.</div>
        <div>I&apos;m a digital developer & designer.</div>
      </div>
      <div className="Hero__description h4">
        <div>I have a knack for making things work.</div>
        <div>And just because something works</div>
        <div>doesn&apos;t mean it shouldn&apos;t look good.</div>
        <div>I do that too.</div>
        <div>Let me help you make your project</div>
        <div>work and look good too.</div>
      </div>
      <ul className="Hero__contact">
        {data.contact.map(({ icon, title, href }, index) => {
          if (index > 1) return;
          return (
            <li key={index} className="Contact__item pg">
              <LinkWithIcon
                href={href}
                icon={icon}
                title={title}
                onDarkBackground
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
