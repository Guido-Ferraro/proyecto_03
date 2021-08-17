import styles from "../styles/NavSectionIntro.module.css";

interface NavSectionIntroProps {
  title: string;
}

const NavSectionIntro = (props: NavSectionIntroProps): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.heading}>
            {props.title}
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSectionIntro;
