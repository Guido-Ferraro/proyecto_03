import styles from "../styles/ContactButton.module.css";
import FadeIn from "./FadeIn";

const ContactButton = (): JSX.Element => {
  return (
    <FadeIn delay={1500} transitionDuration={1000}>
      <a
        href="mailto:mail@business.com?subject=You've%20got%20mail!"
        className={styles.a}
      >
        <div className={styles.contactButton}>Contacto</div>
      </a>
    </FadeIn>
  );
};

export default ContactButton;
