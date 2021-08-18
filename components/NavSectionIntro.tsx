import { useEffect } from "react";
import styles from "../styles/NavSectionIntro.module.css";

interface NavSectionIntroProps {
  title: string;
}

const NavSectionIntro = (props: NavSectionIntroProps): JSX.Element => {
  useEffect(() => {
    const box: HTMLElement | null = document.getElementById("box");
    if (box?.style.height != null) {
      box.style.transition = "1s";
      box.style.height = "100px";
    }
  }, []);

  return (
    <div className={styles.wrapper} id="box">
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
