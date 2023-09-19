import Image from "next/image";

type Props = {};

//import styles
import styles from "./styles.module.css";

//import components
import EssentialsNav from "@/components/essentials_navbar/EssentialsNav";
import ProductCard from "@/components/product_card/ProductCard";

const ByEssentials = (props: Props) => {
  return (
    <div className={styles.main}>
      <h4 className={styles.title}>Shop by Essentials</h4>
      <EssentialsNav />

      <div className={styles.product_container}>
        <ProductCard
          color_1="#219ebc"
          color_2="#ffb703"
          color_3="#fb8500"
          price="120.00"
          product_name="Shirts New Era"
        />
        <ProductCard
          color_1="#0077b6"
          color_2="#588157"
          color_3="#e63946"
          price="120.00"
          product_name="Shirts New Era"
        />
        <ProductCard
          color_1="#ffafcc"
          color_2="#a2d2ff"
          color_3="#cdb4db"
          price="220.00"
          product_name="Shirts New Era"
        />
        <ProductCard
          color_1="#a3b18a"
          color_2="#588157"
          color_3="#d5bdaf"
          price="134.00"
          product_name="Shirts New Era"
        />
        <ProductCard
          color_1=""
          color_2=""
          color_3=""
          price=""
          product_name=""
        />
        <ProductCard />
      </div>
    </div>
  );
};

export default ByEssentials;
