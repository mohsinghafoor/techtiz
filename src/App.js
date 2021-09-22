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
import { PracticeFooter } from "./components/Footer/footerpractice";
import FooterAccordion from "./components/Footer/accordian";
import ResponsiveFooter from "./components/Footer";
import { DummyDrawer } from "./components/appbar/dummy";
import ServicesAccordion from "./components/services/accordian";
import IndustriesAccordion from "./components/industries/accordian";

function App() {
  return (
    <>
      {/* 
     
      <FullStack />
      
      
      <Projects />
      
      <Feedback />
      
      <ContactUs />
      <Footer />
      <PracticeFooter />
      */}

      {/* Responsive components */}
      {/* <Header />
      <Process />
      <Services />
      <Feedback />
      <Industries /> 
      */}
      <Pricing />
    </>
  );
}

export default App;
