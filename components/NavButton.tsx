import styles from "../styles/NavButton.module.css";
import Link from "next/link";

type NavProps = {
  content: string;
  id: string;
};

const NavButton = ({ content, id }: NavProps): JSX.Element => {
  return (
    <Link href={`/${id}`} passHref>
      <span className={styles.Link}>{content}</span>
    </Link>
  );
};

export default NavButton;
