import { CSSProperties } from "react";

interface IProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}

const baseStyle: CSSProperties = {
  fontFamily: '"coolvetica", sans-serif',
};

const H3 = ({ children, className, style }: IProps) => {
  return (
    <h3 style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </h3>
  );
};

export default H3;
