import styles from "./About.module.css"; // Import CSS module for styling
import portraitImage from "./Assets/Images/AmeliaChibi.png"; // Ensure you have a professional portrait image
import P from "./Text/P";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <img
          src={portraitImage}
          alt="Amelia Winters"
          className={styles.portrait}
        />
      </div>
      <div className={styles.bio}>
        <P className={styles.bioHeader}>About Me</P>
        {/*TODO: Talk about experience and degree and all that */}
        <P className={styles.bioText}>
          Hi there! I'm Amelia (she/her), a creative and high-performing
          Full-Stack Engineer with a passion for solving complex challenges both
          in the digital and physical world. With commercial experience in both
          front-end and back-end technologies, I love crafting seamless
          applications not only to meet, but to exceed expectations. I'm always
          eager to dive into new projects and push the boundaries of what's
          possible. Ready to take on any challenge!
        </P>
      </div>
    </div>
  );
};

export default About;
