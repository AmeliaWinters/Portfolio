import styles from "./AImelia.module.css";
import { useEffect, useState } from "react";
import { ChatIcon } from "../Assets/Icons/ChatIcon.tsx";
import { ChatWindow } from "./ChatWindow.tsx";
import ArrowIcon from "../Shared/ArrowIcon.tsx";

export interface IChatMessage {
  from: "assistant" | "user";
  message: string;
}

export const AIMelia = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isHintVisible, setIsHintVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsHintVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsHintVisible(false);
    }
  }, [isOpen]);

  return (
    <div className={styles.chatbotContainer}>
      <div style={{ display: isOpen ? "contents" : "none" }}>
        <ChatWindow />
      </div>
      <div style={{ display: "flex" }}>
        {!isOpen && isHintVisible && (
          <div className={styles.calloutLabel}>
            <span>Ask my assistant AI-melia about me!</span>
            <ArrowIcon />
          </div>
        )}
        <button
          className={styles.chatButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChatIcon />
        </button>
      </div>
    </div>
  );
};
