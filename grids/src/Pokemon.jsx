import { Link, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { toFirstCharUppercase } from './contants';
import mockData from './mockData';
import pokemon from 'pokemontcgsdk'

export default function Pokemon(props) {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokeData, setPokeData] = useState([]);
  console.log(pokemonId)


  console.log("asd")
  pokemon.configure({ apiKey: '2f267b09-0f6e-4ecd-aa3f-9b22cd800c2f' })
  pokemon.card.all({ q: 'set.id:'+pokemonId })
    .then(result => {
      console.log(result.data[0])
      setPokeData(result.data[0])
    });


    console.log(pokeData)
  const genaretePokemonJSX = () => {
    /*
    const { name, id, spacies, height, weight, types, sprites } = pokeData;
    //spaces is error -> link is broken
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
*/

    return (
      <div>hello</div>
      /*
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
      */
    )
  };
  return (
    <>
      {genaretePokemonJSX()}
    </>
  );
}
