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
      style={{ position: "relative", paddingTop: "40px" }}
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
                <svg
                  className={styles.slide__icon}
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <path
                    d="M17.4999 25.162C17.2644 25.162 17.0365 25.1316 16.8466 25.0633C13.9446 24.0681 9.33325 20.5355 9.33325 15.3164C9.33325 12.6575 11.4832 10.5 14.1269 10.5C15.4108 10.5 16.6111 11.0014 17.4999 11.8978C18.3888 11.0014 19.5891 10.5 20.8729 10.5C23.5167 10.5 25.6666 12.6651 25.6666 15.3164C25.6666 20.5431 21.0553 24.0681 18.1533 25.0633C17.9633 25.1316 17.7354 25.162 17.4999 25.162ZM14.1269 11.6395C12.1137 11.6395 10.4728 13.2881 10.4728 15.3164C10.4728 20.5051 15.4639 23.3919 17.2188 23.9921C17.3556 24.0377 17.6519 24.0377 17.7886 23.9921C19.5359 23.3919 24.5346 20.5127 24.5346 15.3164C24.5346 13.2881 22.8937 11.6395 20.8805 11.6395C19.7258 11.6395 18.6546 12.1789 17.9633 13.1133C17.7506 13.402 17.2644 13.402 17.0517 13.1133C16.3452 12.1713 15.2816 11.6395 14.1269 11.6395Z"
                    fill="#343434"
                  />
                </svg>
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
                <svg
                  className={styles.slide__icon}
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <path
                    d="M17.4999 25.162C17.2644 25.162 17.0365 25.1316 16.8466 25.0633C13.9446 24.0681 9.33325 20.5355 9.33325 15.3164C9.33325 12.6575 11.4832 10.5 14.1269 10.5C15.4108 10.5 16.6111 11.0014 17.4999 11.8978C18.3888 11.0014 19.5891 10.5 20.8729 10.5C23.5167 10.5 25.6666 12.6651 25.6666 15.3164C25.6666 20.5431 21.0553 24.0681 18.1533 25.0633C17.9633 25.1316 17.7354 25.162 17.4999 25.162ZM14.1269 11.6395C12.1137 11.6395 10.4728 13.2881 10.4728 15.3164C10.4728 20.5051 15.4639 23.3919 17.2188 23.9921C17.3556 24.0377 17.6519 24.0377 17.7886 23.9921C19.5359 23.3919 24.5346 20.5127 24.5346 15.3164C24.5346 13.2881 22.8937 11.6395 20.8805 11.6395C19.7258 11.6395 18.6546 12.1789 17.9633 13.1133C17.7506 13.402 17.2644 13.402 17.0517 13.1133C16.3452 12.1713 15.2816 11.6395 14.1269 11.6395Z"
                    fill="#343434"
                  />
                </svg>
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
                <svg
                  className={styles.slide__icon}
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <path
                    d="M17.4999 25.162C17.2644 25.162 17.0365 25.1316 16.8466 25.0633C13.9446 24.0681 9.33325 20.5355 9.33325 15.3164C9.33325 12.6575 11.4832 10.5 14.1269 10.5C15.4108 10.5 16.6111 11.0014 17.4999 11.8978C18.3888 11.0014 19.5891 10.5 20.8729 10.5C23.5167 10.5 25.6666 12.6651 25.6666 15.3164C25.6666 20.5431 21.0553 24.0681 18.1533 25.0633C17.9633 25.1316 17.7354 25.162 17.4999 25.162ZM14.1269 11.6395C12.1137 11.6395 10.4728 13.2881 10.4728 15.3164C10.4728 20.5051 15.4639 23.3919 17.2188 23.9921C17.3556 24.0377 17.6519 24.0377 17.7886 23.9921C19.5359 23.3919 24.5346 20.5127 24.5346 15.3164C24.5346 13.2881 22.8937 11.6395 20.8805 11.6395C19.7258 11.6395 18.6546 12.1789 17.9633 13.1133C17.7506 13.402 17.2644 13.402 17.0517 13.1133C16.3452 12.1713 15.2816 11.6395 14.1269 11.6395Z"
                    fill="#343434"
                  />
                </svg>
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
