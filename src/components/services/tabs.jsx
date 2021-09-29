import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import FrontEnd from "./frontend";
import BackEnd from "./backend";
import Quality from "./quality";
import PictureSide from "./mobiledevlop";

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
    display: "flex",
    [theme.breakpoints.only("md")]: {
      marginLeft: 25,
      maxWidth: 1100,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 25,
      width: 1200,
    },
  },
  indicator: {
    width: 4,
    height: 3,
    left: 56,
    background: "yellow",
    color: "black",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    textAlign: "left",
    lineHeight: "40px",
    [theme.breakpoints.only("md")]: {
      fontSize: 22,
    },
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
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        activeColor="black"
        textColor="black"
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
        <PictureSide />
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
    </div>
  );
}
