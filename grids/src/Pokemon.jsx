import React from 'react';

export default function Pokemon(props) {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return <div>{`this is the pokemon #${pokemonId}`}</div>;
}
