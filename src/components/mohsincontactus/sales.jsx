import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 397.24,
    height: 557.05,
    background: "#FFFAF3",
    boxShadow: "0px -1px 17px -5px rgba(0, 0, 0, 0.25)",
    borderRadius: 18,
    [theme.breakpoints.only("md")]: {
      flexDirection: "row",
      width: 800.24,
      height: 200.05,
    },
    [theme.breakpoints.down("sm")]: {
      width: 511.24,
      height: 308.05,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350.24,
      height: 340.05,
    },
  },
  dflex: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    [theme.breakpoints.only("md")]: {
      width: 240.24,
      alignItems: "flex-start",
      justifyContent: "space-even",
    },
    [theme.breakpoints.down("sm")]: {
      width: 470.24,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320.24,
      height: 110,
    },
  },
  heading: {
    width: 269.39,
    height: 42.24,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 22,
    lineHeight: "37px",
    color: "#FFC107",
    [theme.breakpoints.only("md")]: {
      width: 200.39,
      height: 50,
    },
    [theme.breakpoints.down("sm")]: {
      width: 178.24,
      fontSize: 18,
      height: 40,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150.24,
      fontSize: 16,
      height: 30,
    },
  },
  subheading: {
    width: 300.08,
    height: 110.03,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 15,
    lineHeight: "25px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      width: 220.24,
      height: 60.03,
      lineHeight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      width: 467.24,
      fontSize: 18,
      height: 50.03,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300.24,
      fontSize: 15,
    },
  },
}));

export default function MySales() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.dflex}>
        <Box className={classes.heading}>Sales</Box>
        <Box className={classes.subheading}>
          Let us show you what Techtiz can do for your team. Get in touch at
          contact@techtiz.com
        </Box>
      </Box>
      <Box className={classes.dflex}>
        <Box className={classes.heading}>Customer Support</Box>
        <Box className={classes.subheading}>
          For any product or technical questions, reach us at
          contact@techtiz.com Or, check out our Help Center.
        </Box>
      </Box>
      <Box className={classes.dflex}>
        <Box className={classes.heading}>Genral Inquiries</Box>
        <Box className={classes.subheading}>
          For anything else on your mind, including partnership ideas, say
          hello: contact@techtiz.com
        </Box>
      </Box>
    </Box>
  );
}
