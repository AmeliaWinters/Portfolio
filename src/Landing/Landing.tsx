import styles from "./Landing.module.css";
import personImage from "../Assets/Images/AmeliaHi.png";
import ScrollingText from "./ScrollingText";

const Landing = () => {
  return (
    <div className={styles.pageContainer}>
      <ScrollingText text="Amelia Winters " />
      <img src={personImage} alt="Amelia" className={styles.centralImage} />

    </div>
  );
};

export default Landing;
