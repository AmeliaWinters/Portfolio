import { CSSProperties } from "react";

interface IProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}

const baseStyle: CSSProperties = {
  fontFamily: '"coolvetica", sans-serif',
  color: "#fe6b86",
  fontSize: "1.1rem",
};

const PH = ({ children, className, style }: IProps) => {
  return (
    <p style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </p>
  );
};

export default PH;