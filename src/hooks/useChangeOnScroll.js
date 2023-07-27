import { useContext, useEffect, useRef } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";
import useIsInViewport from "./useIsInViewport";
import useScrollListener from "./useScrollListener";

export default function useChangeOnScroll(ref, options) {
  const { scroll } = useContext(SmoothScrollContext);

  // returns ref indicating if element is in viewport (check with ref.current)
  const elementToTrack = useRef(ref.current);

  useEffect(() => {
    // once ref is set, updates the element to track in or out of viewport
    // if parentAsTrack is true, sets this as the parent element
    if (options.parentAsTrack && ref.current) {
      elementToTrack.current = ref.current.parentNode;
    } else {
      elementToTrack.current = ref.current;
    }
  }, [ref.current]);

  const isInViewport = useIsInViewport(elementToTrack);

  const rate = options?.rate ?? 0.5;
  const changeProperty =
    options?.changeProperty ??
    function (ref, scrollY, rate) {
      ref.current.style.transform = `translate3d(0, ${scrollY * rate}px, 0)`;
    };

  const changeHandler = (scrollY) => {
    if (!ref.current || !isInViewport.current) return;

    if (!options.parentAsTrack) {
      changeProperty(ref, scrollY, rate);
    } else {
      const windowHeight = window.innerHeight;
      const { bottom, height } = ref.current.parentNode.getBoundingClientRect();
      const totalPixels = height - ref.current.getBoundingClientRect().height;

      if (options.reverse) {
        ref.current.style.transform = `translate3d(0, ${
          totalPixels * (bottom / (windowHeight + height) - 1)
        }px, 0)`;
      } else {
        ref.current.style.transform = `translate3d(0, ${
          totalPixels * (bottom / (windowHeight + height) - 1) * -1
        }px, 0)`;
      }
    }
  };

  useScrollListener(changeHandler);

  // useEffect(() => {
  //   if (!scroll) return;

  //   let page;
  //   if (document.documentElement.classList.contains("has-scroll-smooth")) {
  //     scroll.on("scroll", (e) => changeHandler(e.scroll.y));
  //   } else {
  //     page = document.getElementById("page");
  //     page.addEventListener("scroll", (e) =>
  //       changeHandler(Math.abs(e.target.children[0].getBoundingClientRect().y))
  //     );
  //   }

  //   return () => {
  //     page.removeEventListener("scroll", (e) =>
  //       changeHandler(Math.abs(e.target.children[0].getBoundingClientRect().y))
  //     );
  //   };
  // }, [scroll]);
}
