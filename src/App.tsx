import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App-background">
      <ResponsiveAppBar />
      <div className="App-background">
      </div>
    </div>
  );
}

export default App;
