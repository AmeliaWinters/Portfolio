import styles from "./About.module.css"; // Import CSS module for styling
import portraitImage from "../Assets/Images/AmeliaChibi.png"; // Ensure you have a professional portrait image
import P from "../Text/P";
import PH from "../Text/PH";
import H1 from "../Text/H1";

interface IProps {
  children: string;
}

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.imageContainer}>
        <img
          src={portraitImage}
          alt="Amelia Winters"
          className={styles.portrait}
        />
      </div>
      <div className={styles.bio}>
        <H1 style={{ color: "white" }} underlineColour="pink">
          About Me
        </H1>
        <PAbout>Hiya!</PAbout>
        <br />
        <PAbout>
          I'm Amelia (she/her), and I'm a creative and high-performing
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
          Encouraged my Maths teacher due to being the top maths student in my
          high school, my journey in software began in 2013 when I built my
          first website - a hub for my self-made digital graphics, music, and
          modded flash games. And I've been programming ever since. I pursued
          Creative Media Production for Games Design in college, where I
          developed skills in art, programming, 3D modelling, music production,
          design, and storytelling, ultimately cementing my passion for Software
          Engineering.
        </PAbout>
        <br />
        <br />
        <PAbout>
          I'm a graduate of Loughborough University, where I earned a BSc in
        </PAbout>
        <PHAbout> Computer Science and Artificial Intelligence. </PHAbout>
        <PAbout>
          During my time there I found that I was a great web developer, earning
          the top mark of the university of 97 in Web Programming.
        </PAbout>
        <br />
        <br />
        <PAbout>I'm currently working as a Full-Stack Engineer at</PAbout>
        <PHAbout> The Access Group</PHAbout>
        <PAbout>
          . I manage the Employee Performance suite, and I act as a
          CyberSecurity champion in the company, maintaining a flawless record.
        </PAbout>
        <br />
        <br />
        <PAbout>
          Outside of programming, I am a trustee for a charity, practice martial
          arts, and enjoy losing myself in
        </PAbout>
        <PHAbout> Beat Saber</PHAbout>
        <PAbout>, where I definitely look as cool as I feel.</PAbout>
      </div>
    </section>
  );
};

export default About;

const PHAbout = ({ children }: IProps) => {
  return <PH className={styles.bioText}>{children}</PH>;
};

const PAbout = ({ children }: IProps) => {
  return <P className={styles.bioText}>{children}</P>;
};
