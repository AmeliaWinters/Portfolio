import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import Portfolio from "./Assets/Images/Portfolio.png";
import EmployeePerformance from "./Assets/Images/EmployeePerformance.jpeg";
import GoalsAndObjectives from "./Assets/Images/G&O.jpeg";
import PathToGreat from "./Assets/Images/PtG.jpeg";
import H3 from "./Text/H3";
import Chip from "./Shared/Chip";
import H1 from "./Text/H1";

interface IProject {
  name: string;
  technologies: string[];
  imageUrl: string;
  description: string;
}

const projects: IProject[] = [
  {
    name: "Portfolio",
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "AWS"],
    imageUrl: Portfolio,
    description:
      "The site you're on right now! A personal portfolio with a sleek self-made design.",
  },
  {
    name: "Employee Performance",
    technologies: ["React", "TypeScript", "C#/.NET", "SQL", "Azure"],
    imageUrl: EmployeePerformance,
    description:
      "An full-functionality employee performance tracking and management system. ",
  },
  {
    name: "Path to Great",
    technologies: ["React", "Vue.js", "TypeScript", "C#/.NET", "SQL", "Azure"],
    imageUrl: PathToGreat,
    description: "An app for tracking and sharing employee performance.",
  },
  {
    name: "Goals and Objectives",
    technologies: ["React", "TypeScript", "C#/.NET", "SQL", "Azure"],
    imageUrl: GoalsAndObjectives,
    description:
      "An app for giving and setting goals and objectives to employees.",
  },
];

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(Portfolio);
  const imageRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && projectRef.current) {
      const projectRefHeight = window.getComputedStyle(
        projectRef.current
      ).height;
      imageRef.current.style.height = projectRefHeight;
    }
  }, [imageRef.current?.style.height]);

  return (
    <>
      <H1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Projects
      </H1>
      <div className={styles.projectsPage}>
        <div className={styles.projectImage} ref={imageRef}>
          {currentImage && <img src={currentImage} alt="Project Preview" />}
        </div>
        <div className={styles.projectsList} ref={projectRef}>
          {projects.map((project) => (
            <div
              key={project.name}
              className={styles.projectItem}
              onMouseEnter={() => setCurrentImage(project.imageUrl)}
              onMouseLeave={() => setCurrentImage("")}
            >
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
                  height: "fit-content",
                  marginLeft: "auto",
                }}
              >
                {project.technologies.map((tech) => (
                  <Chip text={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
