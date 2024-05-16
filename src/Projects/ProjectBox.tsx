import { IProject } from "./Projects";
import styles from "./Projects.module.css";
import Chip from "../Shared/Chip";
import H2 from "../Text/H2";
import P from "../Text/P";

interface IProps {
  project: IProject;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isSelected?: boolean;
}

export const ProjectBox = ({
  project,
  onMouseEnter,
  onMouseLeave,
  isSelected,
}: IProps) => {
  return (
    <div
      className={styles.projectItem}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      onTouchEnd={() => onMouseEnter()}
    >
      <div>
        <div className={styles.projectItemTop}>
          <H2 className={styles.projectName}>{project.name}</H2>
          <div className={styles.projectSkills}>
            {project.technologies.map((tech) => (
              <Chip text={tech} key={`${project.name} - ${tech}`} />
            ))}
          </div>
        </div>
        <div
          className={`${styles.projectItemDescription} ${
            isSelected ? styles.projectItemDescriptionVisible : ""
          }`}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <P style={{ fontWeight: "bold" }}>{project.for}</P>
            <P style={{ display: "inline-block", transform: "skewX(-15deg)" }}>
              {project.dates}
            </P>
          </div>
          <div style={{ marginTop: "0.5rem", color: "white" }}>
            {project.description}
          </div>
        </div>
      </div>
    </div>
  );
};
