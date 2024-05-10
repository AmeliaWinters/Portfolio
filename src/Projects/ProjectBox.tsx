import { IProject } from "./Projects";
import styles from "./Projects.module.css";
import Chip from "../Shared/Chip";
import H2 from "../Text/H2";
import P from "../Text/P";

interface IProps {
  project: IProject;
  onMouseEnter: (imageUrl: string) => void;
  onMouseLeave: (imageUrl: string) => void;
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
      onMouseEnter={() => onMouseEnter(project.imageUrl)}
      onMouseLeave={() => onMouseLeave("")}
    >
      <div>
        <div className={styles.projectItemTop}>
          <H2 style={{ color: "white", display: "inline", fontWeight: 1000 }}>
            {project.name}
          </H2>
          <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
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
            <P>{project.for}</P>
            <P>{project.dates}</P>
          </div>
          <div style={{ marginTop: "0.5rem", color: "white" }}>
            {project.description}
          </div>
        </div>
      </div>
    </div>
  );
};
