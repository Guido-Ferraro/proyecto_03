import NavSectionIntro from "../components/NavSectionIntro";
import styles from "../styles/Empresa.module.css";

const Empresa = (): JSX.Element => {
  return (
    <>
      <NavSectionIntro title={"Nosotros"} />
      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <div className={styles.heading}>
            Somos una empresa que brinda soluciones avanzadas en simulación,
            optimización y control de procesos.
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.about}>
        <p className={styles.content}>
          Nuestra misión es aportar respuestas tecnológicas desde el campo de la
          ingeniería de sistemas de procesos, para maximizar la rentabilidad en
          las plantas industriales.
          <p></p>
          <br />
          Nuestra visión se traduce en crecer junto a la industria, brindando
          herramientas para la toma de decisión, situación que hoy día se torna
          imprescindible, dado el continuo cambio en las condiciones de mercado
          en las que se desenvuelven las empresas.
          <p></p>
          <br />
          Hoy es fundamental reducir la variabilidad de los procesos ante el
          medio desafiante, con condiciones económicas y financieras sumamente
          fluctuantes.
          <p></p>
          <br />
          Es menester contar con un proceso productivo optimizado a los fines de
          mantener estándares competitivos.
        </p>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Empresa;
