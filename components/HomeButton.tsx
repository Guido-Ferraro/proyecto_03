import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import styles from "../styles/HomeButton.module.css";
import FadeIn from "./FadeIn";

const HomeButton = (): JSX.Element => {
  return (
    <Link href="/" passHref>
      <FadeIn transitionDuration={1000}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Logo" className={styles.logoImage} />
        </div>
      </FadeIn>
    </Link>
  );
};

export default HomeButton;
