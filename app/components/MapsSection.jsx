import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";

export default function MapsSection() {
  return (
    <section>
      <div className={`${styles.twoColumns} ${styles.maps}`}>
        <div className={styles.gridItem}>
          <h2>
            <Link href="#">265 Canal St, New York</Link>
          </h2>
        </div>
        <div className={styles.gridItem}>
          <Image
            src="/sign3.jpg"
            alt="Pau Fiaschi profile picture"
            width={450}
            height={450}
            priority
          />
        </div>
      </div>
    </section>
  );
}
