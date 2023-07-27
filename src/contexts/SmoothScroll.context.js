"use client";
import React, { createContext, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children }) => {
  const pathname = usePathname();

  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    scroll && scroll.update();
  }, [pathname]);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]") ?? undefined,
            smooth: true,
            getDirection: true,
            reloadOnContextChange: true,
            tablet: {
              breakpoint: 0,
            },
            mobile: {
              smooth: false,
            },
          });

          window.scroll = scroll;
          setScroll(scroll);
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
