import Bio from "./components/Bio";
import EducationInfo from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
    <div className="bg-gray-800 flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Bio />
        <EducationInfo />
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
