import { Inconsolata } from "next/font/google";
import Styles from "./page.module.scss";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Ikigai Street Market",
  description:
    "Discover Ikigai Street Market: Your go-to retail destination, food haven, and vibrant community hub all rolled into one. Join us year-round at 265 Canal Street for an unparalleled experience. Immerse yourself in a thoughtfully curated marketplace that celebrates small businesses, offering a diverse array of products and flavors. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Styles.html}>
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
