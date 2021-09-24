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
import ServicesAccordion from "./components/services/accordian";
import IndustriesAccordion from "./components/industries/accordian";
import { Container } from "@material-ui/core";
import Blog1 from "./components/blogs/blog1";
import Blogs from "./components/blogs";
import MobileStack from "./components/FullStack/mobile";

function App() {
  return (
    <Container>
      {/* 
     
      
      
      
      <Projects />
      
      <Feedback />
      
      <ContactUs />
      <Footer />
      
      <PracticeFooter />
      */}
      <Header />
      <FullStack />
      <Services />
      <Process />
      <Industries />
      <Feedback />
      <Pricing />
      <Blogs />
      <ResponsiveFooter />
      {/* <MobileStack /> */}
      {/* Responsive components 
    <Header />
      <FullStack />

      <Services />
      <Process />
      <Industries />
      <Feedback />
      <Pricing />
      <Blogs />
      <ResponsiveFooter />
    */}
    </Container>
  );
}

export default App;
