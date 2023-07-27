"use client";
import "./MainHeader.css";
import { useRef } from "react";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import { editorialNew } from "@/assets/fonts/fonts";

export default function MainHeader() {
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

  return (
    <h2 className="MainHeader__header" ref={headerRef} data-scroll>
      <div className="MainHeader__header-sub">Digital</div>
      <div className="MainHeader__header-line-1">
        <div ref={line1Ref}>DEVELOPMENT</div>
      </div>
      <div className="MainHeader__header-line-2">
        <div ref={line2Part1Ref}>and</div>
        <div
        // className={editorialNew.className}
        >
          <div
            ref={title2Part2RefInner}
            style={{ fontWeight: 200, textTransform: "uppercase" }}
          >
            Design
          </div>
        </div>
      </div>
    </h2>
  );
}
