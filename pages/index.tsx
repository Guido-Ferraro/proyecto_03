import Splash from "../components/Splash";
import LandingContent from "../components/LandingContent";
import styles from "../styles/Home.module.css";
import Companies from "../components/Companies";
export default function Home() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.landingContent}>
        <Splash />
        <LandingContent />
      </div>
      <Companies />
    </div>
  );
}
