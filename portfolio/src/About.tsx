import styles from "./About.module.css"; // Import CSS module for styling
import portraitImage from "./Images/AmeliaChibi.png"; // Ensure you have a professional portrait image

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
        <h1>About Me</h1>
        <p>
          Hello! I'm Amelia, a creative and high-performing Full-Stack Engineer
          with a passion for tackling complex challenges in the digital realm.
          With a robust background in both front-end and back-end technologies,
          I craft seamless applications that bring client visions to life. Let's
          explore what we can build together!
        </p>
      </div>
    </div>
  );
};

export default About;
