export default function useMenu() {
  const menu = {
    open() {
      clearTimeout(this.timeoutID);

      if (
        document &&
        !document.documentElement.classList.contains("has-scroll-smooth")
      ) {
        const scrollProgress = (
          (document.documentElement.scrollTop /
            (document.documentElement.offsetHeight -
              document.documentElement.clientHeight)) *
          100
        ).toFixed(2);

        document.documentElement.style.setProperty(
          "--scroll-progress",
          `${scrollProgress}%`
        );

        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        window.onscroll = function () {
          console.log("close menu");
          window.scrollTo(0, scrollTop);
        };
      }

      document.documentElement.classList.add("menu-open");
    },

    close() {
      if (
        document &&
        !document.documentElement.classList.contains("has-scroll-smooth")
      ) {
        window.onscroll = function () {};

        this.timeoutID = setTimeout(() => {
          document.documentElement.style.removeProperty("--scroll-progress");
        }, 1000);
      }

      document.documentElement.classList.remove("menu-open");
    },
  };

  return menu;
}
