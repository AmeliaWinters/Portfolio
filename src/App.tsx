import { FC, useEffect, useRef } from "react";
import Navigation from "./Navigation/Navigation";
import { AIMelia } from "./AImelia/AImelia";
import About from "./About/About";
import { Background } from "./Landing/Background";
import Landing from "./Landing/Landing";
import { Links } from "./Links/Links";
import { WIP } from "./WIP";
import styles from "./App.module.css";
import useWindowSize from "./useWindowSize";
import ScrollHint from "./Landing/ScrollHint";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Greeting from "./Landing/Greeting";

const App: FC = () => {
  const { isMobile } = useWindowSize();
  const cursor = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      if (cursor.current) {
        cursor.current.style.left = `${event.clientX}px`;
        cursor.current.style.top = `${event.clientY}px`;
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
      if (!cursor.current) return;
      cursor.current.classList.add(styles.clickEffect);
      setTimeout(() => {
        cursor.current?.classList.remove(styles.clickEffect);
      }, 100);
    };

    const onMouseDown = () => {
      if (!cursor.current) return;
      cursor.current.classList.add(styles.clickEffect);
    };

    const onMouseUp = () => {
      if (!cursor.current) return;
      cursor.current.classList.remove(styles.clickEffect);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", addEffects);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("click", addEffects);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div>
      <Background />
      <div
        className={styles.ameliaCursor}
        ref={(el) => (cursor.current = el)}
      />
      <Greeting>
        <Navigation />
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <AIMelia />
        {!isMobile && <Links />}
        <ScrollHint />
        <WIP />

        {/* TODO: 
      Experience Timeline
      Copyright*/}
      </Greeting>
    </div>
  );
};

export default App;
