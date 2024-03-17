import { NavBar } from "../NavBar";
import data from "../../data/header-footer.json";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <NavBar textColor="#FFF" marginNavbar="0" />
        <p className={styles.footer__copy}>&copy; {data.copyRight}</p>
      </div>
    </footer>
  );
};
