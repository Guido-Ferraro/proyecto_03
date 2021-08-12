import Splash from "../components/Splash";
import LandingContent from "../components/LandingContent";
import CallToAction from "../components/CallToAction";
import styles from "../styles/Home.module.css";

export default function Home() {
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
