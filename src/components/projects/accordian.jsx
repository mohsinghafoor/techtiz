import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Box, Button } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import qrat from "../../assets/qrat.png";
import mobilefront from "../../assets/mobilefront.png";
import mobileback from "../../assets/mobileback.png";
import qrat2 from "../../assets/qrat2.png";
import mobilefront2 from "../../assets/mobilefront2.png";
import mobileback2 from "../../assets/mobileback2.png";
import qrat3 from "../../assets/qrat3.png";
import mobilefront3 from "../../assets/mobilefront3.png";
import mobileback3 from "../../assets/mobileback3.png";

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
    width: 300,
    height: 29,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
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
    width: 400,
    height: 50,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    lineHeight: "35px",
    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      width: 320,
      fontSize: 18,
      height: 40,
    },
  },
  details: {
    width: 451,
    height: 150,
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
  bigcircle: {
    width: 316.41,
    height: 316.41,
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
    borderRadius: "10rem",
  },
  smallcircle: {
    width: 111,
    height: 112,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
    marginLeft: "-14rem",
    marginTop: 0,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
    marginLeft: "-14rem",
    marginTop: 0,
  },
  parent: {
    width: 350,
  },
  mobilefront: {
    position: "absolute",
    width: 156,
    height: 341,
    borderRadius: 28,
    border: "4px solid black",
    marginLeft: "-3rem",
    marginTop: "11rem",
  },
  mobileback: {
    position: "absolute",
    width: 143,
    height: 315,
    borderRadius: 30,
    marginLeft: "3rem",
    marginTop: "12rem",
    border: "4px solid black",
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
}));

export default function AccordionProjects(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainheading}>Our Recent Projects</Box>
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
            <Box className={classes.heading}>Qartt</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              Packing has never been easier.
            </Box>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
            <Box className={classes.bigcircle}></Box>
            <img src={mobilefront} alt="" className={classes.mobilefront} />
            <img src={mobileback} alt="" className={classes.mobileback} />
            <Box className={classes.smallcircle}></Box>
            <img src={qrat} alt="" className={classes.logo} />

            {/* 
            <img src={qrat} alt="" className={classes.qrat} /> */}
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
            aria-controls="panel1a-content"
            id="panel1a-header"
            classes={{ content: classes.content }}
          >
            <Box className={classes.heading}>Loanzify</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              Packing has never been easier.
            </Box>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
            <Box className={classes.bigcircle}></Box>
            <img src={mobilefront2} alt="" className={classes.mobilefront} />
            <img src={mobileback2} alt="" className={classes.mobileback} />
            <Box className={classes.smallcircle}></Box>
            <img src={qrat2} alt="" className={classes.logo} />

            {/* 
            <img src={qrat} alt="" className={classes.qrat} /> */}
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
            aria-controls="panel1a-content"
            id="panel1a-header"
            classes={{ content: classes.content }}
          >
            <Box className={classes.heading}>Earth</Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.detailsheading}>
              Packing has never been easier.
            </Box>
            <Box className={classes.details}>
              Thank you again for the successful launch of the 3M and Converse
              applications. Your dedication, hard-work, flexibility, patience
              and professionalism is recognized and appreciated.
            </Box>
            <Box className={classes.bigcircle}></Box>
            <img src={mobilefront3} alt="" className={classes.mobilefront} />
            <img src={mobileback3} alt="" className={classes.mobileback} />
            <Box className={classes.smallcircle}></Box>
            <img src={qrat3} alt="" className={classes.logo} />

            {/* 
            <img src={qrat} alt="" className={classes.qrat} /> */}
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
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
        </Accordion>{" "}
        */}
      </Box>
    </div>
  );
}
