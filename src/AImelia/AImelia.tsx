import styles from "./AImelia.module.css";
import { SetStateAction, useEffect, useRef, useState } from "react";
import AImelia from "../Assets/Images/AI-melia.webp";
import { ChatIcon } from "../Assets/Icons/ChatIcon.tsx";

export interface ChatMessage {
  from: "assistant" | "user";
  message: string;
}

export const apiUrl =
  "https://6wn4toerma.execute-api.eu-north-1.amazonaws.com/staging";

export const AIMelia = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: "assistant",
      message:
        "Heyo! \nI'm AI-melia, and I'm here to help you learn more about Amelia. Please feel free to ask me any questions! :)",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const getMessage = async (messages: ChatMessage[]) => {
    try {
      const response = await fetch(`${apiUrl}/msg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messages),
      });

      const data = await response.json();
      return data[0].text;
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessages: ChatMessage[] = [
        ...messages,
        { message: inputText, from: "user" },
      ];
      setMessages(newMessages);
      setInputText("");
      getMessage(newMessages).then((response) => {
        console.log(response);
        response &&
          setMessages(
            newMessages.concat({ message: response, from: "assistant" })
          );
      });
    }
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  if (isLoading) return <div className={styles.loader}>Loading...</div>;

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.messages} ref={messagesEndRef}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.messageContainer}>
                {msg.from === "assistant" && (
                  <img
                    src={AImelia}
                    alt="Assistant Avatar"
                    className={styles.avatar}
                  />
                )}
                <div
                  className={
                    msg.from === "user"
                      ? styles.userMessage
                      : styles.assistantMessage
                  }
                >
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputField}
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
      <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
        <ChatIcon />
      </button>
    </div>
  );
};
