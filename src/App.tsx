import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Work from './components/Work';
import Docs from './components/DocList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Work/>
      <Docs/>
    </div>
  );
}

export default App;
