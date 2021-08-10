import styles from "../styles/ContactButton.module.css";

const ContactButton = (): JSX.Element => {
  return (
    <a
      href="mailto:mail@business.com?subject=You've%20got%20mail!"
      className={styles.a}
    >
      <div className={styles.contactButton}>Contacto</div>
    </a>
  );
};

export default ContactButton;
