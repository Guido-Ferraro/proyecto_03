import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomeGridElement.module.css";
import FadeIn from "./FadeIn";

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
          <FadeIn delay={250} transitionDuration={1000}>
            <div className={styles.label}>{label}</div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.paragraph}>{paragraph}</p>
          </FadeIn>
        </div>
        <Link href={`/${link}`} passHref>
          <FadeIn delay={250} transitionDuration={1000}>
            <span className={styles.Link}>
              <div className={styles.LinkDiv}>Más</div>
            </span>
          </FadeIn>
        </Link>
      </div>
      <FadeIn delay={250} transitionDuration={1000}>
        <Image src={src} alt={alt} className={image} />
      </FadeIn>
    </div>
  );
};

export default HomeGridElement;
