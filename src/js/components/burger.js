const burger = document.querySelector(".header__burger");
const siteContainer = document.querySelector(".site-container");
if (burger) {
  const burgerMenu = document.querySelector(".burger-menu");
  const menuClose = burgerMenu.querySelector(".burger-menu__top");
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.classList.add("active");
    siteContainer.classList.add("burger-active");
    document.body.style.overflow = "hidden";
  });
  menuClose.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.classList.remove("active");
    siteContainer.classList.remove("burger-active");
    document.body.style.overflow = null;
  });
  const catButtons = document.querySelectorAll(".burger-menu__cat");

  catButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const contentTag = el.dataset.burgerContent;

      const current = document.querySelector(
        `.burger-menu__content[data-burger-content=${contentTag}]`
      );
      const btnBack = current?.querySelector(".bm-content__top");

      current?.classList.add("active");

      btnBack?.addEventListener("click", (e) => {
        e.preventDefault();
        current.classList.remove("active");
      });
    });
  });
}
