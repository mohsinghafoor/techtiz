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
import MyContactUs from "./components/mohsincontactus";
import { Projects } from "./components/projects";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Container>
      <Header />
      <FullStack />
      <Services />
      <Process />
      <Projects />
      <Industries />
      <div
        style={{
          background:
            "linear-gradient(360deg, rgba(255, 255, 255, 0.32) 10.53%, rgba(212, 244, 255, 0.32) 35.97%, rgba(255, 255, 255, 0.32) 85.83%)",
        }}
      >
        <Feedback />
        <Pricing />
      </div>
      {/* <Blogs /> */}
      <MyContactUs />
      <ResponsiveFooter />
    </Container>
  );
}

export default App;
