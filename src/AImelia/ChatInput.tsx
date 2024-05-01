import styles from "./AImelia.module.css";

interface IProps {
  inputText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
}

export const ChatInput = ({
  inputText,
  handleInputChange,

  handleSendMessage,
}: IProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
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
  );
};
