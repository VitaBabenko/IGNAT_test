import { NavBarProps } from "./NavBar.type";

import data from "../../data/header-footer.json";

import styles from "./NavBar.module.scss";

export const NavBar: React.FC<NavBarProps> = ({ textColor, marginNavbar }) => {
  const { navBar } = data;

  return (
    <ul className={styles.list} style={{ margin: marginNavbar }}>
      {navBar.map(({ id, label }) => (
        <li key={id} className={styles.list__item} style={{ color: textColor }}>
          {label}
        </li>
      ))}
    </ul>
  );
};
