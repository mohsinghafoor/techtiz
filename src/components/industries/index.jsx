import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IndustriesAccordion from "./accordian";
import IndustriesTab from "./industriestab";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 20,
    [theme.breakpoints.up("lg")]: {
      marginTop: 80,
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: 20,
    },
  },
}));

export default function Industries() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.main} id="expertise">
      {isMobile ? <IndustriesAccordion /> : <IndustriesTab />}
    </div>
  );
}
