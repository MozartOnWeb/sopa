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
      <button>
        all<span>72</span>
      </button>
      <button>
        winter collection<span>20</span>
      </button>
      <button>
        new arrivals<span>14</span>
      </button>
      <button>
        best sellers<span>20</span>
      </button>
      <button>
        flash sale<span>18</span>
      </button>
    </div>
  );
};

export default EssentialsNav;
