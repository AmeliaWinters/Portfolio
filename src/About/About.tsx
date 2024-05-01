import styles from "./About.module.css"; // Import CSS module for styling
import portraitImage from "../Assets/Images/AmeliaChibi.png"; // Ensure you have a professional portrait image
import P from "../Text/P";
import PH from "../Text/PH";

interface IProps {
  children: string;
}

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.imageContainer}>
        <img
          src={portraitImage}
          alt="Amelia Winters"
          className={styles.portrait}
        />
      </div>
      <div className={styles.bio}>
        <P className={styles.bioHeader}>About Me</P>
        <PAbout>
          Hey! I'm Amelia (she/her), and I'm a creative and high-performing
          Full-Stack Engineer. I love solving challenges both in the virtual and
          physical world. I have commercial experience in both
        </PAbout>
        <PHAbout> front-end</PHAbout>
        <PAbout> and</PAbout>
        <PHAbout> back-end </PHAbout>
        <PAbout>
          technologies, and I create code not only to meet, but to
        </PAbout>
        <PHAbout> exceed expectations</PHAbout>
        <PAbout>.</PAbout>
        <br />
        <br />
        <PAbout>
          I made my first website in 2013, hosting flash games that I modded for
          my friends, and I've been coding ever since. I'm a graduate of
          Loughborough University, where I earned a BSc in Computer Science and
          Artificial Intelligence. I'm currently working as a Software Engineer
          at
        </PAbout>
        <PHAbout> The Access Group</PHAbout>
        <PAbout>.</PAbout>
        <br />
        <br />
        <PAbout>
          Whilst not coding I enjoy volunteering for my charity, practising
          martial arts, and thinking I look super cool playing
        </PAbout>
        <PHAbout> Beat Saber</PHAbout>
        <PAbout>.</PAbout>
      </div>
    </div>
  );
};

export default About;

const PHAbout = ({ children }: IProps) => {
  return <PH className={styles.bioText}>{children}</PH>;
};

const PAbout = ({ children }: IProps) => {
  return <P className={styles.bioText}>{children}</P>;
};
