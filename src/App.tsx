import React from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Header from './components/Header'
import Sobre from './pages/Sobre';


function App() {
  return (
    <>
    <Header/>
    <Home />
    <Sobre />
    <GlobalStyle />
    </>
  );
}

export default App;
