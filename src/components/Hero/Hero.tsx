import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeroNextBtn } from "../HeroNextBtn";
import { HeroPrevBtn } from "../HeroPrevBtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Hero.module.scss";

import data from "../../data/hero.json";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Scrollbar, A11y]}
        slidesPerView={1}
        centeredSlides
        a11y={{ enabled: true }}
        style={{ position: "relative", paddingTop: "40px" }}
      >
        {data.map(({ id, title, subtitle, text, text2 }) => (
          <SwiperSlide key={id}>
            <HeroNextBtn />
            <HeroPrevBtn />
            <div className={styles.container}>
              <div className={styles.wrap}>
                <h1 className={styles.hero__title}>{title}</h1>
                <h2 className={styles.hero__subtitle}>{subtitle}</h2>
              </div>
              <div className={styles.wrap}>
                <p className={styles.wrap__title}>{text}</p>
                <p className={styles.wrap__subtitle}>{text2}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
