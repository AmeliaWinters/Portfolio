import styles from "./Navigation.module.css";

interface IProps {
  onClick: () => void;
}

export const HamburgerButton = ({ onClick }: IProps) => {
  return (
    <button className={styles.menuButton} onClick={onClick}>
      &#9776; {/* Hamburger icon */}
    </button>
  );
};
