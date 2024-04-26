import { CSSProperties } from "react";

interface IProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}

const baseStyle: CSSProperties = {
  fontFamily: '"coolvetica", sans-serif',
};

const P = ({ children, className, style }: IProps) => {
  return (
    <div style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </div>
  );
};

export default P;
