import Service from "./Service";
import styles from "../styles/ServicesGrid.module.css";
const ServicesGrid = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>En que nos destacamos</div>
          <h2 className={styles.heading}>Nuestros Servicios</h2>
        </div>
      </div>
      <div className={styles.grid}>
        <Service
          title="Support"
          content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
        />
        <Service
          title="Strategy"
          content="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"
        />
        <Service
          title="Management"
          content="Blind texts it is an almost unorthographic life One day however a small line of blind text by the name"
        />
        <Service
          title="Training"
          content="Blind texts it is an almost unorthographic life One day however a small line of blind text by the name"
        />
        <Service
          title="Consulting"
          content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
        />
        <Service
          title="Events"
          content="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"
        />
      </div>
    </section>
  );
};

export default ServicesGrid;
