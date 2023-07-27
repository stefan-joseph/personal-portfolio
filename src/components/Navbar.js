"use client";
import Link from "next/link";
import "./Navbar.css";
import { useContext, useRef } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";
import useScrollListener from "@/hooks/useScrollListener";
import useScrollIntoView from "@/hooks/useScrollIntoView";

export default function Navbar() {
  const { scroll } = useContext(SmoothScrollContext);
  const headerRef = useRef();
  const showingPrimaryNav = useRef(true);

  const scrollIntoView = useScrollIntoView();

  const changeHandler = (scrollY, ref) => {
    // defining thresholds here keeps them dynamic in case of resize event
    const threshold = window.innerHeight / 50;
    const threshold2 = document
      .getElementById("Hero__media")
      .getBoundingClientRect().height;

    // dictates navigation bar behaviour on scroll
    // 4 scenarios in total
    if (
      showingPrimaryNav.current &&
      scrollY > threshold &&
      scrollY < threshold2
    ) {
      console.log("first");

      showingPrimaryNav.current = false;
      ref.current.classList.add("disappear");
    } else if (
      (scrollY === 0 &&
        !document.documentElement.classList.contains("has-scroll-smooth")) ||
      (!showingPrimaryNav.current && scrollY <= threshold)
    ) {
      console.log("second");
      showingPrimaryNav.current = true;

      ref.current.classList.remove("secondary-nav");
      ref.current.classList.remove("disappear");
    } else if (!showingPrimaryNav.current && scrollY >= threshold2) {
      console.log("third");

      showingPrimaryNav.current = true;
      ref.current.classList.add("secondary-nav");
      ref.current.classList.remove("disappear");
    }
  };

  useScrollListener(changeHandler, headerRef);

  const links = [
    { name: "About", href: "work-scroll-target" },
    { name: "Work", href: "work-scroll-target" },
    { name: "Contact", href: "work-scroll-target" },
  ];

  return (
    <header ref={headerRef}>
      <aside>
        <nav>
          <ul>
            {links.map(({ name, href }, index) => (
              <li key={name}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.toggle("menu-open");
                    setTimeout(() => {
                      scrollIntoView(href);
                    }, 900);
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Link
        href="/"
        className="Nav__logo"
        onClick={(e) => {
          e.preventDefault();
          scroll.scrollTo("top");
        }}
      >
        <div className="Nav__first-name">STEFAN</div>
        <div>JOSEPH</div>
      </Link>

      <button
        className="Nav__menu-btn"
        onClick={() => {
          document.documentElement.classList.toggle("menu-open");
        }}
      >
        <span>Menu</span>
        <div className="Nav__menu-icon"></div>
      </button>
      <nav className="Nav__navbar">
        <ul>
          {links.map(({ name, href }, index) => (
            <li key={name}>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollIntoView(href);
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
