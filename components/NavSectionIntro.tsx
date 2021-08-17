import styles from "../styles/NavSectionIntro.module.css";

interface NavSectionIntroProps {
  title: string;
}

const NavSectionIntro = (props: NavSectionIntroProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.heading}>
          {props.title}
          <br />
        </div>
      </div>
    </div>
  );
};

export default NavSectionIntro;
