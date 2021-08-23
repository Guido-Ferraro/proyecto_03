import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Companies.module.css";
import FadeIn from "./FadeIn";

const Companies = (): JSX.Element => {
  function importAll(r: any) {
    return r.keys().map(r);
  }
  const [isIntersected, setIsIntersected] = useState(false);
  const intersect = setIsIntersected;
  const fade = (): void => {};

  useEffect(() => {
    const faders: HTMLCollectionOf<Element> =
      document.getElementsByClassName("fader");
    const options: {
      threshold: number;
    } = {
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        console.log(isIntersected);
        intersect(true);
        console.log(isIntersected);
        observer.unobserve(entry.target);
      });
    }, options);
    Array.from(faders).forEach((fader) => observer.observe(fader));
  }, []);

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
        <FadeIn
          delay={600 + 200 * index}
          transitionDuration={1000}
          key={src}
          visible={isIntersected}
        >
          <Image
            src={src}
            alt=""
            width={ratio * 75}
            height={75}
            className={`${styles.logo} fader`}
          />
        </FadeIn>
      );
    }
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <FadeIn delay={200} transitionDuration={1000} visible={isIntersected}>
            <div className={`${styles.label} fader`}>Acerca de nostros</div>
          </FadeIn>
          <FadeIn delay={400} transitionDuration={1000} visible={isIntersected}>
            <h2 className={`${styles.title} fader`}>
              Compañías con las que trabajamos
            </h2>
          </FadeIn>
        </div>
        <div className={styles.slider}>{imageList}</div>
      </div>
    </section>
  );
};

export default Companies;
