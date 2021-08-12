import Image from "next/image";
import styles from "../styles/Companies.module.css";

const Companies = (): JSX.Element => {
  function importAll(r: any) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./../public/empresas/", false, /\.(png|jpe?g|svg|bmp)$/)
  );

  const imageList = images.map(
    (element: {
      default: { src: string; width: number; height: number };
    }): any => {
      console.log(element);
      const { src, width, height } = element.default;
      const ratio: number = width / height;
      return (
        <Image
          src={src}
          alt=""
          key={src}
          width={ratio * 75}
          height={75}
          className={styles.logo}
        />
      );
    }
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.label}>Acerca de nostros</div>
          <h2 className={styles.title}>Compañías con las que trabajamos</h2>
        </div>
        <div className={styles.slider}>{imageList}</div>
      </div>
    </section>
  );
};

export default Companies;
