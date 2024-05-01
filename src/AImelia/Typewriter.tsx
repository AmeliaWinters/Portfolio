import { useState, useEffect } from "react";

interface IProps {
  msg: string;
  speed?: number;
}

const Typewriter = ({ msg, speed = 100 }: IProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (msg.length > displayedText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(msg.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, msg, speed]);

  return (
    <p>
      {displayedText} <span className="typewriter-cursor" />
    </p>
  );
};

export default Typewriter;
