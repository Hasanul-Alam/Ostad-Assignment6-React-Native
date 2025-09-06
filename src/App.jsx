"use client";

import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Theme definition
const theme = {
  primary: "#6366f1",
  secondary: "#f1f5f9",
  background: "#f8fafc",
  text: "#1e293b",
  white: "#ffffff",
  shadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
};

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.background};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const ProfileCard = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${(props) => props.theme.shadow};
  text-align: center;
  transition: all 0.3s ease;
  width: ${(props) => (props.isLarge ? "400px" : "250px")};
  border: 2px solid ${(props) => props.theme.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileImage = styled.img`
  width: ${(props) => (props.isLarge ? "120px" : "80px")};
  height: ${(props) => (props.isLarge ? "120px" : "80px")};
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${(props) => props.theme.primary};
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
`;

const ProfileName = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => (props.isLarge ? "2rem" : "1.5rem")};
  font-weight: bold;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const ProfileBio = styled.p`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => (props.isLarge ? "1.1rem" : "0.9rem")};
  line-height: 1.6;
  opacity: 0.8;
  transition: all 0.3s ease;
`;

const ToggleButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    background: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(0);
    background: #3730a3;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

export default function ProfileCardApp() {
  const [isLarge, setIsLarge] = useState(true);

  const toggleSize = () => {
    setIsLarge(!isLarge);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Title>Profile Card App</Title>
        <ProfileCard isLarge={isLarge}>
          <ProfileImage
            src="/src/assets/self-image.jpg"
            alt="Profile Picture"
            isLarge={isLarge}
          />
          <ProfileName isLarge={isLarge}>Hasanul Alam</ProfileName>
          <ProfileBio isLarge={isLarge}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            veniam corporis minus porro dolor, dicta repellendus atque itaque
            harum deleniti?z
          </ProfileBio>
        </ProfileCard>
        <ToggleButton onClick={toggleSize}>
          {isLarge ? "Make Small Card" : "Make Large Card"}
        </ToggleButton>
      </AppContainer>
    </ThemeProvider>
  );
}
