import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import linkedin from "../../../assets/linkedin.png";
import React from "react";
import clutch from "../../../assets/clutchfooter.png";
const useStyles = makeStyles({
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
  dflex: {
    display: "flex",
    alignItems: "center",
  },
  cnticon: {
    width: 30,
    height: 30,
  },
});
export const ReviewAccordian = () => {
  const classes = useStyles();
  return (
    <Container style={{ display: "flex" }}>
      <Box>
        <Box mt={5}>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex} mt={4}>
              <MailIcon style={{ color: "red", fontSize: 30 }} />
              <Box ml={1} className={classes.iconName}>
                contact@techtiz.com
              </Box>
            </Box>
          </a>
          <a
            href="https://www.facebook.com/techtiz"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex} mt={4}>
              <FacebookIcon style={{ color: "blue", fontSize: 30 }} />
              <Box ml={1} className={classes.iconName}>
                Facebook
              </Box>
            </Box>
          </a>
          <a
            href="https://www.linkedin.com/company/techtiz/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Box className={classes.dflex} mt={4}>
              <img className={classes.cnticon} src={linkedin} alt="" />
              <Box ml={1} className={classes.iconName}>
                Linkedin
              </Box>
            </Box>
          </a>
          <a
            href="https://clutch.co/profile/techtiz-0#summary"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex} mt={4}>
              <img className={classes.cnticon} src={clutch} alt="" />
              <Box ml={1} className={classes.iconName}>
                Clutch
              </Box>
            </Box>
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex} mt={4}>
              <WhatsAppIcon style={{ color: "#0fa958", fontSize: 30 }} />
              <Box ml={1} className={classes.iconName}>
                +92 334 4265883
              </Box>
            </Box>
          </a>
        </Box>
      </Box>
    </Container>
  );
};
