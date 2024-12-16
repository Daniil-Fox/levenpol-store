import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

new Swiper(".types__slider", {
  slidesPerView: "auto",
});
new Swiper(".products__slider", {
  slidesPerView: "auto",
});
