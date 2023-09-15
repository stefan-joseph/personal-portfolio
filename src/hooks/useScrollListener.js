import { useContext, useEffect } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";

export default function useScrollListener(listener, options, ...variables) {
  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    if (!scroll) return;
    const isMobile =
      !document.documentElement.classList.contains("has-scroll-smooth");
    if (options?.disableMobile && isMobile) return;

    if (!isMobile) {
      scroll.on("scroll", (e) => listener(e.scroll.y, ...variables));
    } else {
      window.addEventListener("scroll", (e) =>
        listener(
          Math.abs(e.target.children[0].getBoundingClientRect().y),
          ...variables
        )
      );
    }

    return () => {
      window.removeEventListener("scroll", (e) =>
        listener(
          Math.abs(e.target.children[0].getBoundingClientRect().y),
          ...variables
        )
      );
    };
  }, [scroll]);
}
