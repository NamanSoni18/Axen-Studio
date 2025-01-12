import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/InnerComponent/Home/Home';

function App() {
  return (
    <Routes>
      {/* Root layout with Navbar */}
      <Route path="/" element={<Navbar />}>
        {/* Child routes */}
        <Route index element={<Home />} />
        Hello
      </Route>
    </Routes>
  );
}

export default App;
