import H1 from "../Text/H1";
import P from "../Text/P";
import styles from "./Contact.module.css";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.container}>
      <H1 className={styles.title} underline>
        Contact Me
      </H1>
      <P style={{ margin: "0", fontSize: "1.5rem", textAlign: "center" }}>
        Let's Talk
      </P>

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
