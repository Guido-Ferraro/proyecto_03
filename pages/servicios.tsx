import NavSectionIntro from "../components/NavSectionIntro";
import ServicesGrid from "../components/ServicesGrid";
import styles from "../styles/Servicios.module.css";
const Servicios = (): JSX.Element => {
  return (
    <>
      <NavSectionIntro title={"Servicios"} />
      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <div className={styles.heading}>
            Nuestra empresa se dedica al desarrollo de modelos matemáticos de
            simulación, optimización y control de procesos dinámicos y en estado
            estacionario, determinísticos y bajo incertidumbre.
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.about}>
        <p className={styles.content}>
          El alcance de nuestros servicios está en el marco de los balances de
          masa y energía, reconciliación de datos, estimación de parámetros,
          control estadístico de procesos, programación de la producción,
          planeamiento operativo, táctico y estratégico, y reducción de costos
          energéticos.
          <p></p>
          <br />
          Estamos al servicio de nuestros clientes, y es nuestro rol brindar
          soluciones para maximizar los beneficios, rendimientos productivos y
          la rentabilidad de su empresa.
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
