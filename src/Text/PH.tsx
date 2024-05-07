import { CSSProperties } from "react";

interface IProps {
  children:
    | JSX.Element
    | string
    | JSX.Element[]
    | string[]
    | number
    | number[]
    | null
    | undefined;
  className?: string;
  style?: CSSProperties;
}

const baseStyle: CSSProperties = {
  fontFamily: '"roboto mono", sans-serif',
  color: "#fe6b86",
  display: "inline",
};

const PH = ({ children, className, style }: IProps) => {
  return (
    <p style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </p>
  );
};

export default PH;
