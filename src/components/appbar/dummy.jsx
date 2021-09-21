import { Drawer, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import DrawerList from "./drawerList";
const useStyles = makeStyles((theme) => ({
  menubtn: {
    color: "black",
    fontSize: 36,
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
    },
  },
}));

export const DummyDrawer = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(!open)}>
        <Menu className={classes.menubtn} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <DrawerList onClose={() => setOpen(false)} />
      </Drawer>
    </React.Fragment>
  );
};
