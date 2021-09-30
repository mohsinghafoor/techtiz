import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import logo from "../../assets/a.svg";
import { Link } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  itembox: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    [theme.breakpoints.only("sm")]: {
      width: 300,
    },
    [theme.breakpoints.only("md")]: {
      width: 300,
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
    height: 20,
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
      height: 30,
    },
  },
  a: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    [theme.breakpoints.only("md")]: {
      width: 200,
      marginBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
      marginBottom: 20,
    },
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
      <img src={logo} alt="" className={classes.logo} />
      <IconButton className={classes.a}>
        <Link to="services">
          <Box className={classes.items}>About Us</Box>
        </Link>
      </IconButton>
      <IconButton className={classes.a}>
        <Link to="services">
          <Box className={classes.items}>Services</Box>
        </Link>
      </IconButton>
      <IconButton className={classes.a}>
        <Link to="process">
          <Box className={classes.items}>Process</Box>
        </Link>
      </IconButton>
      <IconButton className={classes.a}>
        <Link to="expertise">
          <Box className={classes.items}>Expertise</Box>
        </Link>
      </IconButton>

      <IconButton className={classes.a}>
        <Link to="process">
          <Box className={classes.items}>Portfolio</Box>
        </Link>
      </IconButton>
    </Box>
  );
}
