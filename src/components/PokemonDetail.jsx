import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MOCK_DATA } from "../mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  border: 4px solid red;
  border-radius: 10px;
  background-color: white;
`;

const Name = styled.h2`
  font-size: 2rem;
  color: black;
`;

const Type = styled.p`
  font-size: 1rem;
  color: black;
`;

const Description = styled.p`
  font-size: 1rem;
  color: black;
  margin: 1.2rem 0;
`;

const BackButton = styled.button`
  background-color: red;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  &:hover {
    background-color: darkred;
  }
`;

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <Container>해당 포켓몬 정보가 없습니다.</Container>;
  }

  return (
    <Container>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Type>Type: {pokemon.type.join(", ")}</Type>
      <Description>{pokemon.description}</Description>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </Container>
  );
};

export default PokemonDetail;
