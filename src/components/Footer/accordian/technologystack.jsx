import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import apple from "../../../assets/apple.png";
import android from "../../../assets/android.png";
import react from "../../../assets/react.png";
import flutter from "../../../assets/flutter.png";
import angular from "../../../assets/angular.png";
import html from "../../../assets/html.png";
import node from "../../../assets/node1.png";
const useStyles = makeStyles({
  bulletPoint: {
    backgroundColor: "#C4C4C4",
    width: "9.64px",
    height: "7.7px",
    borderRadius: 10,
  },
  iconStyles: {
    width: 18,
    height: 24,
  },
  icon: {
    width: 22,
    height: 24,
  },
  node: {
    width: 22,
    height: 22,
    marginLeft: 4,
  },
  dflex: {
    display: "flex",
    alignItems: "center",
  },
  iconName: {
    fontSize: 14,
    fontWeight: 300,
    color: "#000000",
    fontFamily: "Axiforma",
  },
  title: {
    fontSize: 30,
    fontWeight: 300,
    fontFamily: "Axiforma",
  },
});
export const StackAccordian = () => {
  const classes = useStyles();
  return (
    <Container style={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <Box display="flex">
          <Box>
            <Box className={classes.dflex} mt={5}>
              <Box>
                <img className={classes.iconStyles} src={apple} alt="" />
              </Box>
              <Box ml={1} className={classes.iconName}>
                Apple
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.iconStyles} src={android} alt="" />
              <Box ml={1} className={classes.iconName}>
                Android
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.icon} src={react} alt="" />
              <Box ml={1} className={classes.iconName}>
                React native
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.icon} src={flutter} alt="" />
              <Box ml={1} className={classes.iconName}>
                Flutter
              </Box>
            </Box>
          </Box>
          <Box ml={2}>
            <Box className={classes.dflex} mt={5}>
              <img className={classes.icon} src={angular} alt="" />
              <Box ml={1} className={classes.iconName}>
                Angular .js
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.icon} src={html} alt="" />
              <Box ml={1} className={classes.iconName}>
                HTML 5
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.node} src={node} alt="" />
              <Box ml={1} className={classes.iconName}>
                Node .js
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
