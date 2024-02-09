import Bio from "./components/Bio";
import EducationInfo from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GeminiPrompt from "./components/gemini";
import "./index.css";

function App() {
  const sections = ["Home", "Education", "Projects", "Skills"];

  return (
    <>
      <div className="bg-gray-800 flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header sections={sections} />
          <Bio />
          <EducationInfo />
          <Projects />
          <Skills />
          <GeminiPrompt />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
