import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CardSlider from './components/CardSlider';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <CardSlider />
    </AppContainer>
  );
};

export default App; 