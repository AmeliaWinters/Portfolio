import { useState, useEffect } from "react";
import styles from "./ScrollHint.module.css";

const ScrollHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return <></>;

  return (
    <div className={styles.scrollHint}>
      <div className={styles.scrollText}>Scroll down</div>
      <div className={styles.scrollArrow}>&#x2193;</div>
    </div>
  );
};

export default ScrollHint;
