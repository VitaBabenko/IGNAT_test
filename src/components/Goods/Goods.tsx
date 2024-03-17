import { SwiperGoods } from "../SwiperGoods";

import data from "../../data/goods.json";

import styles from "./Goods.module.scss";

export const Goods = () => {
  const { goodsTitle } = data;
  return (
    <section className={styles.goods}>
      <div className={styles.container}>
        <h3 className={styles.goods__title}>{goodsTitle}</h3>
        <SwiperGoods />
      </div>
    </section>
  );
};
