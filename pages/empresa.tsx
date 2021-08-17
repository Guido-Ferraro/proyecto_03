import NavSectionIntro from "../components/NavSectionIntro";

const Empresa = (): JSX.Element => {
  return (
    <div>
      <NavSectionIntro title={`Nosotros`} />
      La Empresa
      <br />
      Somos una empresa que brinda soluciones avanzadas en simulación,
      optimización y control de procesos.
      <br />
      Nuestra misión es aportar respuestas tecnológicas desde el campo de la
      ingeniería de sistemas de procesos, para maximizar la rentabilidad en las
      plantas industriales.
      <br />
      Nuestra visión se traduce en crecer junto a la industria, brindando
      herramientas para la toma de decisión, situación que hoy día se torna
      imprescindible, dado el continuo cambio en las condiciones de mercado en
      las que se desenvuelven las empresas.
      <br /> Hoy es fundamental reducir la variabilidad de los procesos ante el
      medio desafiante, con condiciones económicas y financieras sumamente
      fluctuantes.
      <br /> Es menester contar con un proceso productivo optimizado a los fines
      de mantener estándares competitivos.
    </div>
  );
};

export default Empresa;
