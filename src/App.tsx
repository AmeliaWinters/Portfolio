import { FC, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import { AIMelia } from "./AImelia/AImelia";
import About from "./About/About";
import { Background } from "./Greeting/Background";
import Greeting from "./Greeting/Greeting";
import { Links } from "./Links/Links";
import { WIP } from "./WIP";
import styles from "./App.module.css";
import useWindowSize from "./useWindowSize";
import ScrollHint from "./Greeting/ScrollHint";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Carousel from "./Carousel";

const App: FC = () => {
  const { isMobile } = useWindowSize();

  useEffect(() => {
    const cursor: HTMLElement | null = document.querySelector(
      `.${styles.ameliaCursor}`
    );
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }

      const trail = document.createElement("div");
      trail.className = styles.cursorTrail;
      document.body.appendChild(trail);
      trail.style.left = `${event.clientX}px`;
      trail.style.top = `${event.clientY}px`;

      setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(0)";
      }, 100);
      setTimeout(() => {
        document.body.removeChild(trail);
      }, 800);
    };

    const addEffects = () => {
      if (!cursor) return;
      cursor.classList.add(styles.clickEffect);
      setTimeout(() => {
        cursor.classList.remove(styles.clickEffect);
      }, 200);
    };

    const onMouseDown = () => {
      if (!cursor) return;
      cursor.classList.add(styles.clickEffect);
    };

    const onMouseUp = () => {
      if (!cursor) return;
      cursor.classList.remove(styles.clickEffect);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", addEffects);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", addEffects);
    };
  }, []);

  return (
    <div>
      <Navigation />
      <Background />
      <Greeting />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <AIMelia />
      {!isMobile && <Links />}
      <ScrollHint />
      <WIP />
      <div className={styles.ameliaCursor} />
      {/* TODO: 
      Interactive Resume 
      Copyright
      Code Snippet Formatter 
      Skills section */}
    </div>
  );
};

export default App;
