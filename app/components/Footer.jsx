import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="mailto:info@ikigai.com">
        <AiOutlineMail />
        info@ikigai.com
      </Link>
      <p>Site by PauFiaschi&copy; - 2023</p>
    </footer>
  );
}
