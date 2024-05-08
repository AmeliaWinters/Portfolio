import styles from "./Landing.module.css";
import AmeliaImage from "../Assets/Images/AmeliaHi.png";
import ScrollingText from "./ScrollingText";
import { useState } from "react";

const Landing = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <ScrollingText text="Amelia Winters " />

      <img
        onLoad={() => setIsImageVisible(true)}
        src={AmeliaImage}
        alt="Amelia"
        className={isImageVisible ? styles.centralImage : ""}
        style={{ opacity: isImageVisible ? 0 : 1 }}
      />
    </div>
  );
};

export default Landing;
