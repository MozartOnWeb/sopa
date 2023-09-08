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

        <div className={styles.buttons}>
          <button className={styles.first_button}>
            Lear More
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f2f2f3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-big-down-dash"
              >
                <path d="M15 5H9" />
                <path d="M15 9v3h4l-7 7-7-7h4V9h6z" />
              </svg>
            </div>
          </button>
          <button className={styles.second_button}>
            Contact us
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#141414"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.second}>
        <h3>
          Real Designs <br />
          By real artists <br />
          For real people
        </h3>

        <p>
          We're challenging conventional retail, putting an end to <br />
          dead stock, unconventional waste and more funtastic.
        </p>
      </div>
      <div className={styles.third}></div>
      <div className={styles.fourth}></div>
    </section>
  );
};

export default Hero;
