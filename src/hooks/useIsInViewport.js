import { useEffect, useRef } from "react";

export default function useIsInViewport(ref, threshold) {
  const isInViewPortRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => (isInViewPortRef.current = entry.isIntersecting),
      {
        threshold: threshold || null,
      }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInViewPortRef;
}
