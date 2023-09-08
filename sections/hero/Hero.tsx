//import styles
import styles from "./styles.module.css";

import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.first}></div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
      <div className={styles.fourth}></div>
    </section>
  );
};

export default Hero;
