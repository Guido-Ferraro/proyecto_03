import LearnMore from "./LearnMore";
import styles from "../styles/Splash.module.css";

const Splash = (): JSX.Element => {
  return (
    <section className={styles.splashSection}>
      <div className={styles.splashContentWrapper}>
        <div className={styles.splashContent}>
          <h1 className={styles.splashTitle}>Título</h1>
          <p className={styles.splashParagraph}>subtitulo</p>
        </div>
        <LearnMore />
      </div>
    </section>
  );
};

export default Splash;
