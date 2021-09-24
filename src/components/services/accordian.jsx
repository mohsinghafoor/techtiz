import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Box, Button } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import mobile from "../../assets/big.png";
import pic1 from "../../assets/frontend.png";
import pic2 from "../../assets/backend.png";
import pic3 from "../../assets/quality.png";
import Fields from "./fields";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  mainheading: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "113.6%",
    /* or 34px */

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
  suumary: {
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
      width: 320,
      fontSize: 14,
    },
  },
  details: {
    width: 531,
    height: 220,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "28px",

    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      width: 340,
      fontSize: 10,
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
  circle: {
    width: 292.41,
    height: 292.41,
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
    borderRadius: "10rem",
  },
  img: {
    position: "absolute",
    width: 211.13,
    height: 309.22,
    filter: "drop-shadow(9px 0px 14px rgba(0, 0, 0, 0.25))",
    transform: "rotate(17.78deg)",
    marginTop: 170,
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

export default function AccordionServices(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainheading}>Our Valued Services</Box>
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
          <Box className={classes.heading}>Mobile Devolpment</Box>
        </AccordionSummary>
        <AccordionDetails className={classes.suumary}>
          <Box className={classes.detailsheading}>
            Join the future of mobility with our expertise
          </Box>
          <Box className={classes.details}>
            For close to a decade, Intelivita being a top mobile app development
            company has produced apps for various industries and partners, from
            the start-up Social Media app Chatagram, to the Art of Works Virtual
            Reality app for tech giant’s Microsoft, we have worked with them
            all.
          </Box>
          <Box className={classes.circle}></Box>
          <img src={mobile} alt="" className={classes.img} />
          <Button className={classes.btn}>
            Calculate App Devolopment Cast
          </Button>
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
          <Box className={classes.heading}>Front-end Development</Box>
        </AccordionSummary>
        <AccordionDetails className={classes.suumary}>
          <Box className={classes.detailsheading}>
            Join the future of mobility with our expertise
          </Box>
          <Box className={classes.details}>
            For close to a decade, Intelivita being a top mobile app development
            company has produced apps for various industries and partners, from
            the start-up Social Media app Chatagram, to the Art of Works Virtual
            Reality app for tech giant’s Microsoft, we have worked with them
            all.
          </Box>
          <img src={pic1} alt="" style={{ width: 300 }} />
          <Button className={classes.btn}>
            Calculate App Devolopment Cast
          </Button>
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
          <Box className={classes.heading}>Back-end Development</Box>
        </AccordionSummary>
        <AccordionDetails className={classes.suumary}>
          <Box className={classes.detailsheading}>
            Join the future of mobility with our expertise
          </Box>
          <Box className={classes.details}>
            For close to a decade, Intelivita being a top mobile app development
            company has produced apps for various industries and partners, from
            the start-up Social Media app Chatagram, to the Art of Works Virtual
            Reality app for tech giant’s Microsoft, we have worked with them
            all.
          </Box>
          <img src={pic2} alt="" style={{ width: 300 }} />
          <Button className={classes.btn}>
            Calculate App Devolopment Cast
          </Button>
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
          <Box className={classes.heading}>Quality assurance</Box>
        </AccordionSummary>
        <AccordionDetails className={classes.suumary}>
          <Box className={classes.detailsheading}>
            Join the future of mobility with our expertise
          </Box>
          <Box className={classes.details}>
            For close to a decade, Intelivita being a top mobile app development
            company has produced apps for various industries and partners, from
            the start-up Social Media app Chatagram, to the Art of Works Virtual
            Reality app for tech giant’s Microsoft, we have worked with them
            all.
          </Box>
          <img src={pic3} alt="" style={{ width: 300 }} />
          <Button className={classes.btn}>
            Calculate App Devolopment Cast
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
