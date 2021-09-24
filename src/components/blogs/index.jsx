import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box } from "@material-ui/core";
import Blog1 from "./blog1";
import Blog2 from "./blog2";
import Blog3 from "./blog3";
import Blog4 from "./blog4";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 460,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "92px",
    color: "#3B3E56",
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
      maxWidth: 280,
    },
  },
}));

export default function Blogs() {
  const classes = useStyles();

  return (
    <Grid container className={classes.main} spacing={3}>
      <Grid item md={12} style={{ display: "flex", justifyContent: "center" }}>
        <Box className={classes.heading}>Our Latest Blog</Box>
      </Grid>
      <Grid item md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Blog1 />
      </Grid>
      <Grid
        item
        md={6}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Blog2 />
      </Grid>
      <Grid item md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Blog3 />
      </Grid>
      <Grid
        item
        md={6}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Blog4 />
      </Grid>
    </Grid>
  );
}
