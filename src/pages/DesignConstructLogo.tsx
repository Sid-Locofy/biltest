import { FunctionComponent } from "react";
import styles from "./DesignConstructLogo.module.css";

const DesignConstructLogo: FunctionComponent = () => {
  return (
    <div className={styles.designConstructLogoDiv}>
      <img className={styles.constructIcon} alt="" src="../construct.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.designIcon} alt="" src="../design.svg" />
      <img className={styles.cIcon} alt="" src="../c.svg" />
      <img className={styles.groupIcon} alt="" src="../group-3.svg" />
    </div>
  );
};

export default DesignConstructLogo;
