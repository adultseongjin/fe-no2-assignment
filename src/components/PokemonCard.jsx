import React from "react";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import {
  Card,
  PokemonImage,
  Name,
  Number,
  Button as AddButton,
} from "./styles/CardStyles";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const { addPokemon } = usePokemon();

  const handleCardClick = () => {
    navigate(`/detail?id=${pokemon.id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    addPokemon(pokemon);
  };

  return (
    <Card onClick={handleCardClick}>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Number>No.{pokemon.id}</Number>
      <AddButton onClick={handleAdd}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;
