import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 120px;
  height: 260px;
  padding: 1rem;
  border: 5px solid red;
  border-radius: 10px;
  background-color: lightgray;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PokemonImage = styled.img`
  border: 5px solid red;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: white;
`;

export const Name = styled.h3`
  margin-top: 0.5rem;
  color: black;
`;

export const Number = styled.p`
  color: black;
`;

export const Button = styled.button`
  margin-top: 1rem;
  background-color: red;
  color: white;
  border: none;
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
