import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Grid, Box } from "@material-ui/core";
import pic1 from "../../assets/backend1.png";
import pic2 from "../../assets/what.png";
import pic3 from "../../assets/new.jpg";
import pic4 from "../../assets/quality1.png";
import Fields from "./fields";
import apple from "../../assets/apple.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import android from "../../assets/android.png";
import flutter from "../../assets/flutter.png";
import node from "../../assets/node gray.png";
import html from "../../assets/html gray.png";
import selinium from "../../assets/selenium.png";
import katolon from "../../assets/katalon.png";
import appium from "../../assets/appium.png";
import css from "../../assets/css3.svg";

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
    marginLeft: 40,
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
    // lineHeight: 47,
    textAlign: "left",
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      height: 80,
      marginLeft: 10,
    },
    [theme.breakpoints.only("md")]: {
      height: 90,
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
      height: 290,
      lineHeight: "40px",
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
              Join the future of mobility with our expertise
            </Box>
            <Box className={classes.text}>
              At techtiz , the best mobile app development company in pakistan,
              an apt pt and efficient cross-functional team is always on a
              lookout for challenges that ask for creating visually stunning &
              functionally effective mobile apps.
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
              What We Offer as Front End Team
            </Box>
            <Box className={classes.text}>
              Get Services of our highly qualified front end development team to
              create interative custom web and mobile applications to deliver
              pixel perfect ,stunning user experience.
            </Box>
            <Box className={classes.fieldroot} style={{ width: 400 }}>
              <Box style={{ height: 50 }}>
                <img src={react} alt="" className={classes.apple} />
                <Box className={classes.applet}>React js</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={flutter} alt="" className={classes.apple} />
                <Box className={classes.applet}>Flutter</Box>
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
              Get Services of our Experienced Back End Team
            </Box>
            <Box className={classes.text}>
              Our Backend development team will help you to create interative
              custom web and mobile applications backends to smoothly run your
              online business , and to provide stunning user experience to both
              Customer and Users.
            </Box>
            <Box className={classes.fieldroot} style={{ width: 180 }}>
              <Box style={{ height: 50 }}>
                <img src={angular} alt="" className={classes.apple} />
                <Box className={classes.applet}>Angular</Box>
              </Box>
              <Box style={{ height: 50 }}>
                <img src={node} alt="" className={classes.apple} />
                <Box className={classes.applet}>Node js</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} style={{ display: "flex", alignItems: "center" }}>
            <img src={pic1} alt="" className={classes.img} />
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
              We have a team of professional experts having years of experience
              in this field. Our specialized team can provide custom web
              solutions to establish your business online.
            </Box>
            <Box className={classes.fieldroot} style={{ width: 300 }}>
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
            </Box>
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
