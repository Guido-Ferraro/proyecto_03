import Image from "next/image";
import service_icon from "../public/service_icon.svg";
import styles from "../styles/Service.module.css";
interface ServiceProps {
  title: string;
  content: string;
}

const Service = (props: ServiceProps): JSX.Element => {
  return (
    <div className={styles.element}>
      <Image
        src={service_icon}
        alt="icon"
        className={styles.image}
        width={50}
      />
      <div className={styles.heading}>{props.title}</div>
      <div className={styles.paragraph}>{props.content}</div>
    </div>
  );
};

export default Service;
