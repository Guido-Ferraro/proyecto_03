import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomeGridElement.module.css";

interface HomeGridElementType {
  label: string | undefined;
  title: string | undefined;
  paragraph: string | undefined;
  src: any;
  alt?: string | undefined;
}

const HomeGridElement = (props: HomeGridElementType): JSX.Element => {
  const { label, title, paragraph, src, alt } = props;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <div className={styles.label}>{label}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
        <Link href={`/empresa`} passHref>
          <span className={styles.Link}>
            <div className={styles.LinkDiv}>Más</div>
          </span>
        </Link>
      </div>
      <Image src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default HomeGridElement;
