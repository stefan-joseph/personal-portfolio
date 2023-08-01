"use client";
import "./Home.css";

import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ContactMe />
    </>
  );
}
