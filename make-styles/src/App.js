import React, { useState } from "react";
import Coolbutton from "./Coolbutton";
import Buttons from "./Buttons";
import Typographyexapmles from "./Typographyexapmles";
import { Grid, Paper, Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export default function App() {
  const cool = false;
  //Get Style Example --> CoolButton

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      /*
      primary: purple,
      secondary: green,
      */
    },
    typography: {
      h1: {
        fontSize: "10em",
        fontFamily: "Raleway, Arial",
      },
    },
  });

  const greenTheme = createTheme({
    palette:{
      primary: green,
      secondary: green,
    },
  });
  return (
    <ThemeProvider theme={darkMode ? theme : greenTheme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Coolbutton cool={cool}></Coolbutton>
          <Buttons />
          <Typographyexapmles />
          <Switch checked = {darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
