import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import MarketsSection from "./components/MarketsSection";
import EventsSection from "./components/EventsSection";
import MapsSection from "./components/MapsSection";
import VendorSection from "./components/VendorSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <MarketsSection />
        <EventsSection />
        <MapsSection />
        <VendorSection />
      </main>
      <Footer />
    </>
  );
}
