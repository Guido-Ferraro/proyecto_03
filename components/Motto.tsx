import styles from "../styles/Motto.module.css";

const Motto = (): JSX.Element => {
  return (
    <div className={styles.mottoContainer}>
      <div className={styles.mottoLabel}>WHAT WE BELIEVE IN</div>
      <div className={styles.mottoBigText}>
        Grow your business, establish your brand, and put your customers first.
      </div>
      <br />
      <div className={styles.mottoDivider}></div>
    </div>
  );
};

export default Motto;
