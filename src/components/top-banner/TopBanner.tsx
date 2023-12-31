//import styles
import styles from "./styles.module.css";

type Props = {};

const TopBanner = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>free shipping in us for orders over $100</p>
    </div>
  );
};

export default TopBanner;
