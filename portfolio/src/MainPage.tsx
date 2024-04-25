import Home from "./Home"; // Assuming you have a Home component
import About from "./About"; // Assuming you have an About component styled as before
import { Background } from "./Background";

const MainPage = () => {
  return (
    <div>
      <Background />
      <Home />
      <About />
    </div>
  );
};

export default MainPage;
