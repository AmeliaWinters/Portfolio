import styles from "./Greeting.module.css";

interface IProps {
  text: string;
}

const ScrollingText = ({ text }: IProps) => {
  const scrollingText = Array(100).fill(text).join(""); // Repeat the text to fill the container

  return (
    <div className={styles.scrollingTextContainer}>
      <div className={styles.scrollingText}>{scrollingText}</div>
    </div>
  );
};

export default ScrollingText;
