import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Box, Grid } from "@material-ui/core";
import food from "../../assets/food.png";
import social from "../../assets/social.png";
import ecommerce from "../../assets/ecommercimg.png";
import market from "../../assets/market.png";
import education from "../../assets/education.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
    [theme.breakpoints.only("md")]: {
      width: 600,
    },
  },
  mainheading: {
    width: 780,
    height: 78,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "64px",
    color: "#3B3E56",
    [theme.breakpoints.only("md")]: {
      fontSize: 45,
      width: 580,
      height: 78,
    },
  },
  subheading: {
    width: 780,
    height: 110,
    // fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    lineHeight: "37px",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
      width: 580,
      height: 100,
    },
  },
  heading: {
    display: "flex",
    maxWidth: 729,
    height: 45,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "143.4%",
    /* or 43px */

    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      marginTop: 30,
    },
    [theme.breakpoints.only("md")]: {
      maxWidth: 484,
      fontSize: 24,
    },
  },
  text: {
    display: "flex",
    maxWidth: 600,
    height: 174,

    // fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 584,
      height: 178,
    },
  },
  img: {
    width: 380,
    height: 540,
    position: "absolute",
    marginLeft: "-28.5rem",
    marginTop: "-20.5rem",
    borderRadius: 34,
    [theme.breakpoints.only("md")]: {
      width: 320,
      height: 450,
      marginLeft: "-23rem",
      marginTop: "-16.5rem",
    },
  },
  indicator: {
    height: 3,
    background: "yellow",
    width: 100,
  },
  name: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    textAlign: "left",
    lineHeight: "32px",
    marginLeft: -10,
    [theme.breakpoints.only("md")]: {
      fontSize: 16,
    },
  },
}));

export default function IndustriesTest() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <Box className={classes.mainheading}>Industries We Work</Box>
      <Box className={classes.subheading}>
        We Help a diverse clientele build result-driven mobile apps for
        different industries
      </Box>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab label="Food" {...a11yProps(0)} className={classes.name} />
          <Tab label="E-Commerce" {...a11yProps(1)} className={classes.name} />
          <Tab label="Social" {...a11yProps(2)} className={classes.name} />
          <Tab label="Education" {...a11yProps(3)} className={classes.name} />
          <Tab label="Marketplace" {...a11yProps(4)} className={classes.name} />
        </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <img src={food} alt="" className={classes.img} />
          <Box className={classes.heading}>Food</Box>
          <Box className={classes.text}>
            Techtiz offers food app development services to the clients. Our
            developers have expertise to create interative , easy to manage apps
            with latest technologies . Streamline the process of selling your
            food online , with our mobile apps
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img src={ecommerce} alt="" className={classes.img} />
          <Box className={classes.heading}>E-Commerce</Box>
          <Box className={classes.text}>
            WE provides the best development services for E-Commerce with the
            most suitable development strategies for all customers. To ensure
            our clients receive a successful E-Commerce web design process, we
            have a dedicated team of specialist consultants, developers, and
            project managers
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <img src={social} alt="" className={classes.img} />
          <Box className={classes.heading}>Social</Box>
          <Box className={classes.text}>
            Techtiz is the ultimate smartphone application development company.
            Our creative and hardworking team designs and develops the best apps
            that you wish to possess. Be it iPad or iPhone, android or Web, our
            expert team develop such inspiring apps that are guaranteed to suit
            your taste, and yield profitable results for you.
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <img src={education} alt="" className={classes.img} />
          <Box className={classes.heading}>Social</Box>
          <Box className={classes.text}>
            We provides School website development , Education application that
            will benefits both teacher and students . We built prefect designs
            that are easy to use .
          </Box>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <img src={market} alt="" className={classes.img} />
          <Box className={classes.heading}>Marketplace</Box>
          <Box className={classes.text}>
            Our team of developers has the expertise and experience to develop
            full-fledged cutting-edge mobile and cross-platform applications to
            cater to users’ growing demands in today’s competitive markets. From
            developing full-scale product solutions for large enterprises to
            need-specific solutions of different businesses, we offer end-to-end
            Solution
          </Box>
        </TabPanel>
      </div>
    </Grid>
  );
}
