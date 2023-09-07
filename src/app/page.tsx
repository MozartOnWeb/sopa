import styles from "./page.module.css";

//import components
import TopBanner from "@/components/top-banner/TopBanner";

export default function Home() {
  return (
    <main>
      <TopBanner />

      <div className={styles.main}></div>
    </main>
  );
}
