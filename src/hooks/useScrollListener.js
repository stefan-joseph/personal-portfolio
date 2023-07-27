import { useContext, useEffect } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";

export default function useScrollListener(listener, ...variables) {
  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    if (!scroll) return;

    let page;
    if (document.documentElement.classList.contains("has-scroll-smooth")) {
      scroll.on("scroll", (e) => listener(e.scroll.y, ...variables));
    } else {
      page = document.getElementById("page");
      page.addEventListener("scroll", (e) =>
        listener(
          Math.abs(e.target.children[0].getBoundingClientRect().y),
          ...variables
        )
      );
    }

    return () => {
      page.removeEventListener("scroll", (e) =>
        listener(
          Math.abs(e.target.children[0].getBoundingClientRect().y),
          ...variables
        )
      );
    };
  }, [scroll]);
}
