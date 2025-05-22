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
  return (
    <Container>
      <Dashboard />
      <PokemonList />
    </Container>
  );
};

export default Dex;
