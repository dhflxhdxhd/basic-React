import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
const Banner = () => {
  return (
    <Swiper
      //   modules={Pagination}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-container"
    >
      <SwiperSlide className="swiper-slide">1</SwiperSlide>
      <SwiperSlide className="swiper-slide">2</SwiperSlide>
      <SwiperSlide className="swiper-slide">3</SwiperSlide>
      <SwiperSlide className="swiper-slide">4</SwiperSlide>
    </Swiper>
  );
};

export default Banner;
