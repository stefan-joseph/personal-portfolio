"use client";
import Link from "next/link";
import "./Navbar.css";
import { useContext, useRef } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";
import useScrollListener from "@/hooks/useScrollListener";
import useScrollIntoView from "@/hooks/useScrollIntoView";
import useMenu from "@/hooks/useMenu";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const { scroll } = useContext(SmoothScrollContext);
  const headerRef = useRef();
  const showingPrimaryNav = useRef(true);

  const scrollIntoView = useScrollIntoView();
  const menu = useMenu();

  const changeHandler = (scrollY, ref) => {
    // defining thresholds here keeps them dynamic in case of resize event
    const threshold = window.innerHeight / 50;
    const threshold2 = document
      .getElementById("Hero__media")
      .getBoundingClientRect().height;
    const htmlClassList = document.documentElement.classList;
    // dictates navigation bar behaviour on scroll
    // 4 scenarios in total
    if (
      showingPrimaryNav.current &&
      scrollY > threshold &&
      scrollY < threshold2 &&
      !htmlClassList.contains("menu-open")
    ) {
      // console.log("first");

      showingPrimaryNav.current = false;
      ref.current.classList.add("disappear");
    } else if (
      (scrollY === 0 && !htmlClassList.contains("has-scroll-smooth")) ||
      (!showingPrimaryNav.current && scrollY <= threshold)
    ) {
      // console.log("second");
      showingPrimaryNav.current = true;

      ref.current.classList.remove("secondary-nav");
      ref.current.classList.remove("disappear");
    } else if (!showingPrimaryNav.current && scrollY >= threshold2) {
      // console.log("third");

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
      <Link
        href="/"
        className="Nav__logo"
        onClick={(e) => {
          e.preventDefault();
          // @TODO: doesn't work on mobile
          scroll.scrollTo("top");
        }}
      >
        <Logo />
      </Link>
      {/* need to leave handleClick as arrow function for 'this.timeoutID' to work */}
      <MenuButton handleClick={() => menu.open()} />
      <nav className="Nav__navbar pg-small">
        <ul>
          {links.map(({ name, href }, index) => (
            <li key={name}>
              <Link
                href="/"
                className="link"
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
      <aside>
        <Link
          href="/"
          className="Nav__logo h3"
          onClick={(e) => {
            e.preventDefault();
            menu.close();
            setTimeout(() => {
              scroll.scrollTo("top");
            }, 900);
          }}
        >
          <Logo />
        </Link>
        {/* need to leave handleClick as arrow function for 'this.timeoutID' to work */}
        <MenuButton handleClick={() => menu.close()} />
        <nav>
          <ul>
            {links.map(({ name, href }, index) => (
              <li key={name} className="h1">
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    menu.close();
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
      <div className="Nav__scroll-direction h3">
        <div>↓</div>
      </div>
    </header>
  );
}
