import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as RightArrow } from "../../Assets/assets/RightArrow.svg";
import styles from "./CarsouselRightNavigation.css";

const CarsouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className="rightNavigation">
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};
export default CarsouselRightNavigation;
