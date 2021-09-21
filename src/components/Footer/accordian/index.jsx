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
}));

export default function FooterAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion elevation={0}>
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
      <Accordion>
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
      <Accordion>
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
    </div>
  );
}
