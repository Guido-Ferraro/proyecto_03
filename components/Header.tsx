import styles from "../styles/Header.module.css";
import HomeButton from "./HomeButton";
import Nav from "./Nav";
import NavButton from "./NavButton";
import ContactButton from "./ContactButton";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <HomeButton />
        <Nav>
          <NavButton content={`La Empresa`} id={`empresa`} index={1} />
          <NavButton content={`Servicios`} id={`servicios`} index={2} />
          <NavButton content={`Experiencia`} id={`experiencia`} index={3} />
          <NavButton content={`Información`} id={`informacion`} index={4} />
        </Nav>
        <ContactButton />
      </div>
    </header>
  );
};

export default Header;
