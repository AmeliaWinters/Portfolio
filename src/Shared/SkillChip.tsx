import P from "../Text/P";
import styles from "./SkillChip.module.css";

interface SkillChipProps {
  text: string;
  Icon?: JSX.Element;
}

const SkillChip: React.FC<SkillChipProps> = ({ text, Icon }) => {
  return (
    <div className={styles.skillChip}>
      {Icon}
      <P style={{ fontWeight: 600 }}>{text}</P>
    </div>
  );
};

export default SkillChip;
