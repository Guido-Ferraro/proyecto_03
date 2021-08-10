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
          <NavButton content={`La Empresa`} id={`empresa`} />
          <NavButton content={`Servicios`} id={`servicios`} />
          <NavButton content={`Experiencia`} id={`experiencia`} />
          <NavButton content={`Información`} id={`informacion`} />
        </Nav>
        <ContactButton />
      </div>
    </header>
  );
};

export default Header;
