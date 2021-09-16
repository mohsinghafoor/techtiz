import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
import clutch from "../../assets/clutch.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  eclipse: {
    position: "absolute",
    width: 873,
    height: 873,
    left: 344,
    top: 3875,
    borderRadius: "30rem",
    border: " 100px solid rgba(127, 198, 220, 0.1)",
    boxSizing: "border-box",
  },
  heading: {
    position: "absolute",
    width: 852,
    height: 214,
    left: 354,
    top: 3992,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "72px",
    textAlign: "center",

    color: "#3B3E56",
  },
  subheading: {
    position: "absolute",
    width: 949,
    height: 209,
    left: 306,
    top: 4159,

    fontFamily: " Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "143.4%",
    /* or 43 */

    textAlign: "center",

    color: "#777777",
  },
  name: {
    position: "absolute",
    width: 427,
    height: 40,
    left: 567,
    top: 4300,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",
    textAlign: " center",

    color: "#000000",
  },
  company: {
    position: "absolute",
    width: 200,
    height: 40,
    left: 670,
    top: 4360,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: "37px",
    textAlign: "center",

    color: "#1840CF",
  },
  dflex: {
    position: "absolute",
    width: 550,
    height: 141,
    left: 500,
    top: 4500,

    background: "#FAFCFF",
    boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 25,
  },
  clutchimg: {
    position: "absolute",
    width: 149,
    height: 40,
    left: 509,
    top: 4535,
  },
  starbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 160,
    marginLeft: 170,
    marginTop: 38,
  },
  star: {
    color: "#FFC107",
  },
  text: {
    position: "absolute",
    width: 368,
    height: 41,
    left: 675,
    top: 4570,

    fontFamily: " Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "20px",

    color: "#000000",
  },
  leftarrow: {
    position: "absolute",
    left: 105,
    top: 4232,
    color: "black",
    fontSize: 40,
    transform: "rotate(-135.12deg)",
  },
  rightarrow: {
    position: "absolute",
    left: 1395,
    top: 4232,
    fontSize: 40,
    transform: "rotate(44deg)",
  },
}));

export default function Feedback() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CallMadeIcon className={classes.leftarrow} />
      <Box className={classes.eclipse}></Box>
      <Typography className={classes.heading}>
        Valuable Feedbacks from our Satisfied Clients
      </Typography>
      <Typography className={classes.subheading}>
        "They have gone above and beyond to make very tight deadlines and exceed
        my expectations."
      </Typography>
      <Typography className={classes.name}>Norbu Snow-Shiva, COO</Typography>
      <Typography className={classes.company}>World Tree Consulting</Typography>
      <a href="https://clutch.co/profile/techtiz-0#reviews">
        <Box className={classes.dflex}>
          <Box className={classes.starbox}>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
          </Box>
        </Box>
        <img src={clutch} alt="" className={classes.clutchimg} />

        <Typography className={classes.text}>
          Rated 5.0/5.0 for web development, mobile development and design
          services
        </Typography>
      </a>
      <CallMadeIcon className={classes.rightarrow} />
    </Container>
  );
}
