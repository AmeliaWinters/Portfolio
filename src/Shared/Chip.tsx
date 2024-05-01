import styles from "./Chip.module.css";

const Chip = ({ text }: { text: string }) => {
  return <span className={styles.chip}>{text}</span>;
};

export default Chip;
