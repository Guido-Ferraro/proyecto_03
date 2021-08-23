import LearnMore from "./LearnMore";
import styles from "../styles/Splash.module.css";
import FadeIn from "./FadeIn";
const Splash = (): JSX.Element => {
  const time: number = 1000;
  return (
    <section className={styles.splashSection}>
      <div className={styles.splashContentWrapper}>
        <div className={styles.splashContent}>
          <FadeIn delay={time / 4} transitionDuration={time}>
            <h1 className={styles.splashTitle}>Optimizar...</h1>
            <p className={styles.splashParagraph}>
              significa buscar la mejor manera de realizar una actividad...
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={time} transitionDuration={time}>
          <LearnMore />
        </FadeIn>
      </div>
    </section>
  );
};

export default Splash;
