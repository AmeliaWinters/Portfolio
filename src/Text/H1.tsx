import { CSSProperties } from "react";
import sharedStyles from "../sharedStyles.module.css";

interface IProps {
  children: JSX.Element | string;
  className?: string;
  style?: CSSProperties;
  underlineColour?:
    | "pink"
    | "blue"
    | "green"
    | "yellow"
    | "purple"
    | "orange"
    | "red";
}

const baseStyle: CSSProperties = {
  fontFamily: '"Roboto mono", sans-serif',
};

const H1 = ({ children, className, style, underlineColour }: IProps) => {
  return (
    <h1 style={{ ...baseStyle, ...style }} className={className}>
      {underlineColour ? (
        <span className={sharedStyles[`${underlineColour}Underline`]}>
          {children}
        </span>
      ) : (
        children
      )}
    </h1>
  );
};

export default H1;
