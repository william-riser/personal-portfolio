import Bio from "./components/Bio";
import Resume from "./components/Resume.tsx";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "./index.css";
import Header from "./components/Header";
function App() {
  const sections = ["Home", "Resume", "Projects"];

  return (
    <>
      <div className="bg-gray-800 flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header sections={sections} />
          <Bio />
          <Resume />
          <Projects />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
