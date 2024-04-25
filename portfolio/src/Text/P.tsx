import { CSSProperties } from "react";
import styles from "./styles.module.css";

interface IProps {
  children: string;
  style?: CSSProperties;
}

const P = ({ children, style }: IProps) => {
  return (
    <div style={style} className={styles.text}>
      {children}
    </div>
  );
};

export default P;
