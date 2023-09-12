import Image from "next/image";

//import styles
import styles from "./styles.module.css";

//import image
import image from "@/assets/images/description.jpg";

type Props = {
  image?: string;
  product_name?: string;
  color_1?: string;
  color_2?: string;
  color_3?: string;
  price?: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.image_container}>
        <Image src={props.image ? props.image : image} alt="image" />
      </div>

      <div className={styles.details}>
        <p className={styles.product_name}>
          {props.product_name ? props.product_name : "Shirts New Era"}
        </p>

        <div className={styles.colors}>
          <div
            style={{ backgroundColor: props.color_1 }}
            className={styles.color_1}
          ></div>
          <div
            style={{ backgroundColor: props.color_1 }}
            className={styles.color_2}
          ></div>
          <div
            style={{ backgroundColor: props.color_1 }}
            className={styles.color_3}
          ></div>
        </div>
      </div>

      <p className={styles.price}>$100.00</p>
    </div>
  );
};

export default ProductCard;
