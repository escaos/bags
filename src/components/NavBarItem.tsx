import { Icon, IconNames } from "../assets/Icon";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";

type Props = {
  name: IconNames;
  href: string;
};

export const NavBarItem = ({ name, href }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <NavLink
      to={href}
      className={`${styles.navLink} ${isActive ? styles.active : ""}`}
    >
      <Icon name={name} className={styles.icon} />
    </NavLink>
  );
};
