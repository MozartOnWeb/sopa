//import styles
import styles from "./styles.module.css";

import Image from "next/image";

//import images
import First from "@/assets/images/hero-first.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        <Image src={First} alt="first" />
      </div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
      <div className={styles.fourth}></div>
    </section>
  );
};

export default Hero;
