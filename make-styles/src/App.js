import React from "react";
import Coolbutton from "./Coolbutton";
import Buttons from "./Buttons";
import Typographyexapmles from "./Typographyexapmles";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export default function App() {
  const cool = false;
  //Get Style Example --> CoolButton

  const theme = createTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
    typography: {
      h1: {
        fontSize: "10em",
        fontFamily: "Raleway, Arial",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid item container direction="column">
        <Coolbutton cool={cool}></Coolbutton>
        <Buttons />
        <Typographyexapmles />
      </Grid>
    </ThemeProvider>
  );
}
