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
  display: "inline",
  marginTop: 0,
  marginBottom: 0,
};

const P = ({ children, className, style }: IProps) => {
  return (
    <p style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </p>
  );
};

export default P;
