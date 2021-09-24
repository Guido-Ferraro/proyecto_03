import NavSectionIntro from "../components/NavSectionIntro";
import styles from "../styles/Empresa.module.css";
import FadeIn from "./../components/FadeIn";

const Empresa = (): JSX.Element => {
  const backgroundImageRule =
    "url('https://911bplaw.com/wp-content/uploads/2018/09/Electrocution-Page-New-Image.jpeg')";
  return (
    <>
      <NavSectionIntro
        title={"Nosotros"}
        backgroundImageRule={backgroundImageRule}
      />
      <div className={styles.contentContainer}>
        <div className={styles.mottoWrap}>
          <FadeIn delay={500} transitionDuration={1000}>
            <div className={styles.heading}>
              Somos una empresa que brinda soluciones avanzadas en simulación,
              optimización y control de procesos.
            </div>
          </FadeIn>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.about}>
        <p className={styles.content}>
          <FadeIn delay={125} transitionDuration={1000}>
            <p>
              Nuestra misión es aportar respuestas tecnológicas desde el campo
              de la ingeniería de sistemas de procesos, para maximizar la
              rentabilidad en las plantas industriales.
            </p>
            <p></p>
            <br />
            <p>
              Nuestra visión se traduce en crecer junto a la industria,
              brindando herramientas para la toma de decisión, situación que hoy
              día se torna imprescindible, dado el continuo cambio en las
              condiciones de mercado en las que se desenvuelven las empresas.
            </p>
            <p></p>
            <br />
            <p>
              Hoy es fundamental reducir la variabilidad de los procesos ante el
              medio desafiante, con condiciones económicas y financieras
              sumamente fluctuantes.
            </p>
            <p></p>
            <br />
            <p>
              Es menester contar con un proceso productivo optimizado a los
              fines de mantener estándares competitivos.
            </p>
          </FadeIn>
        </p>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Empresa;
