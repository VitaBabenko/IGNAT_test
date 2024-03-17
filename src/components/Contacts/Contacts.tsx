import data from "../../data/contacts.json";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const { contactCenter, buyers, account, company } = data;
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.contacts__wrapper}>
          <h4 className={styles.contacts__title}>{contactCenter.label}</h4>
          <div className={styles.contacts__list}>
            <p className={styles.contacts__list_item}>{contactCenter.tel}</p>
            <p className={styles.contacts__list_item}>
              {contactCenter.schedule1}
            </p>
            <p className={styles.contacts__list_item}>
              {contactCenter.schedule2}
            </p>
          </div>
        </div>
        <div className={styles.contacts__wrapper}>
          <h4 className={styles.contacts__title}>{buyers.label}</h4>
          <ul className={styles.contacts__list}>
            <li className={styles.contacts__list_item}>{buyers.listLabel1}</li>
            <li className={styles.contacts__list_item}>{buyers.listLabel2}</li>
            <li className={styles.contacts__list_item}>{buyers.listLabel3}</li>
          </ul>
        </div>
        <div className={styles.contacts__wrapper}>
          <h4 className={styles.contacts__title}>{account.label}</h4>
          <ul className={styles.contacts__list}>
            <li className={styles.contacts__list_item}>{account.listLabel1}</li>
            <li className={styles.contacts__list_item}>{account.listLabel2}</li>
            <li className={styles.contacts__list_item}>{account.listLabel3}</li>
            <li className={styles.contacts__list_item}>{account.listLabel4}</li>
          </ul>
        </div>
        <div className={styles.contacts__wrapper}>
          <h4 className={styles.contacts__title}>{company.label}</h4>
          <ul className={styles.contacts__list}>
            <li className={styles.contacts__list_item}>{company.listLabel1}</li>
            <li className={styles.contacts__list_item}>{company.listLabel2}</li>
            <li className={styles.contacts__list_item}>{company.listLabel3}</li>
            <li className={styles.contacts__list_item}>{account.listLabel4}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
