import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <h1>
          Ikigai Street Market is a carefully curated retail market, food hall &
          community space open year-round at 265 Canal Street.&nbsp;
          <a>Support Small Business</a> this weekend!
        </h1>
        <Image
          src="/market-hero.jpg"
          alt="Pau Fiaschi profile picture"
          width={800}
          height={451}
          priority
        />
      </section>

      <section>
        <h2>A New Kind of Market</h2>
        <div className={styles.gridSection}>
          <div className={styles.gridItem}>
            <Image
              src="/sign1.jpg"
              alt="Pau Fiaschi profile picture"
              width={451}
              height={850}
              priority
            />
            <p>
              Merging retail, food, art, and culture, Canal Street Market
              highlights top retail and design concepts, restaurants, and
              up-and-coming players in the downtown New York City community.
            </p>
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/sign2.jpg"
              alt="Pau Fiaschi profile picture"
              width={451}
              height={850}
              priority
            />
            <p>Retail Market Hours: Fri– Sun: 11:00AM - 7:00PM</p>
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/sign3.jpg"
              alt="Pau Fiaschi profile picture"
              width={451}
              height={850}
              priority
            />
            <p>Food Hall Hours: Mon – Sun: 11:00AM - 8:00PM</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Market Events</h2>

        <div className={`${styles.gridSection} ${styles.events}`}>
          <div className={styles.gridItem}>
            <p>12/02</p>
            <p>Small Business Retail Pop Up Weekend!</p>
          </div>
          <div className={styles.gridItem}>
            <p>02/07</p>
            <p>
              New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
            </p>
          </div>
          <div className={styles.gridItem}>
            <p>12/11</p>
            <p>Hack City 12/11</p>
          </div>
        </div>
      </section>
    </main>
  );
}
