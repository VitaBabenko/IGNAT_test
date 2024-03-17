import data from "../../data/about.json";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.about__title}>{data.title}</h2>
          <p className={styles.about__subtitle}>{data.subtitle}</p>
          <button type="button" className={styles.about__btn}>
            {data.btn}
          </button>
        </div>
        <img src={data.img} alt={data.alt} width={570} />
      </div>
    </section>
  );
};
