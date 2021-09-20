import styles from "../styles/Nav.module.css";
import { PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Nav = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <>
      <div className={styles.menu}>
        <nav className={styles.nav}>{children}</nav>
      </div>
    </>
  );
};

export default Nav;
