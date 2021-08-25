import LearnMore from "./LearnMore";
import styles from "../styles/Splash.module.css";
import FadeIn from "./FadeIn";
const Splash = (): JSX.Element => {
  return (
    <section className={styles.splashSection}>
      <div className={styles.splashContentWrapper}>
        <div className={styles.splashContent}>
          <FadeIn delay={250} transitionDuration={1000}>
            <h1 className={styles.splashTitle}>Optimizar...</h1>
          </FadeIn>
          <FadeIn delay={500} transitionDuration={1000}>
            <p className={styles.splashParagraph}>
              significa buscar la mejor manera de realizar una actividad...
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={750} transitionDuration={1000}>
          <LearnMore />
        </FadeIn>
      </div>
    </section>
  );
};

export default Splash;
