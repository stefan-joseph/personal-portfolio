export default function useScrollIntoView(href) {
  const scrollIntoView = (href) => {
    if (document.documentElement.classList.contains("has-scroll-smooth")) {
      scroll.scrollTo("#" + href, {
        offset: -80,
      });
    } else {
      const page = document.documentElement;
      const target = document.getElementById(href).getBoundingClientRect().y;
      page.scrollBy({
        top: target - 80,
        behavior: "smooth",
      });
    }
  };

  return scrollIntoView;
}
