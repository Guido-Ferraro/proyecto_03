import styles from "../styles/NavSectionIntro.module.css";
import FadeIn from "./FadeIn";
interface NavSectionIntroProps {
  title: string;
}

const NavSectionIntro = (props: NavSectionIntroProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <FadeIn transitionDuration={1000}>
        <div className={styles.heading}>
          {props.title}
          <br />
        </div>
      </FadeIn>
    </div>
  );
};

export default NavSectionIntro;
