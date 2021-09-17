import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Cards } from "../cards";
const usestyles = makeStyles({
  bgClr: {
    backgroundColor: "#FFF9F4",
    padding: 40,
  },
  heading: {
    fontWeight: 700,
    fontSize: 45,
    lineHeight: "1.2em",
    color: "#000000",
    fontFamily: "Circular-Loom",
    display: "flex",
    justifyContent: "center",
  },
  headingDetail: {
    color: "#000000",
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "Circular-Loom",
    marginTop: 25,
    width: "85%",
    lineHeight: "25px",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});
export const OurServices = ({ image, name, description }) => {
  const classes = usestyles();

  return (
    <Box className={classes.bgClr}>
      <Box className={classes.heading}>Our Services</Box>
      <Box className={classes.dFlex}>
        <Box className={classes.headingDetail}>
          Since its inception, Tech Tiz has been honing productoutput through
          the skilled teamsthat it employs. Our main goal is to see our
          clientsscale their business and increasetheir customer base through
          effective, user-friendlymobile applications.These ideashave led to a
          system that starts with and works foryou and your needs. We cater
          tothese needs across all industries.
        </Box>
      </Box>
      <Grid spacing={8} container>
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Android-2.png"
          name="Android​"
          description="TechTiz mobile developers utilize the open-sourcespirit of Android to give youan app thatdoes the same"
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Ios-1.png"
          name="iOS"
          description="TechTiz builds secure and practical iOS applicationsthat prioritize polish anduser satisfaction."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/responsive_screen-512-copy-1.png"
          name="Cross-Platform ​​"
          description="Our experts take your app and ensure that it runs impeccably across allplatforms, spreading your reach."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Web-Development-1.png"
          name="Back-end ​ ​​"
          description="Our experts design cross-platform apps to facilitate the users and help you grow across different devices."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/117-1174725_cloud-computing-cloud-computing-icon-transparent-1.png"
          name="Cloud-based apps ​​"
          description="TechTiz app development team is well-equipped witha wealth of codinglanguages uniquely applicable for cloud services andoptimizing your customapp."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Game-Development-1.png"
          name="Game development ​​​"
          description="Our 2D and 3D animators can bring your concepts tolife backed by rigorousQA testing."
        />
      </Grid>
    </Box>
  );
};
