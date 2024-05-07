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
  fontFamily: '"Roboto mono", sans-serif',
};

const H2 = ({ children, className, style }: IProps) => {
  return (
    <h2 style={{ ...baseStyle, ...style }} className={className}>
      {children}
    </h2>
  );
};

export default H2;
