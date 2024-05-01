import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../Assets/assets/LeftArrow.svg";
import styles from "./CarsouselLeftNavigation.css";

const CarsouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBegining);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, []);

  return (
    <div className="CarsouselLeftNavigation">
      {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};
export default CarsouselLeftNavigation;
