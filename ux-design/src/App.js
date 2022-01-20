import { Grid } from "@mui/material";
import Content from "./Content";
import Header from "./Header";

function App() {
  //12'lik sistem var 2 sol 2 sağ boşluk content ise 8'lik alanda
  return (
    <Grid container direction="column">
      <Header />
      <Grid item container>
        <Grid item xs={2} /> 
        <Grid item xs={8}>
         <Content />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

export default App;
