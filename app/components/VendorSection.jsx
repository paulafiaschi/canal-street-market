import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";

export default function VendorSection() {
  return (
    <section className={styles.vendor}>
      <div>
        <h3>Interested in becoming a vendor?</h3>
        <Link href="mailto:vendors@ikigai.com" className={styles.primaryButton}>
          Click here
        </Link>
      </div>
    </section>
  );
}
