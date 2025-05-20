import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: lightpink;
  padding: 10px;
`;

const Dex = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      alert("포켓몬은 최대 여섯마리까지만 선택할수 있습니다.");
      return;
    }

    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const removePokemon = (id) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList addPokemon={addPokemon} />
    </Container>
  );
};

export default Dex;
