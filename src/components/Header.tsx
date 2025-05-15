import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1rem;
  max-width: 56rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4B5563;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const GetStartedButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #1F2937;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>
        MAKE YOUR SPEND, WELL-SPENT
      </Title>
      <Description>
        Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big life goals? Reach them faster.
        However you spend — Revolut is all you need.
      </Description>
      <GetStartedButton>
        Get started
      </GetStartedButton>
    </HeaderContainer>
  );
};

export default Header; 