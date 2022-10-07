import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Work from './components/Work';
import Docs from './components/DocList';
import Form from './components/Form'
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Work/>
      <Docs/>
      <Form/>
      <Map/>
    </div>
  );
}

export default App;
