import styles from "./page.module.css";

//import sections
import Hero from "@/sections/hero/Hero";
import Description from "@/sections/description/Description";
import ByEssentials from "@/sections/by_essentials/ByEssentials";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Description />
      <ByEssentials />
    </main>
  );
}
