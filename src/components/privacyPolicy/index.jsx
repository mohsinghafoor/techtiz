import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  bgClr: {
    backgroundColor: "#F5F5F5",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Axiforma",
    fontSize: 18,
    fontWeight: 300,
    color: "#000000",
    marginTop: 20,
  },
  divider: {
    backgroundColor: "#EDEDED",
    height: 2,
    width: 1500,
    marginTop: 25,
  },
});
export const PrivacyPolocy = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.divider}></Box>
      <Box className={classes.bgClr}>
        <Box classes={classes.text} mt={3} mb={3}>
          © 2021 Techtiz All Rights Reserved. Terms & Conditions | Privacy
          policy
        </Box>
      </Box>
    </>
  );
};
