import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { ChooseUSCard } from "../chooseUsCard";
const card = [
  {
    title: "Fixed Price",
    description:
      "A fixed price agreement involves giving the required details of the project that includes everything from the software, design, and features of the project. All requirements are transparent to both client and team in order to avoid readily modifications.",
  },
  {
    title: "Dedicated Resource",
    description:
      "Dedicated Resource enables customers to handle the project on their own, assigning tasks to the resource, and altering priorities. Billing is done on a monthly basis for each resource that is being used for the project.",
  },

  {
    title: "Hourly Basis",
    description:
      "This model is suitable for projects that require the availability of resources on any stage of the development process. Clients only pay for the work that is required and resources are available on an immediate basis.",
  },
];
const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    fontSize: 45,
    fontFamily: "Circular-Loom",
    color: "#000000",
    marginTop: 20,
  },
  mb: {
    marginBottom: 50,
  },
});
export const OurPricing = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.title}>Our Pricing Models</Box>
      <Grid container className={classes.mb} spacing={4}>
        {card.map((item) => (
          <Grid item xs={11} sm={10} md={6} lg>
            <ChooseUSCard title={item.title} description={item.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
