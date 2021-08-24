import styles from "../styles/NavButton.module.css";
import Link from "next/link";
import FadeIn from "./FadeIn";

type NavProps = {
  content: string;
  id: string;
  index: number;
};

const NavButton = ({ content, id, index }: NavProps): JSX.Element => {
  return (
    <Link href={`/${id}`} passHref>
      <FadeIn delay={250 * index} transitionDuration={1000}>
        <span className={styles.Link}>{content}</span>
      </FadeIn>
    </Link>
  );
};

export default NavButton;
