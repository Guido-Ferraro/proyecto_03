import NavSectionIntro from "../components/NavSectionIntro";

const Experiencia = (): JSX.Element => {
  return (
    <div className="container">
      <NavSectionIntro title={"Experiencia"} />
      Nuestra Experiencia
      <br />
      Nuestras fortalezas se basan en la experiencia en la industria
      petroquímica, del gas y del petróleo, como así también en la realización
      de modelos de simulación, optimización y control de procesos, en empresas
      de Argentina, Brasil y Venezuela.
      <br />
      Hemos consolidado una vasta experiencia en el desarrollo de filosofías
      para la racionalización de puntos de alarmas en sistemas de control
      distribuidos.
      <br />
      La implementación de estas filosofías simplifican notoriamente la tarea de
      toma de decisión de los operadores de los paneles de control, ante
      situaciones de paradas imprevistas de planta, cortes en el suministro de
      energía eléctrica, o salidas de equipos de operación.
    </div>
  );
};

export default Experiencia;
