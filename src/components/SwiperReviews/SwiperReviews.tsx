import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderNextBtn } from "../SliderNextBtn";
import { SlidePrevBtn } from "../SliderPrevBtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./SwiperReviews.module.scss";

import data from "../../data/reviews.json";
import photo from "../../assets/images/Mask.png";

export const SwiperReviews = () => {
  const { swiper } = data;

  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides
      a11y={{ enabled: true }}
      style={{ position: "relative", paddingTop: "30px" }}
    >
      {swiper.map(({ id, page, title, subtitle }) => (
        <SwiperSlide key={id}>
          <div className={styles.reviews}>
            <p className={styles.reviews__subtitle}>{page}</p>
            <div className={styles.reviews__pagination}>
              <SlidePrevBtn />
              <SliderNextBtn />
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.slide}>
              <div className={styles.slide__header}>
                <img src={photo} alt="фото користувача" />
                <h4 className={styles.slide__title}>{title}</h4>
              </div>
              <p>{subtitle}</p>
            </div>
            <div className={styles.slide}>
              <div className={styles.slide__header}>
                <img src={photo} alt="фото користувача" />
                <h4 className={styles.slide__title}>{title}</h4>
              </div>
              <p>{subtitle}</p>
            </div>
            <div className={styles.slide}>
              <div className={styles.slide__header}>
                <img src={photo} alt="фото користувача" />
                <h4 className={styles.slide__title}>{title}</h4>
              </div>
              <p>{subtitle}</p>
            </div>
            <div className={styles.slide}>
              <div className={styles.slide__header}>
                <img src={photo} alt="фото користувача" />
                <h4 className={styles.slide__title}>{title}</h4>
              </div>
              <p>{subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
