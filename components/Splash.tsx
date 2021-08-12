import LearnMore from "./LearnMore";
import styles from "../styles/Splash.module.css";

const Splash = (): JSX.Element => {
  return (
    <section className={styles.splashSection}>
      <div className={styles.splashContentWrapper}>
        <div className={styles.splashContent}>
          <h1 className={styles.splashTitle}>Grow your business.</h1>
          <p className={styles.splashParagraph}>
            Give your business a boost with a beautifully crafted homepage.
          </p>
        </div>
        <LearnMore />
      </div>
    </section>
  );
};

export default Splash;
