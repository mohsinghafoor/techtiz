import { makeStyles, Box, Link } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "Circular-Loom",
    color: "#000000",
    marginTop: 35,
    cursor: "pointer",
  },
  description: {
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "Circular-Loom",
    color: "#000000",
    lineHeight: "29px",
    marginTop: 10,
  },
  img: {
    height: 300,
  },
});
export const ServeImages = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <img className={classes.img} src={image} />
      </Box>
      <Box className={classes.title}> {title}</Box>

      <Box className={classes.description}>{description}</Box>
    </Box>
  );
};
