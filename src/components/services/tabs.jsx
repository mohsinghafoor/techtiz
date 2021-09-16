import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import TabValue from "./tabvalue";
import MobileSide from "./mobilepic";
import FrontEnd from "./frontend";
import BackEnd from "./backend";
import Quality from "./quality";

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
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    top: 981,
  },
  indicator: {
    position: "absolute",
    width: 4,
    height: 3,
    left: 56,
    background: "yellow",
    color: "black",
  },
  name: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    textAlign: "left",
    lineHeight: "47px",
  },
  yettocome: {
    height: 100,
    FontSize: 40,
  },
}));
export default function ServicesTab() {
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
        <Tab
          label="Mobile Development"
          {...a11yProps(0)}
          className={classes.name}
        />
        <Tab
          label="Front-end Development"
          {...a11yProps(1)}
          className={classes.name}
        />
        <Tab
          label="Back-end Development"
          {...a11yProps(2)}
          className={classes.name}
        />
        <Tab
          label="Quality Assurance"
          {...a11yProps(3)}
          className={classes.name}
        />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        className={classes.name}
      >
        <MobileSide />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <FrontEnd />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <BackEnd />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Quality />
      </TabPanel>
    </Container>
  );
}
