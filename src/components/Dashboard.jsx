import React from "react";
import styled from "styled-components";
import {
  Card,
  PokemonImage,
  Name,
  Number,
  Button as RemoveButton,
} from "./styles/CardStyles";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: white;
  margin: 2rem auto;
  border-radius: 12px;
  width: 80%;
  border: 4px solid red;
  padding-bottom: 10px;
`;

const SelectedPokemon = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  color: red;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: black;
  margin-top: 70px;
`;

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const Dashboard = ({ selectedPokemons, removePokemon }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <SelectedPokemon>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="monsterball"
        />
        선택된 포켓몬
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="monsterball"
        />
      </SelectedPokemon>
      {selectedPokemons.length === 0 ? (
        <EmptyMessage>선택된 포켓몬이 없습니다</EmptyMessage>
      ) : (
        <PokemonList>
          {selectedPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              onClick={() => navigate(`/detail?id=${pokemon.id}`)}
            >
              <PokemonImage src={pokemon.image} alt={pokemon.name} />
              <Name>{pokemon.name}</Name>
              <Number>No.{pokemon.id}</Number>
              <RemoveButton
                onClick={(e) => {
                  e.stopPropagation();
                  removePokemon(pokemon.id);
                }}
              >
                삭제
              </RemoveButton>
            </Card>
          ))}
        </PokemonList>
      )}
    </Wrapper>
  );
};

export default Dashboard;
