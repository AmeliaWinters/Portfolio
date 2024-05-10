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
import ASPNetIcon from "../Assets/Icons/ASPNetIcon";
import CSharpIcon from "../Assets/Icons/CSharpIcon";
import NodeJsIcon from "../Assets/Icons/NodeJsIcon";
import GraphQLIcon from "../Assets/Icons/GraphQLIcon";
import RESTAPIIcon from "../Assets/Icons/RESTAPIIcon";
import SQLIcon from "../Assets/Icons/SQLIcon";
import AzureIcon from "../Assets/Icons/AzureIcon";
import AWSIcon from "../Assets/Icons/AWSIcon";
import CICDIcon from "../Assets/Icons/CICDIcon";
import TDDIcon from "../Assets/Icons/TDDIcon";
import GitIcon from "../Assets/Icons/GitIcon";
import PythonIcon from "../Assets/Icons/PythonIcon";

interface ISkill {
  text: string;
  icon?: JSX.Element;
}

const iconStyle = { fill: "white", width: "28px", height: "28px" };

const frontEndSkills: ISkill[] = [
  { text: "React", icon: <ReactIcon style={iconStyle} /> },
  { text: "Redux", icon: <ReduxIcon style={iconStyle} /> },
  { text: "TypeScript", icon: <TypeScriptIcon style={iconStyle} /> },
  { text: "Jest", icon: <JestIcon style={iconStyle} /> },
  { text: "JavaScript", icon: <JavaScriptIcon style={iconStyle} /> },
  { text: "Vue", icon: <VueIcon style={iconStyle} /> },
];

const backEndSkills: ISkill[] = [
  { text: "C#", icon: <CSharpIcon style={iconStyle} /> },
  { text: "ASP.NET", icon: <ASPNetIcon style={iconStyle} /> },
  { text: "Node.js", icon: <NodeJsIcon style={iconStyle} /> },
  { text: "GraphQL", icon: <GraphQLIcon style={iconStyle} /> },
  { text: "REST APIs", icon: <RESTAPIIcon style={iconStyle} /> },
  { text: "SQL", icon: <SQLIcon style={iconStyle} /> },
];

const softwareDevSkills: ISkill[] = [
  { text: "Azure", icon: <AzureIcon style={iconStyle} /> },
  { text: "AWS", icon: <AWSIcon style={iconStyle} /> },
  { text: "CI/CD", icon: <CICDIcon style={iconStyle} /> },
  { text: "TDD", icon: <TDDIcon style={iconStyle} /> },
  { text: "Git", icon: <GitIcon style={iconStyle} /> },
  { text: "Python", icon: <PythonIcon style={iconStyle} /> },
];

const Skills = () => {
  return (
    <div className={styles.skillsSection} id="skills">
      <H1 className={styles.mainHeading} underlineColour="pink">
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
              <SkillChip key={skill.text} text={skill.text} Icon={skill.icon} />
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
              <SkillChip key={skill.text} text={skill.text} Icon={skill.icon} />
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
              <SkillChip key={skill.text} text={skill.text} Icon={skill.icon} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
