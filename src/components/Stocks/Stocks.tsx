import data from "../../data/stocks.json";

import styles from "./Stocks.module.scss";

export const Stocks = () => {
  return (
    <section className={styles.stocks}>
      <div className={styles.container}>
        <h2 className={styles.stocks__title}>{data.title}</h2>
        <p className={styles.stocks__subtitle}>{data.subtitle}</p>
        <div className={styles.stocks__subscribe}>
          <input
            type="text"
            placeholder={data.placeholder}
            className={styles.stocks__input}
          />
          <button type="button" className={styles.stocks__btn}>
            {data.btn}
          </button>
        </div>
      </div>
    </section>
  );
};
