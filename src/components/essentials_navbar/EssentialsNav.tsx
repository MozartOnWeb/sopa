"use client";

import { useState } from "react";
import Image from "next/image";

//import styles
import styles from "./styles.module.css";

type Props = {};

const EssentialsNav = (props: Props) => {
  const [active, setActive] = useState("all");

  return (
    <div className={styles.main}>
      <button
        className={active === "all" ? styles.active : ""}
        onClick={() => setActive("all")}
      >
        all<span>72</span>
      </button>

      <button
        className={active === "winter collection" ? styles.active : ""}
        onClick={() => setActive("winter collection")}
      >
        winter collection<span>20</span>
      </button>

      <button
        className={active === "new arrivals" ? styles.active : ""}
        onClick={() => setActive("new arrivals")}
      >
        new arrivals<span>14</span>
      </button>

      <button
        className={active === "best sellers" ? styles.active : ""}
        onClick={() => setActive("best sellers")}
      >
        best sellers<span>20</span>
      </button>

      <button
        className={active === "flash sale" ? styles.active : ""}
        onClick={() => setActive("flash sale")}
      >
        flash sale<span>18</span>
      </button>
    </div>
  );
};

export default EssentialsNav;
