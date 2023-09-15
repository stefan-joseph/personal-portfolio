import { useEffect, useRef } from "react";
import useIsInViewport from "./useIsInViewport";
import useScrollListener from "./useScrollListener";

export default function useChangeOnScroll(ref, options) {
  const { disableMobile, parentAsTrack } = options;
  // returns ref indicating if element is in viewport (check with ref.current)
  const elementToTrack = useRef(ref.current);

  useEffect(() => {
    // once ref is set, updates the element to track in or out of viewport
    // if parentAsTrack is true, sets this as the parent element
    if (parentAsTrack && ref.current) {
      elementToTrack.current = ref.current.parentNode;
    } else {
      elementToTrack.current = ref.current;
    }
  }, [ref.current]);

  const isInViewport = useIsInViewport(elementToTrack);

  const rate = options?.rate ?? 0.5;

  const modilfyProperty =
    options?.modifyProperty ??
    function (ref, scrollY, rate) {
      ref.current.style.transform = `translate3d(0, ${scrollY * rate}px, 0)`;
    };

  const changeHandler = (scrollY) => {
    if (!ref.current || !isInViewport.current) return;

    if (!parentAsTrack) {
      modilfyProperty(ref, scrollY, rate);
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

  useScrollListener(changeHandler, { disableMobile });
}
