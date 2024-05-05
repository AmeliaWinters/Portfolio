import P from "../Text/P";
import styles from "./Contact.module.css";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>Contact Me</div>
      <P style={{ margin: "0", fontSize: "1.5rem" }}>Let's Talk</P>

      <div
        style={{
          display: "flex",

          marginTop: "4rem",
        }}
      >
        <ContactForm />
        <ContactCard />
      </div>
    </section>
  );
};

export default Contact;
