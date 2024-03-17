import { useSwiper } from "swiper/react";

import styles from "./SlidePrevBtn.module.scss";

export const SlidePrevBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      className={styles.btn}
      type="button"
      aria-label="Previous slide"
      onClick={() => swiper.slidePrev()}
    >
      <svg
        width="25"
        height="7"
        viewBox="0 0 25 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.5L5 6.38675V0.613249L0 3.5ZM25 3L4.5 3V4L25 4V3Z"
          fill="#343434"
        />
      </svg>
    </button>
  );
};
