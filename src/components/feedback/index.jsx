import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
import clutch from "../../assets/clutch.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 100,
  },
  eclipse: {
    position: "absolute",
    width: 873,
    height: 873,
    borderRadius: "30rem",
    border: " 100px solid rgba(127, 198, 220, 0.1)",
    boxSizing: "border-box",
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
  },
  dflex: {
    display: "flex",
    width: 550,
    marginTop: 70,
    height: 141,
    background: "#FAFCFF",
    boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 25,
  },
  clutchimg: {
    width: 149,
    height: 40,
    marginTop: 30,
  },
  starbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 160,
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
  },
  leftarrow: {
    position: "absolute",
    color: "black",
    marginTop: 400,
    marginLeft: "-40rem",
    fontSize: 40,
    transform: "rotate(-135.12deg)",
  },
  rightarrow: {
    position: "absolute",
    fontSize: 40,
    marginTop: 400,
    marginLeft: "40rem",
    transform: "rotate(44deg)",
  },
}));

export default function Feedback() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CallMadeIcon className={classes.leftarrow} />
      <Box className={classes.eclipse}></Box>
      <Box className={classes.heading}>
        Valuable Feedbacks from our Satisfied Clients
      </Box>
      <Box className={classes.subheading}>
        "They have gone above and beyond to make very tight deadlines and exceed
        my expectations."
      </Box>
      <Box className={classes.name}>Norbu Snow-Shiva, COO</Box>
      <Box className={classes.company}>World Tree Consulting</Box>
      <a href="https://clutch.co/profile/techtiz-0#reviews">
        {" "}
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
      </a>
      <CallMadeIcon className={classes.rightarrow} />
    </Container>
  );
}
