import { FunctionComponent } from "react";
import styles from "./Desktop11.module.css";

const Desktop11: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.headerLinksDiv}>
        <button className={styles.homeButton}>Home</button>
        <div className={styles.aboutDCDiv}>About DC</div>
        <button className={styles.ourServicesButton}>Our Services</button>
        <button className={styles.ourServicesButton}>Contact Us</button>
      </div>
      <div className={styles.frameDiv}>
        <button className={styles.getAQuote}>Get a quote</button>
      </div>
    </div>
  );
};

export default Desktop11;
