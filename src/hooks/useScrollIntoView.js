export default function useScrollIntoView(href) {
  const scrollIntoView = (href) => {
    if (document.documentElement.classList.contains("has-scroll-smooth")) {
      scroll.scrollTo("#" + href, {
        offset: -50,
      });
    } else {
      const page = document.getElementById("page");
      const target = document.getElementById(href).getBoundingClientRect().y;
      page.scrollBy({
        top: target - 50,
        behavior: "smooth",
      });
    }
  };

  return scrollIntoView;
}
