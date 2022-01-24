import React, { useEffect } from 'react';
import {
  AppBar, Card, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Toolbar, Typography
} from "@material-ui/core"
import mockData from "./mockData";
import { useState } from 'react';
import { toFirstCharUppercase } from './contants';
import pokemon from 'pokemontcgsdk'
import { Pagination } from '@mui/material';

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  CardContent: {
    textAlign: 'center',
  },
  pokedexPaginotion: {
    display: 'flex',
    justifyContent: 'center',

  }
});

export default function Pokedex(props) {
  const { history } = props;
  
  const getPokemonCard = (pokemonId) => {
    const { id, name, images, rarity  } = pokeData[`${pokemonId}`];
    return (
      <Grid item xs={12} sm={3}>
        <Card onClick={() => history.push(`/${id}`)}><CardMedia
          className={classes.cardMedia}
          image={images.small}
          style={{ width: '245px', height: '342px' }}
        />
          <CardContent className={classes.CardContent}>
            <Typography>{name}</Typography>
            <Typography>{rarity ? "Rarity: " + rarity : "Null"}</Typography>
          </CardContent> </Card>
      </Grid>
    )
  };
  const classes = useStyles();
  const [pokeData, setPokeData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  useEffect(() => {
    pokemon.configure({ apiKey: '2f267b09-0f6e-4ecd-aa3f-9b22cd800c2f' })
    pokemon.card.where({ pageSize: 12, page: pageNumber })
      .then(result => {
        setPokeData(result.data);
        console.log(result.data)
      });
  }, []);

  useEffect(() => {
    pokemon.configure({ apiKey: '2f267b09-0f6e-4ecd-aa3f-9b22cd800c2f' })
    pokemon.card.where({ pageSize: 12, page: pageNumber })
      .then(result => {
        setPokeData(result.data);
      });
  },[pageNumber]);
  return (

    <>
      <AppBar position='static'>
        <Toolbar />
      </AppBar>
      {pokeData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokeData).map(id =>
            getPokemonCard(id))}
        </Grid>
      ) : (
        <CircularProgress />
      )}

      <Grid className={classes.pokedexPaginotion}>
        <Pagination size='large'  page={pageNumber}  onChange={(handleChange)} count={10} color="primary" />
      </Grid>


    </>
  );
}
