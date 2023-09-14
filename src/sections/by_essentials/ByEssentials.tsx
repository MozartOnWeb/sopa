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
          color_1=""
          color_2=""
          color_3=""
          price=""
          product_name=""
        />
        <ProductCard
          color_1=""
          color_2=""
          color_3=""
          price=""
          product_name=""
        />
        <ProductCard
          color_1=""
          color_2=""
          color_3=""
          price=""
          product_name=""
        />
        <ProductCard
          color_1=""
          color_2=""
          color_3=""
          price=""
          product_name=""
        />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ByEssentials;
