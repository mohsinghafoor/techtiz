import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import FooterAccordion from "./accordian";
import { WebFooter } from "./webfooter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 150,
    [theme.breakpoints.up("lg")]: {
      marginTop: 100,
    },
  },
  copyright: {
    height: 111,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "24px",
    /* or 133% */
    background: "#F5F5F5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      marginTop: 50,
    },
  },
}));

export default function ResponsiveFooter() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isMobile ? <FooterAccordion /> : <WebFooter />}

      <Box className={classes.copyright}>
        © 2021 Techtiz All Rights Reserved. Terms & Conditions | Privacy policy
      </Box>
    </div>
  );
}
