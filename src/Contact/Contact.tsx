import H1 from "../Text/H1";
import P from "../Text/P";
import styles from "./Contact.module.css";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <H1 className={styles.title} underlineColour="pink">
        Contact Me
      </H1>
      <P style={{ margin: "0", fontSize: "1.5rem", textAlign: "center" }}>
        Let's Talk
      </P>

      <div className={styles.contactContainer}>
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
