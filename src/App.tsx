import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Contracts from './pages/contracts/Contracts';
import Customers from './pages/customers/Customers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
