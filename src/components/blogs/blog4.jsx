import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button, Box } from "@material-ui/core";
import img from "../../assets/blog2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 562,
    height: 581,
    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.only("md")]: {
      maxWidth: 380,
      height: 480,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 350,
      height: 480,
    },
  },
  img: {
    width: 562,
    height: 242,
    borderRadius: 27,
    [theme.breakpoints.only("md")]: {
      maxWidth: 380,
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 150,
    },
  },
  heading: {
    width: 520,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    color: "#000000",
    marginTop: 30,
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 80,
      fontSize: 24,
      lineHeight: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 80,
      fontSize: 20,
      lineHeight: "40px",
    },
  },
  text: {
    width: 520,
    height: 67,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 40,
      fontSize: 18,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      fontSize: 16,
      lineHeight: "28px",
      height: 43,
    },
  },
  btn: {
    width: 157,
    height: 50,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "22px",
    /* identical to box height */

    color: "#FFFFFF",
    marginTop: 55,
    marginLeft: "-22rem",
    "&:hover": {
      background: "#D3D3D3",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "-12rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-10rem",
    },
  },
}));

export default function Blog4() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={img} alt="" className={classes.img} />
      <Box className={classes.heading}>
        Join the future of mobility with our expertise
      </Box>
      <Box className={classes.text}>
        For close to a decade, Intelivita being a top mobile app development
      </Box>
      <Button className={classes.btn}>Details</Button>
    </Card>
  );
}
