import "./App.css";
import Header from "./components/appbar";
import Feedback from "./components/feedback";
import FullStack from "./components/FullStack";
import Industries from "./components/industries";
import IndustriesTab from "./components/industries/tab";
import Pricing from "./components/pricing";
import Process from "./components/process";
import Projects from "./components/projects";
import Services from "./components/services";
import ServicesTab from "./components/services/tabs";
import TabSample from "./components/services/tabs";

function App() {
  return (
    <>
      <Header />
      <FullStack />
      <Services />
      <Process />
      <Projects />
      <Industries />
      <Feedback />
      <Pricing />
    </>
  );
}

export default App;
