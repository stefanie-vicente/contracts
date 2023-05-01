import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeDiv = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
});

const LinksDiv = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
});

const Home = () => (
  <HomeDiv>
    <h1>The Contract Automation Plataform</h1>
    <LinksDiv>
      <Link to="/contracts">Contracts</Link>
      <Link to="/customers">Customers</Link>
    </LinksDiv>
  </HomeDiv>
);

export default Home;
