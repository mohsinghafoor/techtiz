import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TabValue from "./tabvalue";
import ServicesTab from "./tabs";
import AccordionServices from "./accordian";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 300,
  },

  services: {
    display: "flex",
    justifyContent: "center",
    // maxWidth: 474,
    height: 105,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "113.6%",
    /* or 51px */

    color: "#3B3E56",
  },
}));

export default function Services() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.main}>
      {isMobile ? (
        <AccordionServices />
      ) : (
        <Container className={classes.root}>
          <Box className={classes.services}>Our Valued Services</Box>
          <ServicesTab />
          <TabValue />
        </Container>
      )}
    </div>
  );
}
