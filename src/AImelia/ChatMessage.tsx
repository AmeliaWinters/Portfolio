import AImelia from "../Assets/Images/AI-melia.webp";
import { IChatMessage } from "./AImelia";
import styles from "./AImelia.module.css";
import Typewriter from "./Typewriter";

interface IProps {
  msg: IChatMessage;
  type?: boolean;
}

export const ChatMessage = ({ msg, type }: IProps) => {
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
        {type && msg.from === "assistant" ? (
          <Typewriter msg={msg.message} speed={20} />
        ) : (
          <p>{msg.message}</p>
        )}
      </div>
    </div>
  );
};
