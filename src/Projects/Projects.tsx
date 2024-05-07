import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import Portfolio from "../Assets/Images/Portfolio.png";
import EmployeePerformance from "../Assets/Images/EmployeePerformance.jpg";
import GoalsAndObjectives from "../Assets/Images/G&O.jpg";
import PathToGreat from "../Assets/Images/PtG.jpg";
import WeddingVenue from "../Assets/Images/WeddingVenue.png";
import Kryptos from "../Assets/Images/Kryptos.jpg";
import H1 from "../Text/H1";
import { ProjectBox } from "./ProjectBox";

export interface IProject {
  name: string;
  technologies: string[];
  imageUrl: string;
  description: string;
}

const projects: IProject[] = [
  {
    name: "Kryptos Code Parallel Decipherer",
    technologies: ["Python", "Parallel Computing", "Cryptography"],
    imageUrl: Kryptos,
    description:
      "A program that decodes the Kryptos sculpture's unsolved codes.",
  },
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
      "A fully functional employee performance tracking and management system.",
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
  {
    name: "Wedding Venue Booking Site",
    technologies: ["JavaScript", "jQuery", "PHP", "SQLite"],
    imageUrl: WeddingVenue,
    description:
      "An website for booking a wedding venue for a specific date, capacity, and budget.",
  },
];

const Projects = () => {
  const [projectInCenter, setProjectInCenter] = useState<IProject>();
  const [projectHovered, setProjectHovered] = useState<IProject>();
  const projectToShow = projectHovered || projectInCenter;

  const projectsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      if (containerRef.current) {
        const projectsRect = containerRef.current.getBoundingClientRect();
        const projectsCenter = projectsRect.top + projectsRect.height / 2;
        const scrollingHeight = 500;
        const areaPerProject = scrollingHeight / projects.length;
        const start = viewportCenter + scrollingHeight / 2;

        for (let [index, project] of projects.entries()) {
          if (projectsCenter >= start - index * areaPerProject) {
            setProjectInCenter(project);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} id="projects">
      <H1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Projects
      </H1>
      <div className={styles.projectsPage}>
        <div className={styles.projectsLeft}>
          <div className={styles.projectImage}>
            {projects.map((project) => (
              <img
                key={project.name}
                src={project.imageUrl}
                alt={`${project.name} Preview`}
                style={{
                  opacity: projectToShow?.name == project.name ? 1 : 0,
                  display:
                    projectToShow?.name == project.name ? "visible" : "hidden",
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.projectsList} ref={projectsRef}>
          {projects.map((project) => (
            <ProjectBox
              key={project.name}
              project={project}
              onMouseEnter={() => setProjectHovered(project)}
              onMouseLeave={() => setProjectHovered(undefined)}
              isSelected={projectToShow?.name == project.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
