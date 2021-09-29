import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import react from "../../assets/react.png";
import flutter from "../../assets/flutter.png";
import angular from "../../assets/angular.png";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import MailIcon from "@material-ui/icons/Mail";
import linkedin from "../../assets/linkedin.png";
import clutch from "../../assets/clutchfooter.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
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
    height: 15,
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
  cnticon: {
    width: 30,
    height: 30,
  },
});
export const WebFooter = () => {
  const classes = useStyles();
  return (
    <Container style={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <Box className={classes.title}>Services</Box>
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

      <Box>
        <Box className={classes.title}>Technology Stacks</Box>
        <Box display="flex">
          <Box>
            <Box className={classes.dflex} mt={5}>
              <Box>
                <img className={classes.iconStyles} src={apple} alt="" />
              </Box>
              <Box ml={1} className={classes.iconName}>
                Apple
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.iconStyles} src={android} alt="" />
              <Box ml={1} className={classes.iconName}>
                Android
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.icon} src={react} alt="" />
              <Box ml={1} className={classes.iconName}>
                React native
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.icon} src={flutter} alt="" />
              <Box ml={1} className={classes.iconName}>
                Flutter
              </Box>
            </Box>
          </Box>
          <Box ml={2}>
            <Box className={classes.dflex} mt={5}>
              <img className={classes.icon} src={angular} alt="" />
              <Box ml={1} className={classes.iconName}>
                Angular .js
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.icon} src={html} alt="" />
              <Box ml={1} className={classes.iconName}>
                HTML 5
              </Box>
            </Box>
            <Box className={classes.dflex} mt={4}>
              <img className={classes.node} src={node} alt="" />
              <Box ml={1} className={classes.iconName}>
                Node .js
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box className={classes.title}>Contact Us</Box>
        <Box mt={4}>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Box className={classes.dflex} mt={4}>
              <MailIcon style={{ color: "red", fontSize: 30 }} />
              <Box ml={1} className={classes.iconName}>
                contact@techtiz.com
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
          <a
            href="https://www.linkedin.com/company/techtiz/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex} mt={4}>
              <img className={classes.cnticon} src={linkedin} alt="" />
              <Box ml={1} className={classes.iconName}>
                Linkedin
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
        </Box>
      </Box>
    </Container>
  );
};
