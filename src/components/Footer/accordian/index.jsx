import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ServicesAccordian } from "./services";
import { ReviewAccordian } from "./reviews";
import { StackAccordian } from "./technologystack";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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

    color: "#000000",
  },
  expandedPanel: {
    color: "#FFC107",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
  parent: {
    width: 350,
    [theme.breakpoints.only("sm")]: {
      width: 550,
    },
  },
}));

export default function FooterAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            <Box className={classes.heading}>Services</Box>
          </AccordionSummary>
          <AccordionDetails>
            <ServicesAccordian />
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
            <Box className={classes.heading}>Technology Stacks</Box>
          </AccordionSummary>
          <AccordionDetails>
            <StackAccordian />
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
            <Box className={classes.heading}>Reviews</Box>
          </AccordionSummary>
          <AccordionDetails>
            <ReviewAccordian />
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
