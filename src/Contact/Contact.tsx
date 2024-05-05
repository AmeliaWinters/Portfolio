import styles from "./Contact.module.css";
import P from "../Text/P";
import sharedStyles from "../sharedStyles.module.css";
import { ContactForm } from "./ContactForm";
import PH from "../Text/PH";
import H1 from "../Text/H1";
import H3 from "../Text/H3";

const Contact = () => {
  return (
    <section className={styles.container}>
      <ContactForm />
      <div className={sharedStyles.flexColumnWidthFillAvailable}>
        <div className={styles.contactCard}>
          <H1 style={{ margin: 0 }}>Amelia Winters</H1>
          <H3 style={{ color: "#fe6b86" }}>Full-Stack Engineer</H3>
          <br />
          <div style={{ marginBottom: "0.5rem" }}>
            <PH style={{ marginRight: "1rem" }}>Residence:</PH>
            <P>Leicestershire, England</P>
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <PH style={{ marginRight: "1rem" }}>LinkedIn: </PH>
            <P>
              <a href="https://www.linkedin.com/in/ameliadev/" target="_blank">
                linkedin.com/in/ameliadev
              </a>
            </P>
          </div>
          <div>
            <PH style={{ marginRight: "1rem" }}>Email: </PH>
            <P>AmeliaWintersDev@gmail.com</P>
          </div>
          <br />
          <br />
          <br />
          <H1 style={{ fontFamily: "thesignature, sans-serif" }}>
            Amelia Winters
          </H1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
