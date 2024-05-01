import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CarsouselLeftNavigation from "../CarouselLeftNavigation/CarsouselLeftNavigation"
import CarsouselRightNavigation from "../CarouselRightNavigation/CarsouselRightNavigation";
import styles from "./Carousel.css";
import { red } from "@mui/material/colors";

const Controls = () => {
  const swiper = useSwiper();
  /* useEffect(() => {
    swiper.slideTo(0);
  }, [data]); */
};
const Carousel = ({ data, component }) => {
  return (
    <div className="wrapper">
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={Navigation}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
      >
        <h1>hi </h1>
        <Controls data={data} />
        <div className="arrow">
          <CarsouselLeftNavigation />
          <CarsouselRightNavigation />
        </div>
        {data.data.map((item) => {
          return <SwiperSlide>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
