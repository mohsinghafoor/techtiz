import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Typography, Button } from "@material-ui/core";
import clock from "../../assets/clock.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    position: "absolute",
    width: 410,
    height: 462,
    left: 942,
    top: 4908,

    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
  },
  heading: {
    position: "absolute",
    width: 190,
    height: 37,
    left: 1046,
    top: 5021.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",

    color: "#000000",
  },
  img: {
    position: "absolute",
    width: 80,
    height: 80,
    left: 1097,
    top: 4927,
  },
  line: {
    position: "absolute",
    width: 268,
    height: 2,
    left: 1013,
    top: 5077.21,

    background: "#C4C4C4",
  },
  circle: {
    position: "absolute",
    width: 18,
    height: 18,
    left: 1135,
    top: 5070.21,
    borderRadius: "20rem",
    background: "#81B1C1",
  },
  text: {
    position: "absolute",
    width: 297,
    height: 100,
    left: 1013,
    top: 5106.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "25px",

    color: "#000000",
  },
  text2: {
    position: "absolute",
    width: 297,
    height: 84,
    left: 1013,
    top: 5178.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "22px",
    /* or 22 */

    color: " #000000",
  },
  btn: {
    position: "absolute",
    width: 223,
    height: 50,
    left: 1046,
    top: 5284.21,

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
  },
}));

export default function Card2() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}></Card>
      <img src={clock} alt="" className={classes.img} />
      <Typography className={classes.heading}>Hourly Basis</Typography>
      <Box className={classes.line} />
      <Box className={classes.circle} />
      <Typography className={classes.text}>
        TechTiz offers a maintenance follow-up after launching your application.
      </Typography>
      <Typography className={classes.text2}>
        This reduces the operational hassle and removes any unprecedented bug
        from the application.
      </Typography>
      <Button className={classes.btn}>Let’s Begin</Button>
    </Container>
  );
}
