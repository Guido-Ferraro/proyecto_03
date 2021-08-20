import Image from "next/image";
import styles from "../styles/Companies.module.css";
import FadeIn from "react-fade-in/lib/FadeIn";
const Companies = (): JSX.Element => {
  function importAll(r: any) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./../public/empresas/", false, /\.(png|jpe?g|svg|bmp)$/)
  );

  const imageList = images.map(
    (
      element: { default: { src: string; width: number; height: number } },
      index: number
    ): any => {
      console.log(element);
      const { src, width, height } = element.default;
      const ratio: number = width / height;
      return (
        <FadeIn delay={600 + 200 * index} transitionDuration={1000} key={src}>
          <Image
            src={src}
            alt=""
            width={ratio * 75}
            height={75}
            className={styles.logo}
          />
        </FadeIn>
      );
    }
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <FadeIn delay={200} transitionDuration={1000}>
            <div className={styles.label}>Acerca de nostros</div>
          </FadeIn>
          <FadeIn delay={400} transitionDuration={1000}>
            <h2 className={styles.title}>Compañías con las que trabajamos</h2>
          </FadeIn>
        </div>
        <div className={styles.slider}>{imageList}</div>
      </div>
    </section>
  );
};

export default Companies;
