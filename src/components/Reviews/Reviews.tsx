import data from "../../data/reviews.json";

import styles from "./Reviews.module.scss";

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <h3>{data.title}</h3>
      </div>
    </section>
  );
};
