import Header from "../components/Header";
import Home from "../components/Bio";
import Landing from "../components/landing";

const Website: React.FC = () => {

    const sections = ["Home", "Resume", "Projects"];

  return (
    <>
    <Header sections={sections} />
    <Landing />
    
    </>
  );
};

export default Website;
