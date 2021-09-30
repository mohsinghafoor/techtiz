import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Grid, Box } from "@material-ui/core";
import pic1 from "../../assets/backend.png";
import pic2 from "../../assets/frontend.png";
import pic3 from "../../assets/10.png";
import pic4 from "../../assets/quality.png";
import Fields from "./fields";

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
  name: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    textAlign: "left",
    marginLeft: 30,
    height: 94,
    fontWeight: 300,
    fontSize: 26,
    lineHeight: "47px",
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
      marginLeft: 0,
    },
  },
  indicator: {
    height: 3,
    background: "yellow",
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
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 10,
    },
    [theme.breakpoints.only("md")]: {
      height: 90,
      lineHeight: "40px",
      fontSize: 18,
      maxWidth: 550,
      marginLeft: -20,
    },
  },
  img: {
    width: 403.92,
    height: 401.62,
    [theme.breakpoints.only("md")]: {
      width: 360,
      height: 360,
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
          label="Quality Assurance"
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
          </Grid>
          <Grid item item md={5}>
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
              Top class front end development services to create interative
              custom web and mobile applications to deliver pixel perfect
              ,stunning user experience.
            </Box>
          </Grid>
          <Grid item md={5}>
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
              Top class Backend development services to create interative custom
              web and mobile applications to deliver pixel perfect ,stunning
              user experience.
            </Box>
          </Grid>
          <Grid item md={5}>
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
          </Grid>
          <Grid item md={5}>
            <img src={pic4} alt="" className={classes.img} />
          </Grid>
        </Grid>
      </TabPanel>
      <Fields />
    </div>
  );
}
