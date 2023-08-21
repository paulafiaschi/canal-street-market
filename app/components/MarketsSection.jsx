import Image from "next/image";
import styles from "../page.module.scss";

export default function MarketsSection() {
  return (
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
          <p>
            Retail Market Hours: <br></br>Fri– Sun: 11:00AM - 7:00PM
          </p>
        </div>
        <div className={styles.gridItem}>
          <Image
            src="/sign3.jpg"
            alt="Pau Fiaschi profile picture"
            width={451}
            height={850}
            priority
          />
          <p>
            Food Hall Hours:<br></br> Mon – Sun: 11:00AM - 8:00PM
          </p>
        </div>
      </div>
    </section>
  );
}
