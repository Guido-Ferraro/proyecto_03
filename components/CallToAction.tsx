import Link from "next/link";
import styles from "../styles/CallToAction.module.css";
import FadeIn from "./FadeIn";
const CallToAction = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.wrap2}>
          <div className={styles.text}>
            <FadeIn delay={250} transitionDuration={1000}>
              <div className={styles.heading}>
                Grow your business
                <br />
              </div>
              <div className={styles.paragraph}>
                Today is the day to build the business of your dreams. Share
                your mission with the world — and blow your customers away.
                <br />
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={250} transitionDuration={1000}>
            <Link href={`/informacion`} passHref>
              <span className={styles.Link}>
                <div className={styles.LinkContent}>Start Now</div>
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default CallToAction;
