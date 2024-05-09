import React, { useState, FC, useEffect } from "react";
import styles from "./Greeting.module.css";
import gsap from "gsap";

interface IProps {
  children: React.ReactNode;
}
const environment = import.meta.env.VITE_ENVIRONMENT;

const Greeting: FC<IProps> = ({ children }) => {
  const [isGreeting, setIsGreeting] = useState(true);

  useEffect(() => {
    if (environment === "dev") {
      setIsGreeting(false); // Skip animation in development mode
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 2 },
      onComplete: () => setIsGreeting(false),
    });

    tl.fromTo(
      `.${styles.hiya}`,
      { opacity: 0, scale: 0.3, rotate: -10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 2, stagger: 0.3 }
    )
      .to(`.${styles.hiya}`, { opacity: 0, scale: 0.8, rotate: 10 }, "+=1")
      .fromTo(
        `.${styles.greeting}`,
        { opacity: 0, scale: 0.3, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 2, stagger: 0.3 }
      )
      .to(`.${styles.fullScreen}`, {
        filter: "blur(5px)",
        duration: 2,
        delay: 2,
      })
      .to(`.${styles.fullScreen}`, {
        opacity: 0,
        duration: 3,
      });
  }, []);

  return (
    <>
      {isGreeting && (
        <div className={styles.fullScreen}>
          <h1 className={`${styles.hiya}`}>Hiya!</h1>
          <h2 className={`${styles.greeting}`}>
            I hope your day has been treating you well.
          </h2>
        </div>
      )}

      {!isGreeting && <div>{children}</div>}
    </>
  );
};

export default Greeting;
