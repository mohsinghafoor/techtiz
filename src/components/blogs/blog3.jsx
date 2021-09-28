import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button, Box } from "@material-ui/core";
import img from "../../assets/blog1.png";

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
    width: 530,
    height: 242,
    borderRadius: 27,
    marginTop: 10,
    [theme.breakpoints.only("md")]: {
      maxWidth: 370,
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 150,
    },
  },
  heading: {
    width: 489,
    height: 120,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    color: "#000000",
    marginTop: 30,
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 110,
      fontSize: 24,
      lineHeight: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 80,
      fontSize: 20,
      lineHeight: "40px",
    },
  },
  text: {
    width: 482,
    height: 67,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 10,
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
    "&:hover": {
      background: "#D3D3D3",
    },
    color: "#FFFFFF",
    marginTop: 40,
    marginLeft: "-20rem",
    [theme.breakpoints.only("md")]: {
      marginLeft: "-12rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-10rem",
    },
  },
}));

export default function Blog3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={img} alt="" className={classes.img} />
      <Box className={classes.heading}>
        World-class software solutions for business across the globe.
      </Box>
      <Box className={classes.text}>Design , Development and Consultancy</Box>
      <Button className={classes.btn}>Details</Button>
    </Card>
  );
}
