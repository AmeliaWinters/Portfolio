import { ComponentType, SVGProps } from "react";
import P from "../Text/P";

interface SkillChipProps {
  text: string;
  Icon?: JSX.Element;
}

const chipStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#fe6b86",
  opacity: "0.9",
  color: "white",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  margin: "0 0.5rem 0.5rem 0",
  fontSize: "16px",
  gap: "1rem",
};

const SkillChip: React.FC<SkillChipProps> = ({ text, Icon }) => {
  return (
    <div style={chipStyle}>
      {Icon}
      <P style={{ fontWeight: 600 }}>{text}</P>
    </div>
  );
};

export default SkillChip;
