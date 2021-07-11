import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

import firstImage from "../images/firstImg.jpg";
import secondImage from "../images/secondImg.jpg";
import thirdImage from "../images/thirdImg.jpg";
import fourthImage from "../images/fourthImg.jpg";
import fifthImage from "../images/fifthImg.jpg";

import "./Slider.css";

const sliderData = [
  {
    img: firstImage,
    description:
      "Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions.",
  },
  {
    img: secondImage,
    description:
      "Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions.",
  },
  {
    img: thirdImage,
    description:
      "Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions.",
  },
  {
    img: fourthImage,
    description:
      "Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions.",
  },
  {
    img: fifthImage,
    description:
      "Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions.",
  },
];

SwiperCore.use([Navigation, Autoplay]);
const Slider = () => {
  return (
    <div className="container" style={{ borderRadius: "20%" }}>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {sliderData.map((slider) => (
          <SwiperSlide>
            <div className="row">
              <div>
                <img
                  className="img-fluid "
                  style={{ borderRadius: "5%", height: "500px", width: "100%" }}
                  src={slider.img}
                  alt=""
                />
                <p className="slider-description">{slider.description}</p>
              </div>
              {/* <div className="col-md-6">
                <p className="pt-5 mt-5">{slider.description}</p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
