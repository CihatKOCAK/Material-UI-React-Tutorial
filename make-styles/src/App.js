import React from "react";
import Coolbutton from "./Coolbutton";
import Buttons from "./Buttons"
import { Grid } from "@mui/material";

export default function App() {
  const cool = false;
  //Get Style Example --> CoolButton
  return (
    <Grid item container direction="column">
      <Coolbutton cool={cool}></Coolbutton>
      <Buttons />
    </Grid>
  );
}
