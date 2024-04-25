import styles from "./Navigation.module.css"; // Ensure you have this CSS module file
import logo from "./Images/Logo.png";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} width="40" style={{marginRight:'auto'}}/>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
