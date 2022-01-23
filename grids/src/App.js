import { Route, Switch } from "react-router-dom";
import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import mockData from "./mockData";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      />
    </Switch>
  );
}

export default App;
