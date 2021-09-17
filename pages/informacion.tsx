import NavSectionIntro from "../components/NavSectionIntro";
import styles from "../styles/Servicios.module.css";
import FadeIn from "./../components/FadeIn";

const Informacion = (): JSX.Element => {
  return (
    <>
      <NavSectionIntro title={"Información"} />

      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <div className={`${styles.heading} ${styles.headingWide} `}>
            <FadeIn
              delay={500}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>Holdich 272 &nbsp;</span>
            </FadeIn>
            |
            <FadeIn
              delay={750}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>&nbsp; Bahía Blanca &nbsp;</span>
            </FadeIn>
            |
            <FadeIn
              delay={1000}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>&nbsp; Argentina</span>
            </FadeIn>
          </div>

          <div className={styles.responsiveHeading}>
            <FadeIn
              delay={500}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>&nbsp; Holdich 272 &nbsp;</span>
            </FadeIn>
            <FadeIn
              delay={750}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>&nbsp; Bahía Blanca &nbsp;</span>
            </FadeIn>
            <FadeIn
              delay={1000}
              transitionDuration={1000}
              display={`inline-block`}
            >
              <span>&nbsp; Argentina &nbsp;</span>
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
