import React from "react";
import PokemonCard from "./PokemonCard";
import { MOCK_DATA } from "../mock";
import styled from "styled-components";

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PokemonList = () => {
  return (
    <CardGrid>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardGrid>
  );
};

export default PokemonList;
