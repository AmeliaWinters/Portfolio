import Home from "./Home"; // Assuming you have a Home component
import About from "./About"; // Assuming you have an About component styled as before
import { Background } from "./Background";
import { AIMelia } from "./AImelia/AImelia";

const MainPage = () => {
  return (
    <div>
      <Background />
      <Home />
      <About />
      <AIMelia />
      {/* TODO: Download Resume Button
  Interactive Resume
  Projects Section
   Copyright
   Scroll Down Infobox
   Contact Page
   Code Snippet Formatter
   Skills section 
   API Integration
   Chatbot
   */}
    </div>
  );
};

export default MainPage;
