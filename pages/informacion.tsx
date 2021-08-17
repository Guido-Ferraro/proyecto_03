import NavSectionIntro from "../components/NavSectionIntro";
import styles from "../styles/Servicios.module.css";

const Informacion = (): JSX.Element => {
  return (
    <>
      <NavSectionIntro title={"Información"} />

      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <div className={styles.heading}>
            Holdich 272 | Bahía Blanca | Argentina
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.content}>
          Envíenos un mail con su consulta o inquietud y le responderemos a la
          brevedad optiment@optiment.com.ar
        </p>
      </div>
    </>
  );
};

export default Informacion;
