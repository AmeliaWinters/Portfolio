import styles from "./Home.module.css";
import personImage from "./Images/Amelia Poly3.png"; // Ensure this path is correct
import ScrollingText from "./ScrollingText";

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.gridBackground} />
      <ScrollingText text="Amelia Winters " />
      <img src={personImage} alt="Amelia" className={styles.centralImage} />
      <div className={styles.pageOverlay} />
    </div>
  );
};

export default HomePage;
