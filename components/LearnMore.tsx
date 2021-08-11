import Link from "next/link";
import styles from "../styles/LearnMore.module.css";

const LearnMore = (): JSX.Element => {
  return (
    <Link href={`/empresa`} passHref>
      <div className={styles.learnMoreWrapper}>
        <div className={styles.learnMoreDiv}>Learn More</div>
      </div>
    </Link>
  );
};

export default LearnMore;
