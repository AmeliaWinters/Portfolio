import { useState, useEffect } from "react";

interface IProps {
  msg: string;
  speed?: number;
  onFinish?: () => void;
}

const Typewriter = ({ msg, speed = 100, onFinish }: IProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (msg.length > displayedText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(msg.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      onFinish && onFinish();
    }
  }, [displayedText, speed]);

  useEffect(() => {
    setDisplayedText("");
  }, [msg]);

  return (
    <>
      {displayedText} <span />
    </>
  );
};

export default Typewriter;
