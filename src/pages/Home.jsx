import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
`;

const TitleImage = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 1rem;
`;

const StartButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <Container>
      <TitleImage
        src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
        alt="Pokemon Title"
      />
      <StartButton onClick={goToDex}>포켓몬 도감 시작하기</StartButton>
    </Container>
  );
};

export default Home;
