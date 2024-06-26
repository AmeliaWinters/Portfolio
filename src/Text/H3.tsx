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
};

const H3 = ({ children, className, style }: IProps) => {
  return (
    <h3 style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </h3>
  );
};

export default H3;
