import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../../assets/img1.png";
import { Container, Box, Button } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    width: 473,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 42 */

    textAlign: "center",

    color: "#3B3E56",
    [theme.breakpoints.down("xs")]: {
      width: 350,
      fontSize: 24,
    },
  },
  img: {
    position: "absolute",
    width: 375,
    height: 251,
    borderRadius: 20,
    marginTop: "10rem",
    [theme.breakpoints.down("xs")]: {
      width: 350,
      height: 240,
    },
  },
  blue: {
    width: 93,
    height: 312.55,
    background: "#7FC6DC",
    borderRadius: 275,
    transform: " matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
    marginTop: -38,
    marginLeft: -77,
    [theme.breakpoints.only("xs")]: {
      marginTop: -38,
      marginLeft: -51,
      width: 75,
    },
  },
  yellow: {
    width: 84.69,
    height: 292.17,
    background: "#FFC107",
    borderRadius: 275,
    transform: " matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
    marginTop: -118,
    marginRight: -96,
    [theme.breakpoints.down("xs")]: {
      marginTop: -130,
      marginRight: -76,
      width: 74,
    },
  },
  text: {
    width: 465,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "28px",
    textAlign: "center",
    color: "#1E3849",
    [theme.breakpoints.down("xs")]: {
      width: 350,
      fontSize: 14,
    },
  },
  btn: {
    width: 230,
    height: 40,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "28px",
    textAlign: "center",
    marginTop: 10,
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      width: 200,
      fontSize: 12,
      height: 35,
      paddingTop: 10,
      marginTop: 20,
    },
  },
}));

export default function MobileStack() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.heading}>
        A Full-Stack Web and Mobile App Development Company​​
      </Box>
      <Box className={classes.blue}></Box>
      <Box className={classes.yellow}></Box>
      <img src={img1} alt="" className={classes.img} />
      <Box className={classes.text}>
        With a team full of extraordinarily creative minds, we bring a new
        digital life to your business. Techtiz, building applications that
        connect!
      </Box>
      <Link to="contact">
        <Button className={classes.btn}>Connect with Us Today! </Button>
      </Link>
    </Container>
  );
}
