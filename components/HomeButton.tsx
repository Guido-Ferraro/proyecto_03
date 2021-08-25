import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import styles from "../styles/HomeButton.module.css";
import FadeIn from "./FadeIn";

const HomeButton = (): JSX.Element => {
  return (
    <FadeIn transitionDuration={1000}>
      <Link href="/" passHref>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Logo" className={styles.logoImage} />
        </div>
      </Link>
    </FadeIn>
  );
};

export default HomeButton;
