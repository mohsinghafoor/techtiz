import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, Box } from "@material-ui/core";
import logo from "../../assets/a.svg";
import { DummyDrawer } from "./dummy";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  dflex: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  btn: {
    background: "#FFC107",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    color: "#FFFFFF",
    fontFamily: "Axiforma",
    borderRadius: "10rem",
    "&:hover": {
      background: "#ADD8E6",
    },
  },
  img: {
    width: 150,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 130,
    },
  },
  menubutton: {
    width: 53,
    borderRadius: 0,
    color: "#5B5B5B",
  },
  itembox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  menubutton: {
    color: "#5B5B5B",
  },
}));

export default function AppbarDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
        style={{ background: "white" }}
      >
        <Toolbar>
          <DummyDrawer />
          <img src={logo} alt="" className={classes.img} />
          <Box className={classes.dflex}>
            <Button className={classes.btn}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
