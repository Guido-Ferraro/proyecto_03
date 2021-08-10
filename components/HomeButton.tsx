import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import styles from "../styles/HomeButton.module.css";

const HomeButton = (): JSX.Element => {
  return (
    <Link href="/" passHref>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" className={styles.logoImage} />
      </div>
    </Link>
  );
};

export default HomeButton;
