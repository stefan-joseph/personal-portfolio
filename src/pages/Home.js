"use client";
import "./Home.css";
import React, { useRef, Fragment } from "react";

import Image from "next/image";
import Hero from "../../public/leaves.jpg";
import useChangeOnScroll from "@/hooks/useChangeOnScroll";
import MainHeader from "@/components/MainHeader";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  const heroRef = useRef();

  useChangeOnScroll(heroRef, { rate: 0.4 });

  return (
    <>
      <div className="Hero__container">
        <div className="Hero__media" id="Hero__media">
          <Image src={Hero} alt="hero" priority ref={heroRef} />
        </div>
        <div className="Hero__header-container">
          <MainHeader />
        </div>
        <div className="Hero__description">
          <div> drsb adgrs b darbdarb rdabardbrds</div>
          <div> drsb adgrs b darbdarb rdabardbrds</div>
          <div> drsb adgrs b darbdarb rdabardbrds</div>
          <div> drsb adgrs b darbdarb rdabardbrds</div>
          <div> drsb adgrs b darbdarb rdabardbrds</div>
        </div>
      </div>
      <FeaturedWork />
    </>
  );
}
