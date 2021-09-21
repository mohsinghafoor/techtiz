import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    width: 409,
    height: 462,
    marginTop: 130,
    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.up("lg")]: { marginLeft: 50 },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function DummyCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent></CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
