import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import Food from "./food";
import Ecommerce from "./ecommerce";
import Social from "./social";
import Education from "./education";
import Market from "./market";
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 981,
  },
  parent: {
    position: "absolute",
    width: 750,
    height: 52,
    left: 670,
    top: 3460,
  },
  indicator: {
    height: 3,
    background: "yellow",
  },
  name: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    textAlign: "left",
    lineHeight: "32px",
  },
  yettocome: {
    marginLeft: 500,
  },
}));
export default function IndustriesTab() {
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
    <Container className={classes.root}>
      <Tabs
        className={classes.parent}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        classes={{
          indicator: classes.indicator,
        }}
      >
        <Tab label="Food" {...a11yProps(0)} className={classes.name} />
        <Tab label="E-commerce" {...a11yProps(1)} className={classes.name} />
        <Tab label="Social" {...a11yProps(2)} className={classes.name} />
        <Tab label="Education" {...a11yProps(3)} className={classes.name} />
        <Tab label="Marketplace" {...a11yProps(4)} className={classes.name} />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        className={classes.name}
      >
        <Food />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Ecommerce />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Social />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <Market />
      </TabPanel>
    </Container>
  );
}
