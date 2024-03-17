import { SwiperReviews } from "../SwiperReviews";

import data from "../../data/reviews.json";

import styles from "./Reviews.module.scss";

export const Reviews = () => {
  const { reviewTitle } = data;

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <h3 className={styles.reviews__title}>{reviewTitle}</h3>
        <SwiperReviews />
      </div>
    </section>
  );
};
