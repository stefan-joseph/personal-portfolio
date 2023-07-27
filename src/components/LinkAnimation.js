import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter as useRouter2 } from "next/router";
import { useContext } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";

export default function LinkAnimation({ children, href }) {
  const router = useRouter();
  //   const router2 = useRouter2();

  const { scroll } = useContext(SmoothScrollContext);

  const changePage = (event) => {
    //prevents initial navigation
    event.preventDefault();

    // begins css animation
    document.documentElement.classList.add("changing-page");

    // extracts animation duration
    const delay = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--page-change-transition-duration"
      )
    );

    // navigates after animation duration and removes curtain to display page
    setTimeout(() => {
      router.push(href);
      scroll.scrollTo("top", { duration: 0, disableLerp: true });

      document.documentElement.classList.remove("changing-page");
    }, delay);
  };

  return (
    <Link href={href} onClick={changePage}>
      {children}
    </Link>
  );
}
