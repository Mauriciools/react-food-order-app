import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
