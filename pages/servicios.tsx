import NavSectionIntro from "../components/NavSectionIntro";
import ServicesGrid from "../components/ServicesGrid";
import styles from "../styles/Servicios.module.css";
import FadeIn from "../components/FadeIn";

const Servicios = (): JSX.Element => {
  return (
    <>
      <NavSectionIntro title={"Servicios"} />
      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <FadeIn delay={500} transitionDuration={1000}>
            <div className={styles.heading}>
              Nuestra empresa se dedica al desarrollo de modelos matemáticos de
              simulación, optimización y control de procesos dinámicos y en
              estado estacionario, determinísticos y bajo incertidumbre.
            </div>
          </FadeIn>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.about}>
        <p className={styles.content}>
          <FadeIn delay={250} transitionDuration={1000}>
            <p>
              El alcance de nuestros servicios está en el marco de los balances
              de masa y energía, reconciliación de datos, estimación de
              parámetros, control estadístico de procesos, programación de la
              producción, planeamiento operativo, táctico y estratégico, y
              reducción de costos energéticos.
              <p></p>
            </p>
          </FadeIn>
          <FadeIn delay={250} transitionDuration={1000}>
            <br />
            <p>
              Estamos al servicio de nuestros clientes, y es nuestro rol brindar
              soluciones para maximizar los beneficios, rendimientos productivos
              y la rentabilidad de su empresa.
            </p>
          </FadeIn>
        </p>
      </div>
      <div className="divider"></div>
      <div className={styles.divider}></div>
      <div className={styles.gridContainer}>
        <ServicesGrid />
      </div>
    </>
  );
};

export default Servicios;
