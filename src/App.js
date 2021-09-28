import "./App.css";
import Header from "./components/appbar";
import Feedback from "./components/feedback";
import FullStack from "./components/FullStack";
import Industries from "./components/industries";
import Pricing from "./components/pricing";
import Process from "./components/process";
import Services from "./components/services";
import ResponsiveFooter from "./components/Footer";
import { Container } from "@material-ui/core";
import Blogs from "./components/blogs";
import { ContactUs } from "./components/contactUs/contactUs";
import ContactForm from "./components/mohsincontactus/form";
import MyContactUs from "./components/mohsincontactus";

function App() {
  return (
    <Container>
      <Header />
      <FullStack />
      <Services />
      <Process />
      <Industries />
      <Feedback />
      <Pricing />
      <Blogs />
      <MyContactUs />
      <ResponsiveFooter />
    </Container>
  );
}

export default App;
