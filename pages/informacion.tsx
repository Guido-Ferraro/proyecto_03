import NavSectionIntro from "../components/NavSectionIntro";
import styles from "../styles/Servicios.module.css";
import FadeIn from "./../components/FadeIn";

const Informacion = (): JSX.Element => {
  const backgroundImageRule = "url('../public/intro_info.jpg')";

  return (
    <>
      <div className={`${styles.wrapper} ${styles.info}`}>
        <NavSectionIntro
          title={"Información"}
          backgroundImageRule={backgroundImageRule}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <div className={`${styles.heading} ${styles.headingWide}`}>
            <FadeIn
              delay={500}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>Holdich 272</span>
            </FadeIn>

            <span className={styles.bar}>&nbsp;|&nbsp;</span>

            <br className={styles.space} />
            <FadeIn
              delay={750}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span> Bahía Blanca </span>
            </FadeIn>
            <br className={styles.space} />
            <span className={styles.bar}>&nbsp;|&nbsp;</span>
            <FadeIn
              delay={1000}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>Argentina</span>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <FadeIn delay={1250} transitionDuration={1000}>
          <p className={styles.content}>
            Envíenos un mail con su consulta o inquietud y le responderemos a la
            brevedad optiment@optiment.com.ar
          </p>
        </FadeIn>
      </div>
    </>
  );
};

export default Informacion;
