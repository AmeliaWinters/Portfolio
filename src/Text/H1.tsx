import { CSSProperties } from "react";
import sharedStyles from "../sharedStyles.module.css";

interface IProps {
  children: JSX.Element | string;
  className?: string;
  style?: CSSProperties;
  underline?: boolean;
}

const baseStyle: CSSProperties = {
  fontFamily: '"Roboto mono", sans-serif',
};

const H1 = ({ children, className, style, underline }: IProps) => {
  return (
    <h1 style={{ ...baseStyle, ...style }} className={className}>
      {underline ? (
        <span className={sharedStyles.pinkHighLightUnderline}>{children}</span>
      ) : (
        children
      )}
    </h1>
  );
};

export default H1;
