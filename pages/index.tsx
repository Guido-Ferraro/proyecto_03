import Splash from "../components/Splash";
import LandingContent from "../components/LandingContent";
import CallToAction from "../components/CallToAction";
import styles from "../styles/Home.module.css";

export default function Home() {
  {
    /*<div className={styles.container}>
		Optimizar... significa buscar la mejor manera de realizar una actividad.
		<br />
		En Optiment estamos preparados para encontrar, implementar y controlar
		aquellos procedimientos que ayudarán a su empresa a optimizar sus
		procesos, maximizando beneficios y resultados.
</div>*/
  }
  return (
    <div className={styles.homeContent}>
      <div className={styles.landingContent}>
        <Splash />
        <LandingContent />
      </div>
      <CallToAction />
    </div>
  );
}
