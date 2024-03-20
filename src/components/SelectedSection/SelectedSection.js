import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SelectedSection.css";
import { DataContext, SelectedCategory } from "../../App";
import LargeCard from "../LargeCard/LargeCard";
const SelectedSection = () => {
  const [slideNumers, setSlideNumers] = useState(window.innerWidth / 400);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 550) {
        setSlideNumers(1.3);
      } else if (window.innerWidth < 1100 && window.innerWidth > 550) {
        setSlideNumers(2);
      } else if (window.innerWidth > 1100 && window.innerWidth < 1450) {
        setSlideNumers(2.5);
      } else if (window.innerWidth > 1450) {
        setSlideNumers(3.5);
      }
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);
  //Get Data From Context
  const DataObject = useContext(DataContext);
  const SelectedCategoryContext = useContext(SelectedCategory);
  //Filter The Data Comes From Parent To the Data categoy required
  // in the section like Trinding
  let result = [];

  switch (SelectedCategoryContext.currentSelected) {
    case "Recommended for you":
      result = DataObject.data.filter(
        (FilmRecord) => FilmRecord.isTrending == true
      );
      break;

    default:
      break;
  }

  return (
    <div id="SelectedSection">
      <span id="SelectedSectionName">Trending</span>
      <div id="CategoryCardWrapper">
        <Swiper
          style={{ width: "100%" }}
          breakpoints={{
            // when window width is >= 320px
            2400: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            1140: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1.3,
              spaceBetween: 40,
            },
            250: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
          }}
        >
          {result.map((movieRecord) => {
            return (
              <SwiperSlide>
                <LargeCard movieRecord={movieRecord}></LargeCard>;
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default SelectedSection;
