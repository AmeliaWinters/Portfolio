import { useState } from "react";
import styles from "./Contact.module.css";
import sharedStyles from "../sharedStyles.module.css";
import { apiUrl } from "../AImelia/ChatWindow";

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

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setStatusMessage(null);
    try {
      const response = await fetch(`${apiUrl}/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Email sent successfully:", data.messageId);
        setStatusMessage("Email sent successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        setStatusMessage("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Failed to send email.");
    }
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
      <button onClick={handleSubmit} className={styles.button}>
        Send
      </button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};
