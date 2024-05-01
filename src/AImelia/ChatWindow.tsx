import { useState, useRef, useEffect } from "react";
import { IChatMessage } from "./AImelia";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import styles from "./AImelia.module.css";
import Typing from "./Typing";

export const apiUrl =
  "https://6wn4toerma.execute-api.eu-north-1.amazonaws.com/staging";

export const ChatWindow = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<IChatMessage[]>([
    {
      from: "assistant",
      message:
        "Heyo! \nI'm AI-melia, and I'm here to help you learn more about Amelia. Please feel free to ask me any questions! :)",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const getMessage = async (messages: IChatMessage[]) => {
    try {
      const response = await fetch(`${apiUrl}/msg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messages),
      });

      const data = await response.json();
      setIsTyping(false);
      return data[0].text;
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setIsTyping(true);
      const newMessages: IChatMessage[] = [
        ...messages,
        { message: inputText, from: "user" },
      ];
      setMessages(newMessages);
      setInputText("");
      getMessage(newMessages).then((response) => {
        if (!response) return;
        setMessages(
          newMessages.concat({ message: response, from: "assistant" })
        );
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className={styles.backgroundGradient}>
      <div className={styles.chatWindow}>
        <div className={styles.messages} ref={messagesEndRef}>
          {messages.map((msg) => (
            <ChatMessage msg={msg} />
          ))}
          {isTyping && <Typing />}
        </div>

        <ChatInput
          inputText={inputText}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};
