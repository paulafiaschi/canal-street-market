import Image from "next/image";
import styles from "../page.module.scss";

export default function EventsSection() {
  return (
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
  );
}
