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
import { StringListParameter } from "aws-cdk-lib/aws-ssm";

export interface IProject {
  name: string;
  technologies: string[];
  dates: string;
  for: string;
  imageUrl: string;
  description: string;
}

const projects: IProject[] = [
  {
    name: "Kryptos Code Parallel Decipherer",
    technologies: ["Python", "C++", "Parallel Computing", "Cryptography"],
    imageUrl: Kryptos,
    dates: "May 2024 - Present",
    for: "Personal Project",
    description:
      "Contributed to the global decoding effort by computing 23 billion combinations for a doubled vigenére cipher. This is a program for decoding CIA's and Jim Sanborn's Kryptos code. Successfully decoded the first three sections of the code. The program is currently decoding the 34-year old unsolved K4 using parallel computing.",
  },
  {
    name: "Portfolio",
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "AWS"],
    imageUrl: Portfolio,
    dates: "May 2024 - Present",
    for: "Personal Project",
    description:
      "The site you're on right now! A personal portfolio with a sleek self-made design. Don't have much to say about it, as you can simply see all of it right here! The site's backend is hosted on AWS Amplify V2, which then talks to Anthropic's server to process my assistant AI-melia, which has all up to date information about me and my work.",
  },
  {
    name: "Employee Performance",
    technologies: ["React", "TypeScript", "C#/.NET", "SQL", "Azure"],
    imageUrl: EmployeePerformance,
    dates: "August 2022 - Present",
    for: "The Access Group",
    description:
      "An employee performance tracking and management system. I am responsible for developing various features inside of this app, having had a hand in refactoring every single piece of this application due to a mismanagement of the codebase by contractors. The company dashboard, initial setup, and performance review functionalties were entirely developed by me. The app is hosted on the Azure cloud.",
  },
  {
    name: "Path to Great",
    technologies: ["React", "Vue.js", "TypeScript", "C#/.NET", "SQL", "Azure"],
    imageUrl: PathToGreat,
    dates: "August 2022 - Present",
    for: "The Access Group",
    description:
      "An app for tracking and sharing employee performance. The main component of this app was a Vue.js component that was underperforming. I refactored it into React and TypeScript. I also completely rewrote this entire application, due to its code quality score being too low to be migrated to the newest version of The Access Group's harness. This app has since received constant praise and has not encountered a single issue since the rewrite. The app is hosted on the Azure cloud.",
  },
  {
    name: "Goals and Objectives",
    technologies: ["React", "TypeScript", "C#/.NET", "SQL", "Azure"],
    imageUrl: GoalsAndObjectives,
    dates: "August 2022 - Present",
    for: "The Access Group",
    description:
      "This is an app for giving and setting goals and objectives to employees and tracking your own goals and objectives. It is a part of the Access Workspace suite of apps. My role was to modernise this app into modern React and TypeScript. I also contributed to the back-end using C#/.NET and SQL Server. During a hackathon I have integrated OpenAI's ChatGPT into this product to suggest SMART Objectives and measures to managers for their employees, given the employee's performance, job title, responsibiltiies, and previous objective history.",
  },
  {
    name: "Wedding Venue Booking Site",
    technologies: ["JavaScript", "jQuery", "PHP", "SQLite"],
    imageUrl: WeddingVenue,
    dates: "April 2020 - May 2020",
    for: "University",
    description:
      "This is a university project for the Web Programming module for my Computer Science and Artificial Intelligence degree at Loughborough University. It has earned the top mark of 97%. It is a website that given a date, budget, and number of people attending returns the most suitable wedding venues. Included perfect input sanitisation and a secure SQLi database. 3% was unfortunately deducted for not using comments in code, due to a mismatch in beliefs about whether self-documenting code or comments are more appropriate.",
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
    <div className={styles.projectsContainer} id="projects">
      <H1
        style={{
          textAlign: "center",
          color: "white",
          marginTop: 0,
        }}
        underlineColour="pink"
      >
        Projects
      </H1>
      <div className={styles.projectsPage} ref={containerRef}>
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
