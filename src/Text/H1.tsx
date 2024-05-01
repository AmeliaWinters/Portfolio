import { CSSProperties } from "react";

interface IProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}

const baseStyle: CSSProperties = {
  fontFamily: '"coolvetica", sans-serif',
};

const H1 = ({ children, className, style }: IProps) => {
  return (
    <h1 style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </h1>
  );
};

export default H1;
