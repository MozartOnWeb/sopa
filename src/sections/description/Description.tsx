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
        by season,
        <span className={styles.svg_container}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 18C18 13.0294 14.9779 9 11.25 9C14.9779 9 18 4.97056 18 0C18 4.97056 21.0221 9 24.75 9C21.0221 9 18 13.0294 18 18Z"
              fill="#141414"
            />
            <path
              d="M18 18C18 22.9706 14.9779 27 11.25 27C14.9779 27 18 31.0294 18 36C18 31.0294 21.0221 27 24.75 27C21.0221 27 18 22.9706 18 18Z"
              fill="#141414"
            />
            <path
              d="M18 18C13.0294 18 9 21.0221 9 24.75C9 21.0221 4.97056 18 0 18C4.97056 18 9 14.9779 9 11.25C9 14.9779 13.0294 18 18 18Z"
              fill="#141414"
            />
            <path
              d="M18 18C22.9706 18 27 21.0221 27 24.75C27 21.0221 31.0294 18 36 18C31.0294 18 27 14.9779 27 11.25C27 14.9779 22.9706 18 18 18Z"
              fill="#141414"
            />
          </svg>
          all collections
        </span>
        are guided by the ineffable sense of freedom that comes with travel.
      </blockquote>
    </div>
  );
};

export default Description;
