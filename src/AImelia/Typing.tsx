import styles from "./Typing.module.css";
import AIMeliaStyles from "./AImelia.module.css";
import AImelia from "../Assets/Images/AI-melia.webp";

const Typing = () => {
  return (
    <div className={AIMeliaStyles.messageContainer}>
      <img
        src={AImelia}
        alt="Assistant Avatar"
        className={AIMeliaStyles.avatar}
      />
      <div className={AIMeliaStyles.assistantMessage}>
        <div className={styles.typing}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default Typing;
