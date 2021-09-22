import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import FooterAccordion from "./accordian";
import { PracticeFooter } from "./footerpractice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 150,
    [theme.breakpoints.up("lg")]: {
      marginTop: 700,
    },
  },
}));

export default function ResponsiveFooter() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isMobile ? <FooterAccordion /> : <PracticeFooter />}
    </div>
  );
}
