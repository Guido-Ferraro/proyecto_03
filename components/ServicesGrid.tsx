import Service from "./Service";
import styles from "../styles/ServicesGrid.module.css";
import FadeIn from "./FadeIn";

const ServicesGrid = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn delay={250} transitionDuration={1000}>
            <div className={styles.label}>En que nos destacamos</div>
            <h2 className={styles.heading}>Nuestros Servicios</h2>
          </FadeIn>
        </div>
      </div>
      <div className={styles.grid}>
        <FadeIn delay={250} transitionDuration={1000}>
          <Service
            title="Support"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
        </FadeIn>

        <FadeIn delay={250 * 2} transitionDuration={1000}>
          <Service
            title="Strategy"
            content="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"
          />
        </FadeIn>

        <FadeIn delay={250 * 3} transitionDuration={1000}>
          <Service
            title="Management"
            content="Blind texts it is an almost unorthographic life One day however a small line of blind text by the name"
          />
        </FadeIn>

        <FadeIn delay={250} transitionDuration={1000}>
          <Service
            title="Training"
            content="Blind texts it is an almost unorthographic life One day however a small line of blind text by the name"
          />
        </FadeIn>

        <FadeIn delay={250 * 2} transitionDuration={1000}>
          <Service
            title="Consulting"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
        </FadeIn>

        <FadeIn delay={250 * 3} transitionDuration={1000}>
          <Service
            title="Events"
            content="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesGrid;
