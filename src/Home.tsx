import styles from "./Home.module.css";
import personImage from "./Assets/Images/AmeliaHi.png";
import ScrollingText from "./ScrollingText";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <ScrollingText text="Amelia Winters " />
      <img src={personImage} alt="Amelia" className={styles.centralImage} />
      <div className={styles.pageOverlay} />
    </div>
  );
};

export default Home;
