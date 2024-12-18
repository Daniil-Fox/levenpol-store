import { Swiper } from "swiper";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Thumbs, Autoplay]);

new Swiper(".types__slider", {
  slidesPerView: "auto",
  spaceBetween: 8,
  centeredSlides: true,
});
new Swiper(".products__slider", {
  slidesPerView: "auto",
  spaceBetween: 8,
});

const singleThumbs = new Swiper(".single-prod__thumbs", {
  direction: "vertical",
  slidesPerView: 2,
  spaceBetween: 24,
  autoHeight: true,
  loop: true,
  speed: 500,
});

const mainSlider = new Swiper(".single-prod__slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: 500,
  thumbs: {
    swiper: singleThumbs,
  },
});

new Swiper(".recent__slider", {
  slidesPerView: 4,
  spaceBetween: 24,
  speed: 500,
  autoplay: {
    delay: 5000,
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };
  const cardsSlider = document.querySelectorAll(".cards__slider");
  if (cardsSlider.length > 0) {
    cardsSlider.forEach((el) => {
      resizableSwiper(
        "(max-width: 850px)",
        el,
        {
          spaceBetween: 8,
          slidesPerView: 2,
          pagination: {
            el: el.querySelector(".cards__pagination"),
            clickable: true,
          },
        },
        someFunc
      );
    });
  }
});
