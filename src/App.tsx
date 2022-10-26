import React from 'react';
import './styles/App.less';
import Header from './components/Header'
import Main from './components/Main';
import Work from './components/Work';
import Docs from './components/DocList';
import Form from './components/Form'
import Map from './components/Map';
import Footer from './components/Footer';
import GlobalFonts from "./assets/__fonts/fonts"
function App() {
  return (
      <div className="App">
        <GlobalFonts/>
      <Header/>
      <Main/>
      <Work/>
      <Docs/>
      <Form/>
      <Map/>
      <Footer/>
    </div>

   
  );
}

export default App;
