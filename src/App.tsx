import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contracts from './pages/contracts/Contracts';
import Customers from './pages/customers/Customers';

import styled from '@emotion/styled';

const AppDiv = styled.div({
  fontFamily: 'Arial, Helvetica, sans-serif',
});

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
