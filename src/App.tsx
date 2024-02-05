import Bio from "./components/Bio";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Bio />
      </div>
    </div>
  );
}

export default App;
