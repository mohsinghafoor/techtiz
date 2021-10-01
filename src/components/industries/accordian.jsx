import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Box } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import food from "../../assets/food.png";
import ecommerce from "../../assets/ecommercimg.png";
import education from "../../assets/education.png";
import market from "../../assets/market1.png";
import socail from "../../assets/social.png";

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
    width: 300,
    marginLeft: "-5rem",
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "116.1%",
    /* identical to box height, or 35px */
    alignItems: "center",
    color: "#3B3E56",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0rem",
    },
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
    // justifyContent: "center",
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
    [theme.breakpoints.down("sm")]: {
      width: 360,
      height: 180,
      fontSize: 14,
    },
  },
  parent: {
    width: 300,
  },
  expandedPanel: {
    color: "#FFC107",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
  img: {
    width: 230.13,
    marginBottom: 30,
    borderRadius: 30,
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
            <img src={food} alt="" className={classes.img} />
            <Box className={classes.details}>
              Techtiz offers food app development services to the clients .Our
              developers have expertise to create interative , easy to manage
              apps with latest technologies . Streamline the process of selling
              your food online , with our mobile apps
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
            <img src={ecommerce} alt="" className={classes.img} />
            <Box className={classes.details}>
              WE provides the best development services for E-Commerce with the
              most suitable development strategies for all customers. To ensure
              our clients receive a successful E-Commerce web design process, we
              have a dedicated team of specialist consultants, developers, and
              project managers
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
            <img src={socail} alt="" className={classes.img} />
            <Box className={classes.details}>
              Techtiz is the ultimate smartphone application development
              company. Our creative and hardworking team designs and develops
              the best apps that you wish to possess. Be it iPad or iPhone,
              android or Web, our expert team develop such inspiring apps that
              are guaranteed to suit your taste, and yield profitable results
              for you.
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
            <img src={education} alt="" className={classes.img} />
            <Box className={classes.details}>
              We provides School website development , Education application
              that will benefits both teacher and students . We built prefect
              designs that are easy to use .
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
            <img src={market} alt="" className={classes.img} />
            <Box className={classes.details}>
              Our team of developers has the expertise and experience to develop
              full-fledged cutting-edge mobile and cross-platform applications
              to cater to users’ growing demands in today’s competitive markets.
              From developing full-scale product solutions for large enterprises
              to need-specific solutions of different businesses, we offer
              end-to-end Solution
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
