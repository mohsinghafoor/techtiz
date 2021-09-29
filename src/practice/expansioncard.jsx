import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Typography,
  Button,
  Collapse,
  Card,
  CardActions,
  CardContent,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 562,

    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.only("md")]: {
      maxWidth: 380,
      height: 480,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 350,
      height: 480,
    },
  },
  heading: {
    maxWidth: 489,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",
    paddingTop: 30,
    color: "#3B3E56",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 50,
      fontSize: 24,
      paddingTop: 10,
      lineHeight: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 60,
      fontSize: 20,
      lineHeight: "40px",
    },
  },
  text: {
    maxWidth: 482,
    height: 335,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "35px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 335,
      fontSize: 18,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 250,
      fontSize: 16,
      lineHeight: "28px",
    },
  },
  btn: {
    width: 191,
    height: 50,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 22,

    "&:hover": {
      background: "#D3D3D3",
    },
    /* identical to box height */

    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: { marginTop: 60 },
  },
  line: {
    position: "absolute",
    width: 10,
    marginLeft: -16,
    marginTop: 11,
    height: 78,
    background: "#FFC107",
  },
  expand: {
    transform: "rotate(0deg)",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    text: "Read Less",
  },
}));

export default function ExpansionCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.line} />
        <Box className={classes.heading}>Flutter vs React Native 2021</Box>
        <Box className={classes.text}>
          Flutter is a open-source software development kit (SDK) developed by
          google . It develop IOS and Android applications using a single
          codebase only. In other words, Flutter app development is worth
          considering because it builds intuitive , fast and responsive
          applications that function on multiple platforms effortlessly . it has
          pre-written codes with customizable and easy to use widgets
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          className={clsx(classes.expand, classes.btn, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Read More
          {/* <Button>Read More</Button> */}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box className={classes.text}>
            Flutter also has documentation, libraries and tools that function
            altogether to develop cross platforms application. You’d never
            experience lag or glitches when using Flutter apps. All because of
            the Skia Graphics Library, the UI is redrawn whenever a view
            changes. The majority of the process takes place on GPU which
            results in a smooth UI. Flutter’s UI ensures a lightning-fast
            delivery of 60fps
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
