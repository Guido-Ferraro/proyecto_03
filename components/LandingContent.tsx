import Motto from "./Motto";
import HomeGridElement from "./HomeGridElement";
import styles from "../styles/LandingContent.module.css";
import home_about from "../public/home_about.svg";
import home_team from "../public/home_team.svg";

const LandingContent = (): JSX.Element => {
  return (
    <section className={styles.landingContentContainer}>
      <Motto />
      <div className={styles.landingContentGrid}>
        <HomeGridElement
          label={`About`}
          title={`Who we are`}
          paragraph={`Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.

					`}
          link="empresa"
          src={home_about}
          orientation={styles.containerRight}
          text={styles.textLeft}
          image={styles.imageRight}
          alt={`Who we are`}
        />
        <HomeGridElement
          label={`Team`}
          title={`What we do`}
          paragraph={`Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.

					`}
          src={home_team}
          link="experiencia"
          orientation={styles.containerLeft}
          alt={`What we do`}
        />
      </div>
    </section>
  );
};

export default LandingContent;
