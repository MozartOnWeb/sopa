import Image from "next/image";

//import styles
import styles from "./styles.module.css";

//import images
import First from "@/assets/images/description.jpg";

type Props = {};

const Description = (props: Props) => {
  return (
    <div className={styles.main}>
      <blockquote>
        SOPA makes clothes
        <span className={styles.image_container}>
          <Image src={First} alt="first" />
        </span>
        to elevate everyday life through lighthearted escapism. While style vary
        by season,{" "}
        <span className={styles.all_collections}>all collections</span> are
        guided by the ineffable sense of freedom that comes with travel.
      </blockquote>
    </div>
  );
};

export default Description;
