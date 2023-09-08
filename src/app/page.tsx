import styles from "./page.module.css";

//import components
import Hero from "@/sections/hero/Hero";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
    </main>
  );
}
