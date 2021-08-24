import styles from "../styles/Motto.module.css";
import FadeIn from "./FadeIn";
const Motto = (): JSX.Element => {
  return (
    <div className={styles.mottoContainer}>
      <FadeIn delay={250} transitionDuration={1000}>
        <div className={styles.mottoLabel}>WHAT WE BELIEVE IN</div>
        <div className={styles.mottoBigText}>
          Grow your business, establish your brand, and put your customers
          first.
        </div>
      </FadeIn>
      <br />
      <div className={styles.mottoDivider}></div>
    </div>
  );
};

export default Motto;
