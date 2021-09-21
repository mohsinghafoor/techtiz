import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, ButtonBase } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  itembox: {
    marginTop: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    [theme.breakpoints.only("sm")]: {
      width: 300,
    },
    [theme.breakpoints.only("md")]: {
      width: 500,
    },
  },
  items: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "35px",
    /* identical to box height */
    color: "#000000",
    height: 50,
  },
  atag: {
    textDecoration: "none",
  },
}));

export default function DrawerList({ onClose }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState([false, false, false]);

  const handleClick = (id) => {
    let newVal = [...open];
    newVal[id] = !newVal[id];
    setOpen([...newVal]);
  };

  return (
    <Box className={classes.itembox}>
      <a href="#" className={classes.atag}>
        <Box className={classes.items}>Services</Box>
      </a>
      <a href="#" className={classes.atag}>
        <Box className={classes.items}>Expertise</Box>
      </a>
      <a href="#" className={classes.atag}>
        <Box className={classes.items}>About</Box>
      </a>
      <a href="#" className={classes.atag}>
        <Box className={classes.items}>Porfolio</Box>
      </a>
    </Box>
  );
}
