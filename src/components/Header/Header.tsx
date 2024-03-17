import { Logo } from "../Logo";
import { NavBar } from "../NavBar";
import { SearchBar } from "../SearchBar";

import data from "../../data/header-footer.json";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__links}>
          <a href="tel:0989000909" className={styles.header__links_link}>
            {data.tel}
          </a>
          <a href="#" className={styles.header__links_link}>
            {data.btnHelp}
          </a>
        </div>
        <div className={styles.header__btn}>
          <button type="button" className={styles.header__btn_user}>
            {data.btnSignIn}
          </button>
          <button type="button" className={styles.header__btn_user}>
            {data.btnRegister}
          </button>
        </div>
      </div>
      <div className={styles.header__navbar}>
        <Logo />
        <NavBar textColor="#343434" marginNavbar="0 150px 0 123px" />
        <SearchBar />
      </div>
    </header>
  );
};
