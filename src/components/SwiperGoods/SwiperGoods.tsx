import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderNextBtn } from "../SliderNextBtn";
import { SlidePrevBtn } from "../SliderPrevBtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./SwiperGoods.module.scss";

import data from "../../data/goods.json";
import photo1 from "../../assets/images/goods1.webp";
import photo2 from "../../assets/images/goods2.webp";
import photo3 from "../../assets/images/goods3.webp";

export const SwiperGoods = () => {
  const { swiper } = data;

  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides
      a11y={{ enabled: true }}
      style={{ position: "relative", paddingTop: "31px" }}
    >
      {swiper.map(
        ({
          id,
          page,
          title1,
          subtitle1,
          price1,
          title2,
          subtitle2,
          price2,
          title3,
          subtitle3,
          price3,
        }) => (
          <SwiperSlide key={id}>
            <div className={styles.goods}>
              <p className={styles.goods__subtitle}>{page}</p>
              <div className={styles.goods__pagination}>
                <SlidePrevBtn />
                <SliderNextBtn />
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.slide}>
                <img
                  src={photo1}
                  alt="фото"
                  width={370}
                  height={433}
                  className={styles.slide__img}
                />
                <h4 className={styles.slide__title}>{title1}</h4>
                <p className={styles.slide__subtitle}>{subtitle1[1]}</p>
                <p className={styles.slide__subtitle}>{subtitle1[2]}</p>
                <p className={styles.slide__price}>{price1}</p>
              </div>
              <div className={styles.slide}>
                <img
                  src={photo2}
                  alt="фото"
                  width={370}
                  height={433}
                  className={styles.slide__img}
                />
                <h4 className={styles.slide__title}>{title2}</h4>
                <p className={styles.slide__subtitle}>{subtitle2[1]}</p>
                <p className={styles.slide__subtitle}>{subtitle2[2]}</p>
                <p className={styles.slide__price}>{price2}</p>
              </div>
              <div className={styles.slide}>
                <img
                  src={photo3}
                  alt="фото"
                  width={370}
                  height={433}
                  className={styles.slide__img}
                />
                <h4 className={styles.slide__title}>{title3}</h4>
                <p className={styles.slide__subtitle}>{subtitle3[1]}</p>
                <p className={styles.slide__subtitle}>{subtitle3[2]}</p>
                <p className={styles.slide__price}>{price3}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
