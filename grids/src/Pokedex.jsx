import React from 'react';
import {
  AppBar, Card, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Toolbar
} from "@material-ui/core"
import mockData from "./mockData";
import { useState } from 'react';

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  cardMedia:{
    margin:'auto',
  }
});

export default function Pokedex() {

  const getPokemonCard = (pokemonId) => {
    //console.log(pokemonData[`${pokemonId}`]);
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <Grid item xs={12} sm={4}>
        <Card><CardMedia
          className={classes.cardMedia}
          image={sprite}
          style={{ width: '130px', height: '130px' }}
        /> </Card>
      </Grid>
    )
  };
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);

  return (

    <>
      <AppBar position='static'>
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map(pokemonId =>
            getPokemonCard(pokemonId))}
        </Grid>
      ) : (
        <CircularProgress />
      )}

    </>
  );
}
