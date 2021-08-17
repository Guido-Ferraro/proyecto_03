import NavSectionIntro from "../components/NavSectionIntro";
import styles from "../styles/Servicios.module.css";
const Experiencia = (): JSX.Element => {
  return (
    <>
      <NavSectionIntro title={"Experiencia"} />

      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <div className={styles.heading}>
            Nuestras fortalezas se basan en la experiencia en la industria
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.about}>
        <p className={styles.content}>
          Tanto en petroquímica, del gas y del petróleo, como así también en la
          realización de modelos de simulación, optimización y control de
          procesos, en empresas de Argentina, Brasil y Venezuela.
          <p></p>
          <br />
          Hemos consolidado una vasta experiencia en el desarrollo de filosofías
          para la racionalización de puntos de alarmas en sistemas de control
          distribuidos.
          <p></p>
          <br />
          La implementación de estas filosofías simplifican notoriamente la
          tarea de toma de decisión de los operadores de los paneles de control,
          ante situaciones de paradas imprevistas de planta, cortes en el
          suministro de energía eléctrica, o salidas de equipos de operación.
        </p>
      </div>
    </>
  );
};

export default Experiencia;
