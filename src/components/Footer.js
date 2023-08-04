"use client";
import "./Footer.css";
import data from "@/data/portfolio.json";
import Logo from "./Logo";
import Link from "next/link";
import useIsInViewport from "@/hooks/useIsInViewport";
import useScrollListener from "@/hooks/useScrollListener";
import { useRef } from "react";

export default function Footer() {
  const footerBlockRef = useRef();
  const footerRef = useRef();

  const isInViewport = useIsInViewport(footerRef);

  useScrollListener((scrollY) => {
    if (!isInViewport.current) return;
    footerBlockRef.current.style.transform = `translate3d(0, -${
      Math.max(
        document.querySelector("[data-scroll-container]").scrollHeight -
          (scrollY + window.innerHeight),
        0
      ) / 1.5
    }px, 0)`;
  });

  return (
    <footer className="Footer__container" ref={footerRef}>
      <div className="Footer__block grid pg" ref={footerBlockRef}>
        <ul>
          {data.menu.map(({ title }, index) => (
            <li key={index}>
              <Link href="/">{title}</Link>
            </li>
          ))}
        </ul>
        <div className="Footer__logo h2">
          <div className="Footer__subtitle pg">A website by</div>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
