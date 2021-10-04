import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Paper, Box } from "@material-ui/core";
import emailjs from "emailjs-com";
const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "-15rem",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 635.81,
    height: 718,
    background: "#F6FDFF",
    boxShadow: "-7px 7px 9px 4px rgba(24, 64, 207, 0.1)",
    borderRadius: 39,
    [theme.breakpoints.only("md")]: {
      width: 743.81,
      height: 758,
    },
    [theme.breakpoints.only("sm")]: {
      width: 447.81,
      height: 500,
    },
    [theme.breakpoints.only("xs")]: {
      width: 340.81,
      height: 500,
    },

    // position: "absolute",
  },
  heading: {
    width: 416.65,
    height: 76.48,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 40,
    lineHeight: "67px",
    textAlign: "center",

    color: "#3B3E56",
    [theme.breakpoints.down("sm")]: {
      width: 276,
      height: 60,
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 60,
      fontSize: 25,
    },
  },

  btnbox1: {
    height: 70,
    width: 500,
    [theme.breakpoints.only("md")]: {
      width: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 60,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 60,
    },
  },
  upperbtn: {
    width: 235.15,
    height: 46.8,
    background: "#FFFFFF",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "22px",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      width: 245,
      fontSize: 15,
    },
    [theme.breakpoints.down("sm")]: {
      width: 178,
      height: 30,
      fontSize: 11,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 30,
      fontSize: 9,
    },
  },
  lowerbtn: {
    width: 200.15,
    height: 46.8,
    background: "#FFFFFF",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "22px",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      width: 220,
      fontSize: 15,
    },
    [theme.breakpoints.down("sm")]: {
      width: 140,
      height: 29,
      fontSize: 11,
    },
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 30,
      fontSize: 9,
    },
  },
  inputbox: {
    display: "flex",
    width: 550,
    height: 70,
    justifyContent: "space-between",
    [theme.breakpoints.only("md")]: {
      width: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 60,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 60,
    },
  },

  inputTitle: {
    width: 255.69,
    height: 43.38,
    outline: "unset",
    color: "black",
    fontWeight: 300,
    fontSize: 12,
    fontFamily: "Axiforma",
    outline: 0,
    border: "1px solid #7FC6DC",
    borderRadius: 6,
    paddingLeft: 10,
    [theme.breakpoints.only("md")]: {
      width: 270,
    },
    [theme.breakpoints.down("sm")]: {
      width: 180,
      height: 29,
      fontSize: 11,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 29,
      fontSize: 11,
    },
  },
  email: {
    width: 550,
    height: 43.38,
    background: "#FFFFFF",
    border: "1px solid #7FC6DC",
    boxSizing: " border-box",
    borderRadius: 6,
    outline: 0,
    paddingLeft: 10,
    [theme.breakpoints.only("md")]: {
      width: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 35,
      fontSize: 12,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 30,
      fontSize: 11,
    },
  },
  help: {
    width: 550,
    height: 119.86,
    background: "#FFFFFF",
    border: "1px solid #7FC6DC",
    boxSizing: "border-box",
    borderRadius: 6,
    outline: 0,
    paddingBottom: 70,
    paddingLeft: 10,
    marginBottom: 30,
    [theme.breakpoints.only("md")]: {
      width: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      // height: 70,
      fontSize: 12,
      height: 100.86,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 90,
      fontSize: 11,
      paddingBottom: 50,
    },
  },
  msg: {
    width: 550.43,
    height: 66.53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "16px",
    color: "#787878",
    [theme.breakpoints.only("md")]: {
      width: 590,
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      width: 390,
      height: 70,
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 60,
      fontSize: 11,
    },
  },
  sendbtn: {
    width: 223.73,
    height: 53.65,
    background: "#FFC107",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    border: 0,
    color: "#FFFFFF",
    marginBottom: 10,
    "&:hover": {
      background: "#ADD8E6",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      width: 148,
      height: 34,
      marginBottom: 20,
    },
  },

  height: {
    height: 70,
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    emailjs
      .sendForm(
        "service_bzsah6a",
        "template_jwp5luo",
        e.target,
        "user_ANsS2m1U6X5tLv44aTOIp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
  };

  return (
    <form className={classes.paper} onSubmit={sendEmail}>
      <Box className={classes.heading}>Contact Us About</Box>
      <Box className={classes.btnbox1}>
        <Button className={classes.upperbtn}>Web Development</Button>
        <Button className={classes.upperbtn}>Front-end Development</Button>
      </Box>
      <Box className={classes.btnbox1}>
        <Button className={classes.lowerbtn}>App Development</Button>
        <Button className={classes.lowerbtn}>Quality assurance</Button>
      </Box>

      <Box className={classes.inputbox}>
        <input
          type="text"
          className={classes.inputTitle}
          placeholder="First Name*"
          name="name"
        />
        <input
          type="text"
          className={classes.inputTitle}
          placeholder="Last Name*"
          name="lname"
        />
      </Box>
      <Box className={classes.inputbox}>
        <input
          type="text"
          className={classes.inputTitle}
          placeholder="(+92 )  301 5484 298"
          name="mobile"
        />

        <input
          type="text"
          className={classes.inputTitle}
          placeholder="Country* :"
          name="country"
        />
      </Box>
      <Box className={classes.height}>
        <input
          type="email"
          className={classes.email}
          placeholder="Email* :"
          name="user_email"
        />
      </Box>
      <input
        type="text"
        name="message"
        className={classes.help}
        placeholder="How Can We Help You?* :"
      />
      <Box className={classes.msg}>
        By sending this form I confirm that I have read and accept Intellectsoft
        Privacy Policy
      </Box>
      <button type="submit" className={classes.sendbtn}>
        SEND
      </button>
    </form>
  );
}
