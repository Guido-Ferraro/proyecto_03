import Motto from "./Motto";
import HomeAbout from "./HomeAbout";
import HomeTeam from "./HomeTeam";
import styles from "../styles/LandingContent.module.css";

const LandingContent = (): JSX.Element => {
  return (
    <section className={styles.LandingContent}>
      <Motto />
      <HomeAbout />
      <HomeTeam />
    </section>
  );
};

export default LandingContent;
