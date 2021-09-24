import { useEffect } from "react";
import styles from "../styles/NavSectionIntro.module.css";
import FadeIn from "./FadeIn";
interface NavSectionIntroProps {
  title: string;
  backgroundImageRule: string;
}

const NavSectionIntro = (props: NavSectionIntroProps): JSX.Element => {
  useEffect(() => {
    const box = document.getElementById("box") as HTMLElement;
    box.style.backgroundImage = props.backgroundImageRule;
  }, [props.backgroundImageRule]);

  return (
    <div className={styles.wrapper} id="box">
      <div className={styles.content}>
        <FadeIn transitionDuration={1000}>
          <div className={styles.heading}>
            {props.title}
            <br />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default NavSectionIntro;
