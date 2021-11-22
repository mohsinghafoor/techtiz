import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Grid, Box } from "@material-ui/core";
import pic1 from "../../assets/backend.png";
import pic2 from "../../assets/what.png";
import pic3 from "../../assets/new.jpg";
import pic4 from "../../assets/quality1.png";
import Fields from "./fields";
import apple from "../../assets/apple.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import android from "../../assets/android.png";
import flutter from "../../assets/flutter.png";
import node from "../../assets/node1.png";
import html from "../../assets/html gray.png";
import ruby from "../../assets/ruby.png";
import css from "../../assets/css3.svg";
import exp from "../../assets/exp.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.only("md")]: {},
  },
  fieldroot: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    maxWidth: 400,
    [theme.breakpoints.up("lg")]: {
      marginLeft: 10,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-5rem",
    },
  },
  apple: {
    width: 55.09,
    height: 58.82,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
    },
  },

  applet: {
    width: 74,
    height: 51,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: "22px",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      width: 65,
    },
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    textAlign: "left",
    marginLeft: 35,
    height: 94,
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "47px",
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
      marginLeft: 0,
    },
  },
  indicator: {
    height: 3,
    background: "#FFC107",
    color: "black",
  },
  heading: {
    display: "flex",
    maxWidth: 700,
    height: 47,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    lineHeight: "30px",
    textAlign: "left",
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      height: 80,
      marginLeft: 10,
      lineHeight: "35px",
    },
    [theme.breakpoints.only("md")]: {
      height: 105,
      fontSize: 25,
      marginLeft: -20,
      maxWidth: 500,
    },
  },
  text: {
    display: "flex",
    maxWidth: 600,
    height: 200,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 10,
    },
    [theme.breakpoints.only("md")]: {
      height: 230,
      lineHeight: "30px",
      fontSize: 18,
      maxWidth: 550,
      marginLeft: -20,
    },
  },
  img: {
    width: 453.92,
    height: 340.62,
    marginTop: 30,
    borderRadius: 10,
    [theme.breakpoints.only("md")]: {
      width: 350,
      height: 300,
      marginLeft: 20,
      marginTop: 30,
    },
  },
  backimg: {
    width: 400.92,
    height: 340.62,
    marginTop: 30,
    borderRadius: 10,
    [theme.breakpoints.only("md")]: {
      width: 340,
      height: 220,
      marginLeft: 20,
    },
  },
}));

export default function ServicesTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        classes={{
          indicator: classes.indicator,
        }}
        aria-label="simple tabs example"
      >
        <Tab
          label="Mobile Development"
          className={classes.name}
          {...a11yProps(0)}
        />
        <Tab
          label="Front-End development"
          className={classes.name}
          {...a11yProps(1)}
        />
        <Tab
          label="Back-End development"
          className={classes.name}
          {...a11yProps(2)}
        />
        <Tab
          label="Quality- Assurance"
          className={classes.name}
          {...a11yProps(3)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid
            item
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className={classes.heading}>
              As more customers move exclusively to mobile, we will ensure that
              you’re there waiting for them.
            </Box>
            <Box className={classes.text}>
              At Techtiz, a premier app development company, we provide
              best-in-class App Development services using the latest tools,
              frameworks, and pre-defined methodologies.
            </Box>
            <Box className={classes.fieldroot}>
              <Box style={{ height: 50 }}>
                <img src={react} alt="" className={classes.apple} />
                <Box className={classes.applet}>React Native</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={flutter} alt="" className={classes.apple} />
                <Box className={classes.applet}>Flutter</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={apple} alt="" className={classes.apple} />
                <Box className={classes.applet}>Apple</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={android} alt="" className={classes.apple} />
                <Box className={classes.applet}>Android</Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            item
            md={5}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={pic3} alt="" className={classes.img} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid
            item
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className={classes.heading}>
              Backing You At The Very First Click
            </Box>
            <Box className={classes.text}>
              Utilize the performance of our highly qualified front-end
              development team to create interactive custom web and mobile
              applications to deliver a pixel-perfect, user-friendly experience.
            </Box>
            <Box className={classes.fieldroot} style={{ width: 300 }}>
              <Box style={{ height: 50 }}>
                <img src={react} alt="" className={classes.apple} />
                <Box className={classes.applet}>React js</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={html} alt="" className={classes.apple} />
                <Box className={classes.applet}>HTML5</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={css} alt="" className={classes.apple} />
                <Box className={classes.applet}>CCS3</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} style={{ display: "flex", alignItems: "center" }}>
            <img src={pic2} alt="" className={classes.img} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid
            item
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className={classes.heading}>
              Ensure Your Brand Gets The Bespoke Platform It Deserves
            </Box>
            <Box className={classes.text}>
              Our Backend development team will help create intuitive custom web
              and mobile application backends to operate your online business
              smoothly while providing a captivating user experience for both
              users and your team members alike.
            </Box>
            <Box className={classes.fieldroot} style={{ width: 300 }}>
              <Box style={{ height: 50 }}>
                <img src={ruby} alt="" className={classes.apple} />
                <Box className={classes.applet}>Ruby Js</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={node} alt="" className={classes.apple} />
                <Box className={classes.applet}>Node js</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={exp} alt="" className={classes.apple} />
                <Box className={classes.applet}>Firebase</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} style={{ display: "flex", alignItems: "center" }}>
            <img src={pic1} alt="" className={classes.backimg} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container>
          <Grid
            item
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className={classes.heading}>
              Satsifaction of Client is Our First Priority
            </Box>
            <Box className={classes.text}>
              We have compiled a team of highly professional and talented QA
              engineers who reshapes project processes to ensure that our
              clients enjoy a competitive edge in the customer experience
              market! With our years of expertise and credibility, we have
              crafted a client-centric methodology that aligns us with our
              customer’s goals efficiently. Our quality assurance services are
              fast, scalable, and adaptive towards our client’s needs!
            </Box>
            {/* <Box className={classes.fieldroot} style={{ width: 300 }}>
              <Box style={{ height: 50 }}>
                <img src={selinium} alt="" className={classes.apple} />
                <Box className={classes.applet}>Selenium</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={katolon} alt="" className={classes.apple} />
                <Box className={classes.applet}>Katalon</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={appium} alt="" className={classes.apple} />
                <Box className={classes.applet}>Appium</Box>
              </Box>
            </Box> */}
          </Grid>
          <Grid item md={5} style={{ display: "flex", alignItems: "center" }}>
            <img src={pic4} alt="" className={classes.img} />
          </Grid>
        </Grid>
      </TabPanel>
      <Fields />
    </div>
  );
}
