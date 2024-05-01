import styles from "./AImelia.module.css";
import { useState } from "react";
import { ChatIcon } from "../Assets/Icons/ChatIcon.tsx";
import { ChatWindow } from "./ChatWindow.tsx";

export interface IChatMessage {
  from: "assistant" | "user";
  message: string;
}

export const AIMelia = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.chatbotContainer}>
      <div style={{ display: isOpen ? "contents" : "none" }}>
        <ChatWindow />
      </div>
      <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
        <ChatIcon />
      </button>
    </div>
  );
};
