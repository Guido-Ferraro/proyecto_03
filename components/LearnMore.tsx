import Link from "next/link";
import styles from "../styles/LearnMore.module.css";

const LearnMore = (): JSX.Element => {
  return (
    <Link href={`/servicios`} passHref>
      <div className={styles.learnMoreWrapper}>
        <div className={styles.learnMoreDiv}>Más</div>
      </div>
    </Link>
  );
};

export default LearnMore;
