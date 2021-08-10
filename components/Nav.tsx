import styles from "../styles/Nav.module.css";
import { PropsWithChildren } from "react";

const Nav = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>{children}</nav>
    </div>
  );
};

export default Nav;
