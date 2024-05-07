import { useState } from "react";
import styles from "./Contact.module.css";
import P from "../Text/P";
import sharedStyles from "../sharedStyles.module.css";

interface EmailForm {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<EmailForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Sending form data...", formData);
  };
  return (
    <div className={sharedStyles.flexColumnWidthFillAvailable}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className={styles.input}
      />
      <textarea
        name="message"
        rows={8}
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className={styles.textarea}
      />
      <br />
      <button onClick={() => handleSubmit()} className={styles.button}>
        Send
      </button>
    </div>
  );
};