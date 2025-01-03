import GetInTouch from "../components/GetInTouch";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

const Website: React.FC = () => {
  return (
    <>
      <Landing />
      <Projects />
      <Resume />
      <GetInTouch />
    </>
  );
};

export default Website;
