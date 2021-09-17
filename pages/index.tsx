import Splash from "../components/Splash";
import LandingContent from "../components/LandingContent";
import styles from "../styles/Home.module.css";
import Companies from "../components/Companies";

export default function Home(): JSX.Element {
  return (
    <div className={styles.homeContent}>
      <Splash />
      <LandingContent />
      <Companies />
    </div>
  );
}
