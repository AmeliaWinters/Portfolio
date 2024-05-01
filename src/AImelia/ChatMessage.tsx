import AImelia from "../Assets/Images/AI-melia.webp";
import { IChatMessage } from "./AImelia";
import styles from "./AImelia.module.css";

interface IProps {
  msg: IChatMessage;
}

export const ChatMessage = ({ msg }: IProps) => {
  return (
    <div className={styles.messageContainer}>
      {msg.from === "assistant" && (
        <img src={AImelia} alt="Assistant Avatar" className={styles.avatar} />
      )}
      <div
        className={
          msg.from === "user" ? styles.userMessage : styles.assistantMessage
        }
      >
        <p>{msg.message}</p>
      </div>
    </div>
  );
};
