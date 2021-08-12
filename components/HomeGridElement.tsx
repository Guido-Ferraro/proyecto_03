import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomeGridElement.module.css";

interface HomeGridElementType {
  label: string | undefined;
  title: string | undefined;
  paragraph: string | undefined;
  src: any;
  orientation: string | undefined;
  link: string;
  text?: string | undefined;
  image?: string | undefined;
  alt?: string | undefined;
}

const HomeGridElement = (props: HomeGridElementType): JSX.Element => {
  const { label, title, paragraph, src, orientation, text, image, alt, link } =
    props;
  return (
    <div className={orientation}>
      <div className={text}>
        <div className={styles.textWrapper}>
          <div className={styles.label}>{label}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
        <Link href={`/${link}`} passHref>
          <span className={styles.Link}>
            <div className={styles.LinkDiv}>Más</div>
          </span>
        </Link>
      </div>
      <Image src={src} alt={alt} className={image} />
    </div>
  );
};

export default HomeGridElement;
