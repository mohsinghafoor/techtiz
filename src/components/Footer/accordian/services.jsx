import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
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
    width: 52,
    height: 22,
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
  service: {
    fontSize: 18,
    fontWeight: 300,
    color: "#4E4E4E",
    fontFamily: "Axiforma",
  },
  clutchStyles: {
    width: 100,
    height: 95,
  },
  clutchDetail: {
    fontSize: 14,
    fontWeight: 300,
    color: "#000000",
    width: 219,
    fontFamily: "Axiforma",
    // marginLeft: "auto",
    textAlign: "left",
    marginTop: 10,
  },
  divider: {
    width: 1510,
    height: "1.54px",
    backgroundColor: "#EDEDED",
  },
});
export const ServicesAccordian = () => {
  const classes = useStyles();
  return (
    <Container style={{ display: "flex" }}>
      <Box>
        <Box mt={5}>
          <Box className={classes.dflex} mt={4}>
            <Box className={classes.bulletPoint}></Box>
            <Box className={classes.service} ml={1}>
              Front-end Development
            </Box>
          </Box>
          <Box className={classes.dflex} mt={4}>
            <Box className={classes.bulletPoint}></Box>
            <Box className={classes.service} ml={1}>
              Back-end Development
            </Box>
          </Box>
          <Box className={classes.dflex} mt={4}>
            <Box className={classes.bulletPoint}></Box>
            <Box className={classes.service} ml={1}>
              App Development
            </Box>
          </Box>
          <Box className={classes.dflex} mt={4}>
            <Box className={classes.bulletPoint}></Box>
            <Box className={classes.service} ml={1}>
              Quality Assurance
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
