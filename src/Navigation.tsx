import { useState } from "react";
import styles from "./Navigation.module.css";
import logo from "./Assets/Images/Logo.png";
import P from "./Text/P";
import DownloadResume from "./DownloadResume";
import useWindowSize from "./useWindowSize";
import { HamburgerButton } from "./HamburgerButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const toggleMobile = width && width < 768;

  const tagLine = toggleMobile
    ? "Full-Stack Code Artist"
    : "Coding Full-Stack with Ease, Solutions That Please";

  return (
    <nav className={styles.navbar}>
      <img src={logo} width="40" />
      <P
        style={{
          marginRight: "auto",
          marginLeft: "1rem",
          fontSize: "1.2rem",
        }}
      >
        {tagLine}
      </P>
      {toggleMobile && <HamburgerButton onClick={() => setIsOpen(!isOpen)} />}
      <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <a href="/">
            <P>Home</P>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/about">
            <P>About</P>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/projects">
            <P>Projects</P>
          </a>
        </li>
        <li className={styles.navItem}>
          <DownloadResume />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
