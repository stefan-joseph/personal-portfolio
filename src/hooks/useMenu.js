export default function useMenu() {
  const menu = {
    root: document.documentElement,
    hasSmoothScroll:
      document.documentElement.classList.contains("has-scroll-smooth"),
    open() {
      clearTimeout(this.timeoutID);

      if (!this.hasSmoothScroll) {
        const scrollProgress = (
          (this.root.scrollTop /
            (this.root.offsetHeight - this.root.clientHeight)) *
          100
        ).toFixed(2);

        this.root.style.setProperty("--scroll-progress", `${scrollProgress}%`);

        const scrollTop = window.pageYOffset || this.root.scrollTop;

        window.onscroll = function () {
          console.log("close menu");
          window.scrollTo(0, scrollTop);
        };
      }

      this.root.classList.add("menu-open");
    },

    close() {
      if (!this.hasSmoothScroll) {
        window.onscroll = function () {};

        this.timeoutID = setTimeout(() => {
          this.root.style.removeProperty("--scroll-progress");
        }, 1000);
      }

      this.root.classList.remove("menu-open");
    },
  };

  return menu;
}
