import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import clutch from "../../assets/clutch.png";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: 100,
    },
  },
  eclipse: {
    position: "absolute",
    width: 873,
    height: 873,
    borderRadius: "30rem",
    border: " 100px solid rgba(127, 198, 220, 0.1)",
    boxSizing: "border-box",
    [theme.breakpoints.only("md")]: {
      width: 730.58,
      height: 730.58,
    },
    [theme.breakpoints.down("sm")]: {
      width: 454,
      height: 454,
      border: " 62px solid rgba(127, 198, 220, 0.1)",
    },
    [theme.breakpoints.down("xs")]: {
      width: 334,
      height: 344,
      border: " 42px solid rgba(127, 198, 220, 0.1)",
    },
  },
  heading: {
    width: 852,
    marginTop: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "72px",
    textAlign: "center",
    color: "#3B3E56",
    [theme.breakpoints.only("md")]: {
      fontSize: 45,
      lineHeight: "130.1%",
      width: 713,
      height: 100,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      width: 420,
      height: 40,
      lineHeight: "130.1%",
      marginTop: 50,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
      maxWidth: 330,
      height: 20,
      lineHeight: "130.1%",
      marginTop: 30,
    },
  },
  subheading: {
    width: 949,
    marginTop: 50,
    fontFamily: " Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "143.4%",
    /* or 43 */

    textAlign: "center",

    color: "#777777",
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
      width: 764,
      height: 60,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      width: 524,
      height: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      maxWidth: 330,
      height: 15,
    },
  },
  name: {
    width: 427,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",
    textAlign: " center",
    color: "#000000",
    marginTop: 30,
    [theme.breakpoints.only("md")]: {
      width: 290,
      height: 50,
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      width: 290,
      height: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 290,
      height: 10,
    },
  },
  company: {
    width: 200,
    height: 40,
    marginTop: 20,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: "37px",
    textAlign: "center",
    color: "#1840CF",
    [theme.breakpoints.only("md")]: {
      width: 200.49,
      height: 33.47,
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      width: 220,
      height: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 220,
      height: 0,
    },
  },
  dflex: {
    display: "flex",
    width: 550,
    marginTop: 70,
    height: 141,
    background: "#E6E6FA",
    boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 25,
    [theme.breakpoints.only("md")]: {
      width: 446,
      height: 125,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 120,
      marginTop: 50,
    },
    [theme.breakpoints.down("xs")]: {
      width: 290,
      height: 90,
      marginTop: 50,
    },
  },
  clutchimg: {
    width: 149,
    height: 40,
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      width: 90,
      height: 30,
      marginTop: 20,
    },
  },
  starbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 160,
    marginTop: -10,
    [theme.breakpoints.down("xs")]: {
      marginTop: -25,
      width: 120,
    },
  },
  star: {
    color: "#FFC107",
  },
  text: {
    width: 368,
    height: 41,
    fontFamily: " Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "20px",
    textDecoration: "none",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 14,
      width: 300,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      width: 250,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      lineHeight: "18px",
      width: 200,
    },
  },
}));

export default function FeedbackTest() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.eclipse} />
      <Box className={classes.heading}>
        Valuable Feedbacks from our Satisfied Clients
      </Box>
      <Box className={classes.subheading}>
        "They have gone above and beyond to make very tight deadlines and exceed
        my expectations."
      </Box>
      <Box className={classes.name}>Norbu Snow-Shiva, COO</Box>
      <Box className={classes.company}>World Tree Consulting</Box>
      <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
        <Box className={classes.dflex}>
          <img src={clutch} alt="" className={classes.clutchimg} />
          <Box style={{ marginTop: 40, marginLeft: 10 }}>
            <Box className={classes.starbox}>
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
            </Box>
            <Box className={classes.text}>
              Rated 5.0/5.0 for web development, mobile development and design
              services
            </Box>
          </Box>
        </Box>
      </Link>
    </Container>
  );
}
