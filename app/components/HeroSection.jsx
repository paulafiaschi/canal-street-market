import Image from "next/image";
import styles from "../page.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1>
        Ikigai Street Market is a carefully curated retail market, food hall &
        community space open year-round at 265 Canal Street.&nbsp;
        <a>Support Small Business</a> this weekend!
      </h1>
      <div className={styles.imageContainer}>
        <Image
          src="/market-hero.jpg"
          alt="Pau Fiaschi profile picture"
          // width={800}
          // height={451}
          priority
          layout="fill"
          className={styles.image}
        />
      </div>
    </section>
  );
}
