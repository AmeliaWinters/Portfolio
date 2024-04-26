import styles from "./Navigation.module.css"; // Ensure you have this CSS module file
import logo from "./Images/Logo.png";
import P from "./Text/P";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} width="40" />
      <P
        style={{ marginRight: "auto", marginLeft: "1rem", fontSize: "1.2rem" }}
      >
        Engineering Brilliance, Seeking Challenges - Full-Stack Code Artist
      </P>
      <ul className={styles.navList}>
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
      </ul>
    </nav>
  );
};
export default Navigation;
