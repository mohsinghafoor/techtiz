import "./App.css";
import Header from "./components/appbar";
import Feedback from "./components/feedback";
import FullStack from "./components/FullStack";
import Industries from "./components/industries";
import Pricing from "./components/pricing";
import Process from "./components/process";
import Projects from "./components/projects";
import Services from "./components/services";
import { ContactUs } from "./components/contactUs/contactUs";
import { Footer } from "./components/Footer/Footer";
import { PrivacyPolocy } from "./components/privacyPolicy";

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
      <ContactUs />
      <Footer />
      <PrivacyPolocy />
    </>
  );
}

export default App;
