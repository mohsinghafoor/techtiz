import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Box } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  mainheading: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "116.1%",
    /* identical to box height, or 35px */
    alignItems: "center",
    color: "#3B3E56",
  },
  heading: {
    width: 284,
    height: 29,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "133%",
    /* or 29px */
    [theme.breakpoints.down("xs")]: {
      width: 250,
      fontSize: 18,
    },
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsheading: {
    width: 500,
    height: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    /* identical to box height */

    // textAlign: "center",

    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      width: 370,
      fontSize: 18,
    },
  },
  details: {
    width: 531,
    height: 120,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "28px",

    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      width: 360,
      fontSize: 14,
    },
  },
  btn: {
    width: 320,
    height: 53,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 40,
    [theme.breakpoints.down("xs")]: {
      width: 290,
      fontSize: 12,
      height: 48,
    },
  },
  parent: {
    width: 350,
  },
  expandedPanel: {
    color: "#FFC107",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
}));

export default function IndustriesAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainheading}>Industries we work</Box>
      <Box className={classes.parent}>
        <Accordion
          elevation={0}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box className={classes.heading}>Food</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box className={classes.heading}>E-Commerce</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box className={classes.heading}>Social</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box className={classes.heading}>Education</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box className={classes.heading}>MarketPlace</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
