import { IProject } from "./Projects";
import styles from "./Projects.module.css";
import Chip from "../Shared/Chip";
import H3 from "../Text/H3";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import sharedStyles from "../sharedStyles.module.css";

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
      style={{
        transform: isSelected ? "scale(1.04)" : "none",
      }}
    >
      <div className={styles.projectItemInner}>
        <div className={styles.projectItemTop}>
          <H3
            style={{
              color: "white",
              display: "inline",
            }}
          >
            {project.name}
          </H3>
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
            }}
          >
            {project.technologies.map((tech) => (
              <Chip text={tech} key={`${project.name} - ${tech}`} />
            ))}
          </div>
        </div>
        {isSelected && (
          <div
            style={{
              marginTop: "0.5rem",
              color: "white",
            }}
          >
            {project.description}
          </div>
        )}
      </div>
    </div>
  );
};
