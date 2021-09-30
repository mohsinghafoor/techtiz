import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Box, Button } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import mobile from "../../assets/big.png";
import small1 from "../../assets/small1.png";
import small2 from "../../assets/small2.png";
import small3 from "../../assets/small3.png";
import pic1 from "../../assets/frontend.png";
import pic2 from "../../assets/backend.png";
import pic3 from "../../assets/quality.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
    textAlign: "center",

    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      width: 600,
      fontSize: 20,
      height: 50,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      fontSize: 16,
      height: 70,
    },
  },
  mobiledetails: {
    width: 531,
    height: 200,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "28px",
    textAlign: "center",
    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      width: 320,
      fontSize: 12,
    },
  },
  details: {
    width: 531,
    height: 130,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "28px",

    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      width: 320,
      fontSize: 12,
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
    width: 272.41,
    height: 272.41,
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
    borderRadius: "10rem",
  },
  parent: {
    width: 350,
  },
  img: {
    position: "absolute",
    width: 211.13,
    height: 309.22,
    filter: "drop-shadow(9px 0px 14px rgba(0, 0, 0, 0.25))",
    transform: "rotate(17.78deg)",
    marginTop: 180,
    marginLeft: 10,
  },
  expandedPanel: {
    color: "#FFC107",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
  content: {
    justifyContent: "center",
  },
  pic1: {
    position: "absolute",
    width: 122.42,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    height: 79.56,
    transform: "rotate(20.12deg)",
    borderRadius: 21,
    marginLeft: 20,
    marginTop: 36,
  },
  pic2: {
    width: 146.42,
    filter: "drop-shadow( 4px 4px rgba(0, 0, 0, 0.25))",
    height: 83.56,
    position: "absolute",
    transform: "rotate(18.12deg)",
    marginTop: 212,
    marginLeft: 41,
    borderRadius: 21,
  },
  pic3: {
    width: 146.42,
    filter: "drop-shadow( 4px 4px rgba(0, 0, 0, 0.25))",
    height: 83.56,
    position: "absolute",
    transform: "rotate(18.12deg)",
    marginTop: 258,
    marginLeft: -98,
    borderRadius: 21,
  },
}));

export default function AccordionServices(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainheading}>Our Valued Services</Box>
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
            classes={{ content: classes.content }}
          >
            <Box className={classes.heading}>Mobile Devolpment</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              Join the future of mobility with our expertise
            </Box>
            <Box className={classes.mobiledetails}>
              At techtiz , the best mobile app development company in pakistan,
              an apt pt and efficient cross-functional team is always on a
              lookout for challenges that ask for creating visually stunning &
              functionally effective mobile apps.
            </Box>
            <Box className={classes.circle}></Box>

            <img src={mobile} alt="" className={classes.img} />
            <img src={small1} alt="" className={classes.pic1} />
            <img src={small2} alt="" className={classes.pic2} />
            <img src={small3} alt="" className={classes.pic3} />
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
            classes={{ content: classes.content }}
          >
            <Box className={classes.heading}>Front-end Development</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              What We Offer as a Frontend Team
            </Box>
            <Box className={classes.details}>
              Top class front end development services to create interative
              custom web and mobile applications to deliver pixel perfect
              ,stunning user experience.
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
            classes={{ content: classes.content }}
          >
            <Box className={classes.heading}>Back-end Development</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              Get Services of Our Experienced Backend Team
            </Box>
            <Box className={classes.details}>
              Top class Backend development services to create interative custom
              web and mobile applications to deliver pixel perfect ,stunning
              user experience.
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
            classes={{ content: classes.content }}
          >
            <Box className={classes.heading}>Quality assurance</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              Satsifaction of Customer is Our First Priority
            </Box>
            <Box className={classes.details}>
              We have a team of professional experts having years of experience
              in this field. Our specialized team can provide custom web
              solutions to establish your business online.
            </Box>
            <img src={pic3} alt="" style={{ width: 300 }} />
            <Button className={classes.btn}>
              Calculate App Devolopment Cast
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
