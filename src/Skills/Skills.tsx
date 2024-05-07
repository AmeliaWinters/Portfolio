import CogIcon from "../Assets/Icons/CogIcon";
import ReactIcon from "../Assets/Icons/ReactIcon";
import MonitorIcon from "../Assets/Icons/MonitorIcon";
import SkillChip from "../Shared/SkillChip";
import H1 from "../Text/H1";
import H3 from "../Text/H3";
import styles from "./Skills.module.css";
import ReduxIcon from "../Assets/Icons/ReduxIcon";
import TypeScriptIcon from "../Assets/Icons/TypeScriptIcon";
import JavaScriptIcon from "../Assets/Icons/JavaScriptIcon";
import JestIcon from "../Assets/Icons/JestIcon";
import VueIcon from "../Assets/Icons/VueIcon";

interface ISkill {
  text: string;
  icon?: JSX.Element;
}

const iconStyle = { fill: "white", width: "28px", height: "28px" };

const frontEndSkills: ISkill[] = [
  {
    text: "React",
    icon: <ReactIcon style={iconStyle} />,
  },
  {
    text: "Redux",
    icon: <ReduxIcon style={iconStyle} />,
  },
  { text: "TypeScript", icon: <TypeScriptIcon style={iconStyle} /> },
  { text: "Jest", icon: <JestIcon style={iconStyle} /> },
  { text: "JavaScript", icon: <JavaScriptIcon style={iconStyle} /> },

  { text: "Vue", icon: <VueIcon style={iconStyle} /> },
];

const backEndSkills = [
  "C#",
  "ASP.NET",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "SQL",
];

const softwareDevSkills = ["Azure", "AWS", "CI/CD", "TDD", "Git", "Python"];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <H1 className={styles.mainHeading} underline>
        Skills and Expertise
      </H1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillBox}>
          <div className={styles.skillTitleContainer}>
            <ReactIcon style={{ width: "50px", height: "50px" }} />
            <H3 className={styles.subHeading}>
              <div>
                Front-End <br /> Development
              </div>
            </H3>
          </div>
          <ul className={styles.skillsList}>
            {frontEndSkills.map((skill) => (
              <SkillChip text={skill.text} Icon={skill.icon} />
            ))}
          </ul>
        </div>
        <div className={styles.skillBox}>
          <div className={styles.skillTitleContainer}>
            <CogIcon style={{ width: "50px", height: "50px" }} />
            <H3 className={styles.subHeading}>
              <div>
                Back-end <br /> Development
              </div>
            </H3>
          </div>
          <ul className={styles.skillsList}>
            {backEndSkills.map((skill) => (
              <SkillChip text={skill} />
            ))}
          </ul>
        </div>
        <div className={styles.skillBox}>
          <div className={styles.skillTitleContainer}>
            <MonitorIcon
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <H3 className={styles.subHeading}>
              <div>
                Software <br /> Development
              </div>
            </H3>
          </div>
          <ul className={styles.skillsList}>
            {softwareDevSkills.map((skill) => (
              <SkillChip text={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
