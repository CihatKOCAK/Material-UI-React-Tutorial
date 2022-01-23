import { Link, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { toFirstCharUppercase } from './contants';
import mockData from './mockData';

export default function Pokemon(props) {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);
  const genaretePokemonJSX = () => {
    const { name, id, spacies, height, weight, types, sprites } = pokemon;
    //spaces is error -> link is broken
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Typography variant='h1'>
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} />
        </Typography>
        <img style={{ width: '300px', height: '300px' }} src={fullImageUrl} />
        <Typography>{"Spacites: "}
          <Link href={spacies.url}>{spacies.name}</Link>
        </Typography>
        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography variant="h6">Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}>{`${name}`}</Typography>
        })}
      </>
    )
  };
  return (
    <>
      {genaretePokemonJSX()}
    </>
  );
}
