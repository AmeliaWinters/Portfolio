import { useState } from "react";
import styles from "./Navigation.module.css";
import P from "../Text/P";
import useWindowSize from "../useWindowSize";
import { HamburgerButton } from "./HamburgerButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useWindowSize();
  const tagLine = "Amelia Winters - Full Stack Dev";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Amelia Winters Resume.pdf";
    link.download = "AmeliaWinters_Resume.pdf";
    link.dispatchEvent(new MouseEvent("click"));
    link.remove();
  };

  return (
    <nav className={styles.navbar}>
      <P
        className={styles.navItem}
        style={{
          marginRight: "auto",
          marginLeft: "1rem",
          fontSize: "1.2rem",
          color: "white",
          "--animation-order": 1,
        }}
      >
        {tagLine}
      </P>
      {isMobile && <HamburgerButton onClick={() => setIsOpen(!isOpen)} />}
      <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
        <li
          className={styles.navItem}
          style={{ "--animation-order": 3 }}
          onClick={() => scrollToSection("about")}
        >
          <P>About</P>
        </li>
        <li
          className={styles.navItem}
          style={{ "--animation-order": 4 }}
          onClick={() => scrollToSection("projects")}
        >
          <P>Projects</P>
        </li>
        <li
          className={styles.navItem}
          style={{ "--animation-order": 5 }}
          onClick={() => scrollToSection("skills")}
        >
          <P>Skills</P>
        </li>
        <li
          className={styles.navItem}
          style={{ "--animation-order": 6 }}
          onClick={() => scrollToSection("contact")}
        >
          <P>Contact</P>
        </li>
        <li
          className={styles.navItem}
          style={{ "--animation-order": 7 }}
          onClick={handleDownload}
        >
          <P>Download Resume</P>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
